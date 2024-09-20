"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceRoute = void 0;
const express_1 = __importDefault(require("express"));
const service_controllar_1 = require("./service.controllar");
const validaedRequest_1 = __importDefault(require("../../middlewares/validaedRequest"));
const service_validation_1 = require("./service.validation");
const auth_validation_1 = require("../../middlewares/auth.validation");
const user_consatand_1 = require("../User/user.consatand");
const router = express_1.default.Router();
router.post("/services", (0, auth_validation_1.AuthValidated)(user_consatand_1.USER_Role.admin), (0, validaedRequest_1.default)(service_validation_1.ServiceValidation.createServiceValidationSchema), service_controllar_1.ServiceControllars.createServiceDb);
router.get("/services/:id", service_controllar_1.ServiceControllars.getServiceByIdDB);
router.get("/services/", service_controllar_1.ServiceControllars.getAllServiceDB);
router.put("/services/:id", (0, auth_validation_1.AuthValidated)(user_consatand_1.USER_Role.admin), service_controllar_1.ServiceControllars.updateServiceDB);
router.delete("/services/:id", (0, auth_validation_1.AuthValidated)(user_consatand_1.USER_Role.admin), service_controllar_1.ServiceControllars.deleteServiceDB);
exports.ServiceRoute = router;
