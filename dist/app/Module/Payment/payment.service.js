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
exports.PaymentServices = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const booking_model_1 = require("../Booking/booking.model");
const payment_utils_1 = require("./payment.utils");
const initiale = (BookingInitaleData) => __awaiter(void 0, void 0, void 0, function* () {
    const transactionId = `TXN-${Date.now()}`;
    const OrderDate = {
        transactionId,
        customerName: BookingInitaleData === null || BookingInitaleData === void 0 ? void 0 : BookingInitaleData.name,
        customerEmail: BookingInitaleData === null || BookingInitaleData === void 0 ? void 0 : BookingInitaleData.email,
        totalPrice: BookingInitaleData === null || BookingInitaleData === void 0 ? void 0 : BookingInitaleData.totalePrice,
        timeRange: BookingInitaleData === null || BookingInitaleData === void 0 ? void 0 : BookingInitaleData.timeRange,
        customerPhone: BookingInitaleData === null || BookingInitaleData === void 0 ? void 0 : BookingInitaleData.phone,
        customerAddress: BookingInitaleData === null || BookingInitaleData === void 0 ? void 0 : BookingInitaleData.address,
        BookinId: BookingInitaleData === null || BookingInitaleData === void 0 ? void 0 : BookingInitaleData.BookingId,
    };
    const paymentSession = yield (0, payment_utils_1.initialePayment)(OrderDate);
    return paymentSession;
});
////
const confirmantion = (transactionId, id) => __awaiter(void 0, void 0, void 0, function* () {
    const verifyResponse = yield (0, payment_utils_1.verifyPayment)(transactionId);
    let message = "";
    if (verifyResponse && verifyResponse.pay_status === "Successful") {
        yield booking_model_1.Booking.findByIdAndUpdate(id, { status: "complete" });
        message = "Successfully Payment!";
    }
    else {
        message = "Failed Payment!";
    }
    return `<h1>${message}</h1>`;
});
exports.PaymentServices = {
    initiale,
    confirmantion,
};
