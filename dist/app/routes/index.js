"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_route_1 = require("../Module/User/user.route");
const service_route_1 = require("../Module/Service/service.route");
const slot_route_1 = require("../Module/Slot/slot.route");
const booking_route_1 = require("../Module/Booking/booking.route");
const auth_route_1 = require("../Module/Auth/auth.route");
const payment_route_1 = require("../Module/Payment/payment.route");
const reviw_route_1 = require("../Module/Reviw/reviw.route");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: "",
        route: user_route_1.UserRoutes,
    },
    {
        path: "",
        route: service_route_1.ServiceRoute
    },
    {
        path: "",
        route: slot_route_1.SlotRoutes
    },
    {
        path: "",
        route: booking_route_1.BookingRoutes
    },
    {
        path: "",
        route: auth_route_1.AuthRoutes
    },
    {
        path: "",
        route: payment_route_1.PaymentRoutes
    },
    {
        path: "",
        route: reviw_route_1.ReviwRoute
    }
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
