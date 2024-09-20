"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_controllar_1 = require("./auth.controllar");
// import validationRequest from "../../middlewares/validaedRequest";
// import { AuthValidation } from "./auth.validation";
const validaedRequest_1 = __importDefault(require("../../middlewares/validaedRequest"));
const auth_validation_1 = require("./auth.validation");
const router = express_1.default.Router();
router.post('/auth/login', (0, validaedRequest_1.default)(auth_validation_1.AuthValidation.loginValidatoinSchema), auth_controllar_1.AuthControllers.loginUserDB);
// router.post('/auth/refresh-token', validationRequest(AuthValidation.refreshTokenValidationSchema), AuthControllers.refreshTokenDB);
exports.AuthRoutes = router;
