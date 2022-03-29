const Booking = require('../models/Booking');
const Company = require('../models/Company');

//@desc     Get all bookings
//@route    Get /api/v1/bookings
//@access   Public
exports.getBookings = async (req,res,next)=>{
    let query;
    if(req.user.role!=='admin')     // admin sees all, user sees limit
        query=Booking.find({user:req.user.id}).populate({path:'company',select:'name province tel'});
    else 
        query=Booking.find().populate({path:'company',select:'name province tel'});
    try{
        const bookings = await query;
        res.status(200).json({success:true,count:bookings.length,data:bookings});
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({success:false,
            message:"Cannot find Booking"});
    }
};

//@desc     Get single booking
//@route    Get /api/v1/bookings/:id
//@access   Public
exports.getBooking = async (req,res,next)=>{
    try{
        let role=req.user.role;
        const booking = await Booking.findById(req.params.id).populate({path:'booking',select:'name description tel'});
        if(!booking){       // Verify existence
            return res.status(404).json({success:false,
                message:`No booking with the id of ${req.params.id}`});
        }
        if(booking.user.toString()!==req.user.id && req.user.role!=='admin'){   // Verify ownership
            return res.status(401).json({success:false,status:role,
                message:`User ${req.user.id} is not authorized to see this booking`});
        }
        res.status(200).json({success:true,data:booking});
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({success:false,
            message:"Cannot find Booking"});
    }
};

//@desc     Add booking
//@route    POST /api/v1/companies/:companyId&date/booking
//@access   Private
exports.addBooking = async (req,res,next)=>{
    try{
        req.body.company = req.params.companyId;
        let role=req.user.role;
        const company = await Hospital.findById(req.params.companyId);
        if(!company){       // Verify existence company
            return res.status(404).json({success:false,
                message:`No company with the id of ${req.params.companyId}`});
        }



        req.body.bookingDate = req.params.date;
        const start = "2022-05-13T09:00:00.377+00:00"; //start.setHours(0, 0, 0, 0);
        const end = "2022-05-13T17:00:00.377+00:00";   //end.setHours(23, 59, 59, 999);
        availableInterviewSession = {$gte:start,$lte:end}
/*
        let interviewSessionPeriod = req.
        if(!interviewSessionPeriod){       // Verify interview session period
            return res.status(404).json({success:false,
                message:`No interview session in ${req.params.companyId}`});
        }
*/

        req.body.user=req.user.id;      //add userId to req.body
        const existedBookings = await Booking.find({user:req.user.id});     //Check for existed booking
        if(existedBookings.length>=3 && req.user.role!=='admin'){   // Can create only 3 booking except admin
            return res.status(400).json({success:false,status:role,
                message:`The user with ID ${req.user.id} has already made 3 bookings`});
        }
        const booking = await Booking.create(req.body);
        res.status(200).json({success:true,status:role,data:booking});
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({success:false,
            message:"Cannot create Booking"});
    }
};

//@desc     Update booking
//@route    Put /api/v1/bookings/:id
//@access   Private
exports.updateBooking = async (req,res,next)=>{
    try{
        let role = req.user.role;
        let booking = await Booking.findById(req.params.id);
        if(!booking){       // Verify existence
            return res.status(404).json({success:false,
                message:`No booking with the id of ${req.params.id}`});
        }
        if(booking.user.toString()!==req.user.id && req.user.role!=='admin'){   // Verify ownership
            return res.status(401).json({success:false,status:role,
                message:`User ${req.user.id} is not authorized to update this booking`});
        }
        booking = await Booking.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true});
        res.status(200).json({success:true,status:role,data:booking});
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({success:false,
            message:"Cannot update Booking"});
    }
};


//@desc     Delete booking
//@route    DELETE /api/v1/bookings/:id
//@access   Private
exports.deleteBooking = async (req,res,next)=>{
    try{
        let role = req.user.role;
        const booking = await Booking.findById(req.params.id);
        if(!booking){              // Verify existence
            return res.status(404).json({success:false,
                message:`No booking with the id of ${req.params.id}`});
        }
        if(booking.user.toString()!==req.user.id && req.user.role!=='admin'){   // Verify ownership
            return res.status(401).json({success:false,status:role,
                message:`User ${req.user.id} is not authorized to delete this bootcamp`});
        }
        await booking.remove();
        res.status(200).json({success:true,status:role,data:{}});
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({success:false,
            message:"Cannot delete Booking"});
    }
};