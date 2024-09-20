"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const config_1 = __importDefault(require("../config"));
const handlarZodError_1 = __importDefault(require("../Error/handlarZodError"));
const handlerValidationError_1 = __importDefault(require("../Error/handlerValidationError"));
const CastErrorHandlar_1 = __importDefault(require("../Error/CastErrorHandlar"));
const GlobalErrorHandel = (err, req, res, next) => {
    let statusCode = err.statusCode || 500;
    let message = err.message || "Somoting went wromng !";
    let errorSources = [
        {
            path: "",
            message: "Something went wrong!",
        },
    ];
    if (err instanceof zod_1.ZodError) {
        const modifierError = (0, handlarZodError_1.default)(err);
        statusCode = modifierError.statusCode;
        message = modifierError.message;
        errorSources = modifierError.errorSources;
    }
    else if ((err === null || err === void 0 ? void 0 : err.name) === "ValidatorError") {
        const modifierError = (0, handlerValidationError_1.default)(err);
        statusCode = modifierError === null || modifierError === void 0 ? void 0 : modifierError.statusCode;
        message = modifierError === null || modifierError === void 0 ? void 0 : modifierError.message;
        errorSources = modifierError === null || modifierError === void 0 ? void 0 : modifierError.errorSources;
    }
    else if ((err === null || err === void 0 ? void 0 : err.name) === "CastError") {
        const modifierError = (0, CastErrorHandlar_1.default)(err);
        statusCode = modifierError === null || modifierError === void 0 ? void 0 : modifierError.statusCode;
        message = modifierError === null || modifierError === void 0 ? void 0 : modifierError.message;
        errorSources = modifierError === null || modifierError === void 0 ? void 0 : modifierError.errorSources;
    }
    else if (err instanceof Error) {
        message = err.message;
        errorSources = [
            {
                path: "",
                message: err.message,
            },
        ];
    }
    return res.status(statusCode).json({
        sucess: false,
        message,
        errorSources,
        stack: config_1.default.NODE_ENV === "development" ? err === null || err === void 0 ? void 0 : err.stack : null,
    });
};
exports.default = GlobalErrorHandel;
