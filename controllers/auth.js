const res = require('express/lib/response')
const User = require('../models/User')

//@desc     Register user
//@route    POST /api/v1/auth/register
//@access   Public
exports.register = async (req, res, next) => {
  try {
    // * add telephone numbers
    const { name, email, password, telephoneNumber, role } = req.body //Create user  // แจง .body เป็น 4 ค่า
    const user = await User.create({
      name,
      telephoneNumber,
      email,
      password,
      role
    })
    console.log(user)
    sendTokenResponse(user, 200, res) // Create token
  } catch (err) {
    // * add return message for error case
    res.status(400).json({ success: false, msg: err['message'] })
    console.log(err)
  }
}

//@desc     Login user
//@route    POST /api/v1/auth/login
//@access   Public
exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body
    if (!email || !password) {
      // Verify username, password
      return res.status(400).json({ success: false, msg: 'Please provide an email and password' })
    }

    const user = await User.findOne({ email }).select('+password') //Check for user
    if (!user) {
      return res.status(400).json({ success: false, msg: 'Invalid credentials' })
    }

    const isMatch = await user.matchPassword(password) //Check if password matches
    if (!isMatch) {
      return res.status(401).json({ success: false, msg: 'Invalid credentials' })
    }

    sendTokenResponse(user, 200, res) // create token
  } catch (err) {
    // * add return message for error case
    res.status(400).json({ success: false, msg: err['message'] })
    console.log(err)
  }
}

//@desc     Get current Logged in user
//@route    POST /api/v1/auth/me
//@access   Private
exports.getMe = async (req, res, next) => {
  try{
    const user = await User.findById(req.user.id)
    let role = req.user.role
    res.status(200).json({ success: true, status: role, data: user })
  }
  catch (err) {
    // * add return message for error case
    res.status(400).json({ success: false, msg: err['message'] })
    console.log(err)
  }
}

// * add log out feature
//@desc     log out
//@route    GET /api/v1/auth/logout
//@access   Private
exports.logout = async (req, res, next) => {
  try{
    const options = {
      expires: new Date(Date.now() + 10 * 1000), // 10 milliseconds
      httpOnly: true
    }
    res.status(200).cookie('token', 'null', options).json({ success: true, data: {} })
  }
    catch (err) {
      // * add return message for error case
      res.status(400).json({ success: false, msg: err['message'] })
      console.log(err)
  }
}

//Get token from model, create cookie and send response
const sendTokenResponse = (user, statusCode, res) => {
  //Create token
  const token = user.getSignedJwtToken()
  const options = {
    expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
    httpOnly: true
  } // แปลง day ให้กลายเป็น millisec

  if (process.env.NODE_ENV === 'production') {
    options.secure = true
  }
  res.status(statusCode).cookie('token', token, options).json({ success: true, token })
}
