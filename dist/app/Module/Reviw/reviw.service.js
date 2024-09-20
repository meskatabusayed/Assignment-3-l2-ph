"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviwServices = void 0;
const reviw_model_1 = require("./reviw.model");
const createReviw = (ReviwData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield reviw_model_1.Reviw.create(ReviwData);
    return result;
});
const getReviws = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield reviw_model_1.Reviw.find();
    return result;
});
exports.ReviwServices = {
    createReviw,
    getReviws
};
