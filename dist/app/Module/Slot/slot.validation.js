"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlotValidation = void 0;
const zod_1 = require("zod");
const SlotValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        service: zod_1.z.string().regex(/^[0-9a-fA-F]{24}$/),
        date: zod_1.z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
        startTime: zod_1.z.string().regex(/^\d{2}:\d{2}$/),
        endTime: zod_1.z.string().regex(/^\d{2}:\d{2}$/, { message: "must be end time !" }),
    })
});
exports.SlotValidation = {
    SlotValidationSchema,
};
