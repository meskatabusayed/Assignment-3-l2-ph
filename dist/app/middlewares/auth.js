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
const http_status_1 = __importDefault(require("http-status"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_model_1 = require("../modules/user/user.model");
const config_1 = __importDefault(require("../../config"));
//auth section
const auth = (...requiredRoles) => {
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        try {
            const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
            if (!token) {
                throw new Error();
            }
            const decoded = jsonwebtoken_1.default.verify(token, config_1.default.jwt_access_secret);
            const { email, role } = decoded;
            const user = user_model_1.User.findOne({ email, role });
            if (!user) {
                throw new Error();
            }
            if (!requiredRoles.includes(role)) {
                throw new Error();
            }
            req.user = {
                email,
                role,
            };
            next();
        }
        catch (err) {
            res.status(404).json({
                success: false,
                statusCode: http_status_1.default.UNAUTHORIZED,
                message: 'You have no access to this route',
            });
        }
    });
};
exports.default = auth;
