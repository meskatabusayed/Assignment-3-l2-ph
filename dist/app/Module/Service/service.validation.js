"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceValidation = exports.createServiceValidationSchema = void 0;
const zod_1 = require("zod");
exports.createServiceValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string(),
        description: zod_1.z.string(),
        price: zod_1.z.number().positive({ message: "Price must be a positive number" }),
        duration: zod_1.z
            .number()
            .positive({ message: "Duration must be a positive number" }),
        isDeleted: zod_1.z.boolean().default(false),
    }),
});
exports.ServiceValidation = {
    createServiceValidationSchema: exports.createServiceValidationSchema,
};
