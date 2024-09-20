"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handlerCastError = (err) => {
    const errorSources = [
        {
            path: err.path,
            message: err.message,
        },
    ];
    const statusCode = 400;
    return {
        statusCode,
        message: "Validation Error",
        errorSources,
    };
};
exports.default = handlerCastError;
