import { RequestHandler } from 'express';
import httpStatus from 'http-status';
import { AuthServices } from './auth.services';
import catchAsync from '../../../utils/catchAsync';
import sendResponse from '../../../utils/sendResponse';

const signUp: RequestHandler = catchAsync(async (req, res) => {
  const result = await AuthServices.signUp(req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'User registered successfully',
    data: result,
  });
});
const login: RequestHandler = catchAsync(async (req, res) => {
  const { token, user } = await AuthServices.login(req.body);

  res.status(httpStatus.OK).json({
    success: true,
    statusCode: httpStatus.OK,
    message: 'User logged in successfuly',
    token,
    data: user,
  });
});

export const AuthControllers = {
  signUp,
  login,
};