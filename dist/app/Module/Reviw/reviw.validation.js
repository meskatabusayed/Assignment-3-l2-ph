"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviwValidation = exports.createReviwValidationSchema = void 0;
const zod_1 = require("zod");
exports.createReviwValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        feedback: zod_1.z.string(),
        rating: zod_1.z.number()
    })
});
exports.ReviwValidation = {
    createReviwValidationSchema: exports.createReviwValidationSchema,
};
