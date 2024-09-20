"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Booking = exports.CBookingSchema = void 0;
const mongoose_1 = require("mongoose");
const booking_interface_1 = require("./booking.interface");
exports.CBookingSchema = new mongoose_1.Schema({
    customer: { type: mongoose_1.Schema.Types.ObjectId, ref: "User", },
    service: { type: mongoose_1.Schema.Types.ObjectId, ref: "Service", },
    slot: { type: mongoose_1.Schema.Types.ObjectId, ref: "Slot", },
    vehicleType: {
        type: String,
        enum: Object.values(booking_interface_1.CVehicleType),
        required: true,
    },
    vehicleBrand: { type: String, required: true },
    vehicleModel: { type: String, required: true },
    status: {
        type: String,
        enum: ["complete", "pending", "cancel"],
        default: "pending",
    },
    manufacturingYear: { type: Number, required: true },
    registrationPlate: { type: String, required: true },
}, { timestamps: true });
exports.Booking = (0, mongoose_1.model)("Booking", exports.CBookingSchema);
