"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Slot = exports.slotSchema = void 0;
const mongoose_1 = require("mongoose");
exports.slotSchema = new mongoose_1.Schema({
    service: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Service",
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    startTime: {
        type: String,
        required: true,
    },
    endTime: {
        type: String,
        required: true,
    },
    isBooked: {
        type: String,
        enum: ["available", "booked", "canceled"],
        default: "available",
    },
}, { timestamps: true });
exports.Slot = (0, mongoose_1.model)("Slot", exports.slotSchema);