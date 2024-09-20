"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_controllar_1 = require("./user.controllar");
const validaedRequest_1 = __importDefault(require("../../middlewares/validaedRequest"));
const user_validation_1 = require("./user.validation");
const user_consatand_1 = require("./user.consatand");
const auth_validation_1 = require("../../middlewares/auth.validation");
const router = express_1.default.Router();
//create User
router.post("/auth/signup", (0, validaedRequest_1.default)(user_validation_1.UserValidation.createUserValidationSchema), user_controllar_1.UserControllars.createUserDB);
//get USer
router.get("/users", (0, auth_validation_1.AuthValidated)(user_consatand_1.USER_Role.admin), user_controllar_1.UserControllars.getUserDB);
//updte users
router.put("/user/:id", user_controllar_1.UserControllars.updateUserDB);
exports.UserRoutes = router;
