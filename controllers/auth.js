const User = require("../models/User"); //when using multiple models check again if its /models or /models/user for all controllers
const ErrorResponse = require("../utils/errorResponse")

exports.register = async (req, res, next) => {
 
  const { username, email, password } = req.body;

  try {
    const user = await User.create({
      username,
      email,
      password
    });

    return res.status(201).json({
      success: true,
      user
    });
  } catch (error) {
    next(error); 
  }
};
exports.login = async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return next(new ErrorResponse("Please provide email and password", 400))
    }

    try {
        const user = await User.findOne({ email }).select("+password")

        if(!user) {
            return next(new ErrorResponse("Invalid credentials", 401));
        }
        const isMatch = await user.matchPasswords(password);

        if(!isMatch) {
            return next(new ErrorResponse("Invalid credentials", 401));
        }
        return res.status(200).json({
            success: true,
            token: "tr34f3443fc"
          });

    } catch (error) {
        next(error);
    }
};

exports.forgotpassword = (req, res, next) => {
  res.send("Forgot Password Route");
};

exports.resetpassword = (req, res, next) => {
  res.send("Reset Password Route");
};
