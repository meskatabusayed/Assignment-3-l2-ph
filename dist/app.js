"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
// import router from "./app/routes";
const globalErrorHandel_1 = __importDefault(require("./app/middlewares/globalErrorHandel"));
// import notFound from "./app/middlewares/notFound";
const routes_1 = __importDefault(require("./app/routes"));
const notFound_1 = __importDefault(require("./app/middlewares/notFound"));
const app = (0, express_1.default)();
// Middleware to parse cookies
app.use((0, cookie_parser_1.default)());
// Middleware to parse JSON bodies
app.use(express_1.default.json());
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)({
    origin: 'https://car-wash-booking-system-frontend-ten.vercel.app',
    credentials: true
}));
// Application routes
app.use("/api", routes_1.default);
app.get("/", (req, res) => {
    const result = "Car Wash Booking...";
    res.send(result);
});
// Global error handler
app.use(globalErrorHandel_1.default);
app.use(notFound_1.default);
exports.default = app;
