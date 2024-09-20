"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthValidation = void 0;
const zod_1 = require("zod");
const loginValidatoinSchema = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z.string({ required_error: "email is required." }),
        password: zod_1.z.string({ required_error: "Passerod is required " }),
    }),
});
// // Validation schema for refresh token
// const refreshTokenValidationSchema = z.object({
//   cookies: z.object({
//     refreshToken: z.string({
//       required_error: "Refresh token is required !",
//     }),
//   }),
// });
exports.AuthValidation = {
    loginValidatoinSchema,
    // refreshTokenValidationSchema
};
