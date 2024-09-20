"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingValidation = void 0;
const zod_1 = require("zod");
const booking_interface_1 = require("./booking.interface");
const createBookingValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        serviceId: zod_1.z.string(),
        slotId: zod_1.z.string(),
        vehicleType: zod_1.z.nativeEnum(booking_interface_1.CVehicleType),
        vehicleBrand: zod_1.z.string(),
        vehicleModel: zod_1.z.string(),
        manufacturingYear: zod_1.z.number(),
        registrationPlate: zod_1.z.string(),
    }),
});
exports.BookingValidation = {
    createBookingValidationSchema,
};
