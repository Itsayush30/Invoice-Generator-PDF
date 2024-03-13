const { StatusCodes } = require("http-status-codes");

const { ErrorResponse } = require("../utils/common");
const AppError = require("../utils/errors/app-error");

const UserService = require("../services/user-service");
const userService = new UserService();

function validateAuthRequest(req, res, next) {
  //console.log("middleware1")
  if (!req.body.email) {
    //console.log("middleware2",ErrorResponse)
    ErrorResponse.message = "Something went wrong while authenticating user";
    ErrorResponse.error = new AppError(
      ["Email not found in the incoming request in the correct form"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  if (!req.body.password) {
    ErrorResponse.message = "Something went wrong while authenticating user";
    ErrorResponse.error = new AppError(
      ["password not found in the incoming request in the correct form"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  next();
}

async function checkAuth(req, res, next) {
  try {
    const response = await userService.isAuthenticated(
      req.headers["x-access-token"]
    );
    if (response) {
        console.log("auth",response)
      req.user = response; // setting the user id in the req object
      next();
    }
  } catch (error) {
    console.log(error);
    return res.status(error.statusCode).json(error);
  }
}
module.exports = {
  validateAuthRequest,
  checkAuth,
};
