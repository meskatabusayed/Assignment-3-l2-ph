"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingRoutes = void 0;
const express_1 = require("express");
const booking_controllar_1 = require("./booking.controllar");
const validaedRequest_1 = __importDefault(require("../../middlewares/validaedRequest"));
const booking_validation_1 = require("./booking.validation");
const auth_validation_1 = require("../../middlewares/auth.validation");
const user_consatand_1 = require("../User/user.consatand");
const router = (0, express_1.Router)();
router.post('/create/bookings', (0, auth_validation_1.AuthValidated)(user_consatand_1.USER_Role.user, user_consatand_1.USER_Role.admin), (0, validaedRequest_1.default)(booking_validation_1.BookingValidation.createBookingValidationSchema), booking_controllar_1.BookingControllars.createBookingDB);
router.get('/bookings', (0, auth_validation_1.AuthValidated)(user_consatand_1.USER_Role.admin), booking_controllar_1.BookingControllars.getallBooingDB);
router.get('/my-bookings', (0, auth_validation_1.AuthValidated)(user_consatand_1.USER_Role.user, user_consatand_1.USER_Role.admin), booking_controllar_1.BookingControllars.userBookingDB);
router.get('/my-pending-bookings', (0, auth_validation_1.AuthValidated)(user_consatand_1.USER_Role.user, user_consatand_1.USER_Role.admin), booking_controllar_1.BookingControllars.userBookingPendingDB);
exports.BookingRoutes = router;
