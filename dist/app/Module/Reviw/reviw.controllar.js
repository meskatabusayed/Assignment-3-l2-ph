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
exports.ReviwControllars = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const reviw_service_1 = require("./reviw.service");
const createReviwDB = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const ReviwData = req.body;
    const result = yield reviw_service_1.ReviwServices.createReviw(ReviwData);
    res.status(http_status_1.default.OK).json({
        success: true,
        message: "Reviw Created successfully!",
        data: result,
    });
}));
const getReviwsDB = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield reviw_service_1.ReviwServices.getReviws();
    res.status(http_status_1.default.OK).json({
        success: true,
        message: "All Reviw Get Successfully !",
        data: result,
    });
}));
exports.ReviwControllars = {
    createReviwDB,
    getReviwsDB,
};
