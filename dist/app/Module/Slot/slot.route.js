"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlotRoutes = void 0;
const express_1 = __importDefault(require("express"));
const slot_controllar_1 = require("./slot.controllar");
const validaedRequest_1 = __importDefault(require("../../middlewares/validaedRequest"));
const slot_validation_1 = require("./slot.validation");
const auth_validation_1 = require("../../middlewares/auth.validation");
const user_consatand_1 = require("../User/user.consatand");
const router = express_1.default.Router();
router.post("/services/slots", (0, auth_validation_1.AuthValidated)(user_consatand_1.USER_Role.admin), (0, validaedRequest_1.default)(slot_validation_1.SlotValidation.SlotValidationSchema), slot_controllar_1.SlotControllars.createSlotsDB);
router.get("/slots/availability", slot_controllar_1.SlotControllars.getAvailableSlotsDB);
router.get("/slots/all", (0, auth_validation_1.AuthValidated)(user_consatand_1.USER_Role.admin), slot_controllar_1.SlotControllars.getAllSlotsDB);
router.get("/slots/service-slots-available", slot_controllar_1.SlotControllars.getAvailableSlotsByServiceIdDB);
router.put("/slots/:id", (0, auth_validation_1.AuthValidated)(user_consatand_1.USER_Role.admin), slot_controllar_1.SlotControllars.updateSlotDB);
exports.SlotRoutes = router;
