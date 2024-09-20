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
exports.User = exports.CUserSchema = void 0;
const mongoose_1 = require("mongoose");
const user_consatand_1 = require("./user.consatand");
const bcrypt_1 = __importDefault(require("bcrypt"));
const config_1 = __importDefault(require("../../config"));
exports.CUserSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    role: { type: String, required: true, enum: Object.keys(user_consatand_1.USER_Role) },
    address: { type: String, required: true },
    passwordChangedAt: { type: Date }
}, {
    timestamps: true
});
//pre save middlewere
exports.CUserSchema.pre("save", function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = this;
        user.password = yield bcrypt_1.default.hash(user.password, Number(config_1.default.data_salt_rounds));
        next();
    });
});
//post save middlerware hook
exports.CUserSchema.post("save", function (doc, next) {
    doc.password = "";
    next();
});
// Static method to check if JWT was issued before password change
exports.CUserSchema.statics.isJWTIssuedBeforePasswordChange = function (passwordChangedAt, jwtIssuedAt) {
    const passwordChangedTime = new Date(passwordChangedAt).getTime() / 1000;
    return passwordChangedTime > jwtIssuedAt;
};
exports.User = (0, mongoose_1.model)("User", exports.CUserSchema);
