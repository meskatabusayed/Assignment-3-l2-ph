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
exports.BookingServices = void 0;
const service_model_1 = require("../Service/service.model");
const slot_model_1 = require("../Slot/slot.model");
const booking_model_1 = require("./booking.model");
const AppError_1 = __importDefault(require("../../Error/AppError"));
const http_status_1 = __importDefault(require("http-status"));
const user_model_1 = require("../User/user.model");
const createBooking = (bookingData) => __awaiter(void 0, void 0, void 0, function* () {
    const { customerId, serviceId, slotId, vehicleType, vehicleBrand, vehicleModel, manufacturingYear, registrationPlate, } = bookingData;
    const customer = yield user_model_1.User.findById(customerId);
    if (!customer) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "User Is Found");
    }
    // Verify service existence
    const service = yield service_model_1.Service.findById(serviceId);
    if (!service) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "Service not found!");
    }
    if (service.isDeleted) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "Service is deleted. Booking cannot be made.");
    }
    // Verify slot availability
    const slot = yield slot_model_1.Slot.findById(slotId);
    if (!slot || slot.isBooked !== "available") {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "Slot not available!");
    }
    // Create booking
    const booking = new booking_model_1.Booking({
        customer: customerId,
        service: serviceId,
        slot: slotId,
        vehicleType,
        vehicleBrand,
        vehicleModel,
        manufacturingYear,
        registrationPlate,
    });
    const savedBooking = yield booking.save();
    // Update slot status
    slot.isBooked = "booked";
    yield slot.save();
    // Populate booking with relevant data
    yield savedBooking.populate("customer");
    yield savedBooking.populate("service");
    yield savedBooking.populate("slot");
    return savedBooking;
});
//get all Booking
const getallBooing = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield booking_model_1.Booking.find()
        .populate("customer")
        .populate("service")
        .populate("slot");
    return result;
});
const getUserBookings = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const query = {
        customer: userId,
        status: "complete",
    };
    const bookings = yield booking_model_1.Booking.find(query)
        .select("-customer")
        .populate("service")
        .populate("slot");
    if (!bookings.length) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "No complete bookings found for this user");
    }
    return bookings;
});
const getUserBookingsPanding = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const query = {
        customer: userId,
        status: "pending",
    };
    const bookings = yield booking_model_1.Booking.find(query)
        .select("-customer")
        .populate("service")
        .populate("slot");
    if (!bookings.length) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "No complete bookings found for this user");
    }
    return bookings;
});
exports.BookingServices = {
    createBooking,
    getallBooing,
    getUserBookings,
    getUserBookingsPanding,
};
