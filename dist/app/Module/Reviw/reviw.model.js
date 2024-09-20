"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reviw = exports.CReviwSchema = void 0;
const mongoose_1 = require("mongoose");
exports.CReviwSchema = new mongoose_1.Schema({
    feedback: { type: String, required: true },
    rating: { type: Number, required: true },
}, { timestamps: true });
exports.Reviw = (0, mongoose_1.model)("Reviw", exports.CReviwSchema);
