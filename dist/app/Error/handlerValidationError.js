"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { CErrorSources, CGenericErrorResponse } from "../Interface/error";
const handlerValidationError = (err) => {
    const errorSources = Object.values(err.errors).map((vaL) => {
        return {
            path: vaL.path,
            message: vaL.message,
        };
    });
    const statusCode = 400;
    return {
        statusCode,
        message: "Validation Error",
        errorSources,
    };
};
exports.default = handlerValidationError;
