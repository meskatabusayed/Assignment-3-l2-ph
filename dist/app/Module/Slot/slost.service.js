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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlotService = void 0;
const time_1 = require("../../utils/time");
const service_model_1 = require("../Service/service.model");
const slot_model_1 = require("./slot.model");
const createSlot = (serviceId, date, startTime, endTime) => __awaiter(void 0, void 0, void 0, function* () {
    const serviceData = yield service_model_1.Service.findById(serviceId);
    if (!serviceData) {
        throw new Error('Service not found');
    }
    const duration = serviceData.duration;
    const slots = (0, time_1.calculateTimeSlots)(startTime, endTime, duration).map(slot => (Object.assign(Object.assign({}, slot), { service: serviceId, date, isBooked: "available" })));
    const result = yield slot_model_1.Slot.insertMany(slots);
    return result;
});
//get available slots
const getAvailableSlots = (date, serviceId) => __awaiter(void 0, void 0, void 0, function* () {
    const query = {
        isBooked: 'available'
    };
    if (date) {
        query.date = date;
    }
    if (serviceId) {
        query.service = serviceId;
    }
    const slots = yield slot_model_1.Slot.find(query).populate('service');
    return slots;
});
// Service function to get available slots by service ID
const getAvailableSlotsByServiceId = (serviceId) => __awaiter(void 0, void 0, void 0, function* () {
    // Query the database for slots associated with the given service ID
    const slots = yield slot_model_1.Slot.find({ service: serviceId, isBooked: "available" }).populate('service');
    return slots;
});
//get all slots
const getAllSlots = () => __awaiter(void 0, void 0, void 0, function* () {
    const slots = yield slot_model_1.Slot.find().populate('service');
    return slots;
});
//update service
const updateSlot = (id, updateData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield slot_model_1.Slot.findByIdAndUpdate(id, updateData, { new: true, runValidators: true }).exec();
    return result;
});
exports.SlotService = {
    createSlot,
    getAvailableSlots,
    updateSlot,
    getAllSlots,
    getAvailableSlotsByServiceId
};
