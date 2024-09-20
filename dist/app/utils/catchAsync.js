"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//create catchAsync function
const catchAsync = (fun) => {
    return (req, res, next) => {
        Promise.resolve(fun(req, res, next)).catch((err) => next(err));
    };
};
exports.default = catchAsync;
