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
exports.SlotControllars = void 0;
const slost_service_1 = require("./slost.service");
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = __importDefault(require("../../Error/AppError"));
// import AppError from "../../Error/AppError";
const createSlotsDB = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { service, date, startTime, endTime } = req.body;
    const result = yield slost_service_1.SlotService.createSlot(service, date, startTime, endTime);
    res.status(http_status_1.default.OK).json({
        success: true,
        statusCode: 200,
        message: "Slots created successfully",
        data: result,
    });
}));
const getAvailableSlotsDB = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { data, serviceId } = req.query;
    const result = yield slost_service_1.SlotService.getAvailableSlots(data, serviceId);
    res.status(http_status_1.default.OK).json({
        success: true,
        statusCode: 200,
        message: "Available slots retrieved successfull",
        data: result,
    });
}));
const getAvailableSlotsByServiceIdDB = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { serviceId } = req.query;
    const result = yield slost_service_1.SlotService.getAvailableSlotsByServiceId(serviceId);
    res.status(http_status_1.default.OK).json({
        success: true,
        statusCode: 200,
        message: "Available slots by service ID retrieved successfully",
        data: result,
    });
}));
const getAllSlotsDB = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield slost_service_1.SlotService.getAllSlots();
    res.status(http_status_1.default.OK).json({
        success: true,
        statusCode: 200,
        message: "All slots retrieved successfull",
        data: result,
    });
}));
const updateSlotDB = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (!id) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "Slot ID not found");
    }
    const updateData = req.body;
    const result = yield slost_service_1.SlotService.updateSlot(id, updateData);
    res.status(http_status_1.default.OK).json({
        success: true,
        statusCode: 200,
        message: "Update slot successfull",
        data: result,
    });
}));
exports.SlotControllars = {
    createSlotsDB,
    getAvailableSlotsDB,
    getAllSlotsDB,
    updateSlotDB,
    getAvailableSlotsByServiceIdDB
};
