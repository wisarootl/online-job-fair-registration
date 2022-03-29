const res = require('express/lib/response');
const User = require('../models/User');

//@desc Register user
//@route POST /api/v1/auth/register
//@access public
exports.register = async (req,res,next)=>{
   try{
        const {name,email,password,role} = req.body;  //Create user  // แจง .body เป็น 4 ค่า
        const user = await User.create({
            name,
            telephoneNumber,
            email,
            password,
            role
        });
        sendTokenResponse(user,200,res);        // Create token
    } catch(err){
        res.status(400).json({success:false});
        console.log(err.stack);
    }
}

//@desc Login user
//@route POST /api/v1/auth/login
//@access public
exports.login = async (req,res,next)=>{
    const{email,password} = req.body;
    if(!email || !password){        // Verify username,password
        return res.status(400).json({success:false,msg:'Please provide an email and password'});
    }
    const user = await User.findOne({email}).select('+password');   //Check for user
    if(!user){
        return res.status(400).json({success:false,msg:'Invalid credentials'});
    }
    const isMatch = await user.matchPassword(password);     //Check if password matches
    if(!isMatch){
        return res.status(401).json({success:false,msg:'Invalid credentials'});
    }
    sendTokenResponse(user,200,res);    //Create token
};

//At the end of file
//@desc     Get current Logged in user
//@route    POST /api/v1/auth/me
//@access   Private
exports.getMe = async (req,res,next)=>{
    const user = await User.findById(req.user.id);
    let role=req.user.role;
    res.status(200).json({success:true,status:role,data:user});
};

exports.logout = async(req, res, next)=>{
    res.cookie('token','none',{expires: new Date(Date.now()+10*1000),httpOnly: true});
    res.status(200).json({success:true,data:{}});
};

//Get token from model, create cookie and send response
const sendTokenResponse = (user,statusCode,res)=>{
    //Create token
    const token = user.getSignedJwtToken();
    const options = {
        expires:new Date(Date.now()+process.env.JWT_COOKIE_EXPIRE*24*60*60*1000),httpOnly:true
    };      // แปลง day ให้กลายเป็น millisec
    
    if(process.env.NODE_ENV === 'production'){
        options.secure = true;
    }
    res.status(statusCode).cookie('token',token,options).json({success:true,token});
}