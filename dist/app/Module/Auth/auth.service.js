"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = __importDefault(require("../../Error/AppError"));
// import config from "../../config";
// import { createToken, isPasswordMatched } from "./auth.utils";
const user_model_1 = require("../User/user.model");
const config_1 = __importDefault(require("../../config"));
const auth_utils_1 = require("./auth.utils");
const loginUser = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.User.findOne({ email: payload.email }).select("+password");
    if (!user) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "This user is Not Found !!");
    }
    // Verify password
    const passwordMatch = yield (0, auth_utils_1.isPasswordMatched)(payload.password, user.password);
    if (!passwordMatch) {
        throw new Error("Password not matched");
    }
    // Create token and send to the user
    const jwrPayload = {
        userId: user.id,
        role: user.role,
    };
    const expireData = parseInt(config_1.default.jwt_assess_exrpired);
    const accessToken = (0, auth_utils_1.createToken)(jwrPayload, config_1.default.jwt_access_secret, expireData);
    //console.log(config.jwt_assess_exrpired)
    // const refreshToken = createToken(
    //   jwrPayload,
    //   config.jwt_refreshtoken as string,
    //   config.jwt_refresh_exrpired as string
    // );
    return { user, accessToken };
});
// Refresh Token
// const refreshToken = async (token: string) => {
//   try {
//     const decoded = jwt.verify(token, config.jwt_access_secret as string) as JwtPayload;
//     const { userId, iat } = decoded;
//     const user = await User.findById(userId);
//     if (!user) {
//       throw new AppError(httpStatus.NOT_FOUND, "User not found");
//     }
//     // Check if token was issued before password change
//     if (user.passwordChangedAt && User.isJWTIssuedBeforePasswordChange(user.passwordChangedAt, iat as any)) {
//       throw new AppError(httpStatus.UNAUTHORIZED, "Token invalid due to password change");
//     }
//     const jwtPayload = { userId: user._id, role: user.role };
//     const accessToken = createToken(
//       jwtPayload as any,
//       config.jwt_access_secret as string,
//       config.jwt_assess_exrpired as string
//     );
//     return { accessToken };
//   } catch (error) {
//     throw new AppError(httpStatus.UNAUTHORIZED, "Invalid token");
//   }
// };
exports.AuthServices = {
    loginUser,
    // refreshToken
};
