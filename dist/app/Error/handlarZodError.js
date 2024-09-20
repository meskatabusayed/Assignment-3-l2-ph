"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { CErrorSources } from "../Interface/error";
const handlerZodError = (err) => {
    const errorSources = err.issues.map((issue) => {
        return {
            path: issue.path[issue.path.length - 1], // Ensure path is a string
            message: issue.message,
        };
    });
    const statusCode = 400;
    return {
        statusCode,
        message: "Zod Validation Error",
        errorSources,
    };
};
exports.default = handlerZodError;
