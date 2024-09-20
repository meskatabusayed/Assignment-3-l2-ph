"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviwRoute = void 0;
const express_1 = __importDefault(require("express"));
const validaedRequest_1 = __importDefault(require("../../middlewares/validaedRequest"));
const reviw_validation_1 = require("./reviw.validation");
const reviw_controllar_1 = require("./reviw.controllar");
const router = express_1.default.Router();
//create User
router.post("/create/reviw", (0, validaedRequest_1.default)(reviw_validation_1.ReviwValidation.createReviwValidationSchema), reviw_controllar_1.ReviwControllars.createReviwDB);
//get USer
router.get("/reviws", reviw_controllar_1.ReviwControllars.getReviwsDB);
exports.ReviwRoute = router;
