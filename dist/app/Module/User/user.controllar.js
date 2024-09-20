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
exports.UserControllars = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const user_service_1 = require("./user.service");
const AppError_1 = __importDefault(require("../../Error/AppError"));
const createUserDB = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = req.body;
    const result = yield user_service_1.UserServices.createUser(userData);
    res.status(http_status_1.default.OK).json({
        success: true,
        message: "User registered successfully!",
        data: result,
    });
}));
const getUserDB = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_service_1.UserServices.getAllUser();
    res.status(http_status_1.default.OK).json({
        success: true,
        message: "all User retrieved successfully!",
        data: result,
    });
}));
const updateUserDB = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (!id) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "User ID not found");
    }
    const updateData = req.body;
    const result = yield user_service_1.UserServices.updateUser(id, updateData);
    res.status(http_status_1.default.OK).json({
        success: true,
        statusCode: 200,
        message: "Update User successfull",
        data: result,
    });
}));
exports.UserControllars = {
    createUserDB,
    getUserDB,
    updateUserDB
};
