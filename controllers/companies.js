const express = require('express')
const router = express.Router()
const app = express()
const Company = require('../models/Company')

//@desc     Get all companies
//@route    GET /api/v1/companies
//@access   public
exports.getCompanies = async (req, res, next) => {
  try {
    let query
    const reqQuery = { ...req.query } // Copy req.query   // ... เพื่อแตก keyvalue จาก string เป็น array
    const removeFields = ['select', 'sort', 'page', 'limit'] // Fields to exclude    //
    removeFields.forEach((param) => delete reqQuery[param]) // Loop over remove fields and delete them from reqQuery
    console.log(reqQuery)
    let queryStr = JSON.stringify(reqQuery) // แปลงกลับมาเป็น String
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, (match) => `$${match}`) // create operators ($gt, $$gte, etc)
    // ค้นหาตาม pattern เพื่อแก้  // \b คือ space  // ให้ใส่ $ ข้างหน้า
    query = Company.find(JSON.parse(queryStr)).populate('bookings')
    // parse ให้กลับเป็น JSON // finding query // แล้วเก็บไว้ใน query
    // Select Fields
    if (req.query.select) {
      const fields = req.query.select.split(',').join(' ') // แก้ ',' เป็น ' ' เพื่อให้ตรงกับ syntax ของ noSQL   // เก็บค่าไว้ใน fields
      query = query.select(fields) // หลักจากเลือก >,< ก็มาเลือกตาม fields อีกครั้งหนึ่ง
    }

    // Sort
    if (req.query.sort) {
      // เช็คว่าส่ง sort มาไหม
      const sortBy = req.query.sort.split(',').join(' ') // เก็บไว้ใน sortBy
      query = query.sort(sortBy) // sort ตาม sortBy
    } else {
      query = query.sort('-createdAt') // ถ้าไม่ได้ส่ง sort มาก็ให้เรียงตาม createAt ซึ่งคือวันที่สร้างข้อมูลขึ้นมา
    }
    // Pagination
    const page = parseInt(req.query.page, 10) || 1
    const limit = parseInt(req.query.limit, 10) || 25
    const startIndex = (page - 1) * limit
    const endIndex = page * limit
    const total = await Hospital.countDocuments()
    query = query.skip(startIndex).limit(limit)

    // Executing query
    const hospitals = await query
    // Pagination result
    const pagination = {}
    if (endIndex < total) pagination.next = { page: page + 1, limit }
    if (startIndex > 0) pagination.prev = { page: page - 1, limit }

    res.status(200).json({ success: true, count: Companies.length, pagination, data: Companies })
  } catch (err) {
    res.status(400).json({ success: false })
  }
}

//@desc     Get single company
//@route    GET /api/v1/companies/:id
//@access   public
exports.getCompany = async (req, res, next) => {
  console.log(req.body)
  try {
    const company = await Company.findById(req.params.id)
    if (!company) return res.status(400).json({ success: false })
    res.status(200).json({ success: true, data: company })
  } catch (err) {
    res.status(400).json({ success: false })
  }
}

//@desc     Create a company
//@route    POST /api/v1/companies
//@access   private
exports.createCompany = async (req, res, next) => {
  console.log(req.body)
  const company = await Company.create(req.body)
  res.status(201).json({ success: true, data: company })
}

//@desc     Update single companies
//@route    PUT /api/v1/companies/:id
//@access   private
exports.updateCompany = async (req, res, next) => {
  console.log(req.body)
  try {
    const company = await Company.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    })
    if (!company) return res.status(400).json({ success: false })
    res.status(200).json({ success: true, data: company })
  } catch (err) {
    res.status(400).json({ success: false })
  }
}

//@desc     Delete single companies
//@route    DELETE /api/v1/companies/:id
//@access   private
exports.deleteCompany = async (req, res, next) => {
  console.log(req.body)
  try {
    const company = await Company.findById(req.params.id)
    if (!company)
      return res
        .status(404)
        .json({ success: false, message: `Bootcamp not found with id of ${req.params.id}` })
    company.remove()
    res.status(200).json({ success: true, data: {} })
  } catch (err) {
    res.status(400).json({ success: false })
  }
}

module.exports = exports
