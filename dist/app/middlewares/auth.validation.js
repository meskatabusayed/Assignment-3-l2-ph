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
exports.AuthValidated = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config"));
// import catchAsync from "../utils/catchAsync";
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = __importDefault(require("../Error/AppError"));
const user_model_1 = require("../Module/User/user.model");
const catchAsync_1 = __importDefault(require("../utils/catchAsync"));
const AuthValidated = (...requierdRole) => {
    return (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const token = req.headers.authorization;
        if (!token) {
            throw new AppError_1.default(http_status_1.default.UNAUTHORIZED, "You are not authorized!");
        }
        // Decode the token
        const decoded = jsonwebtoken_1.default.verify(token.split(' ')[1], config_1.default.jwt_access_secret);
        const { userId } = decoded;
        // Find the user by ID
        const isExistsUser = yield user_model_1.User.findById(userId);
        if (!isExistsUser) {
            throw new AppError_1.default(http_status_1.default.UNAUTHORIZED, "You are not authorized!");
        }
        // Check if the user's role is included in the required roles
        if (!requierdRole.includes(isExistsUser.role)) {
            throw new AppError_1.default(http_status_1.default.UNAUTHORIZED, "You have no access to this route");
        }
        // Attach decoded user to request
        req.user = decoded;
        next();
    }));
};
exports.AuthValidated = AuthValidated;
