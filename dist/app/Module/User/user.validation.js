"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidation = exports.createUserValidationSchema = void 0;
const zod_1 = require("zod");
const user_consatand_1 = require("./user.consatand");
exports.createUserValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string(),
        email: zod_1.z.string().email({ message: "Email is invalid" }),
        password: zod_1.z.string(),
        phone: zod_1.z.string(),
        role: zod_1.z.nativeEnum(user_consatand_1.USER_Role).optional(),
        address: zod_1.z.string(),
    })
});
exports.UserValidation = {
    createUserValidationSchema: exports.createUserValidationSchema,
};
