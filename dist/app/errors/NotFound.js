"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NotFound = (req, res) => {
    res.status(404).json({
        success: false,
        statusCode: 404,
        message: 'Not Found',
    });
};
exports.default = NotFound;
