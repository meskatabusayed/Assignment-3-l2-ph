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
exports.BookingControllers = void 0;
const http_status_1 = __importDefault(require("http-status"));
const booking_service_1 = require("./booking.service");
const catchAsync_1 = __importDefault(require("../../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../utils/sendResponse"));
const createBooking = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.user;
    // console.log(req.body);
    const result = yield booking_service_1.BookingServices.createBooking(req.body, user);
    console.log(result);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Booking successfull',
        data: result,
    });
}));
const getAllBookings = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield booking_service_1.BookingServices.getAllBookings();
    (0, sendResponse_1.default)(res, {
        success: result.length ? true : false,
        statusCode: result.length ? http_status_1.default.OK : http_status_1.default.NOT_FOUND,
        message: result.length
            ? 'All bookings retrieved successfully'
            : 'No Data Found',
        data: result,
    });
}));
const getUserBooking = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.user;
    const result = yield booking_service_1.BookingServices.getUserBooking(user);
    (0, sendResponse_1.default)(res, {
        success: result.length ? true : false,
        statusCode: result.length ? http_status_1.default.OK : http_status_1.default.NOT_FOUND,
        message: result.length
            ? 'User bookings retrieved successfully'
            : 'No Data Found',
        data: result,
    });
}));
exports.BookingControllers = {
    createBooking,
    getUserBooking,
    getAllBookings,
};
