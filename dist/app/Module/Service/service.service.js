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
exports.ServiceServices = void 0;
const service_model_1 = require("./service.model");
const createService = (ServiceData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield service_model_1.Service.create(ServiceData);
    return result;
});
//get by Id Service
const getServiceById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield service_model_1.Service.findById(id);
    return result;
});
//get all service
const getAllService = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield service_model_1.Service.find({ isDeleted: false }).exec();
    return result;
});
//update service
const updateService = (id, updateData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield service_model_1.Service.findByIdAndUpdate(id, updateData, { new: true, runValidators: true }).exec();
    return result;
});
//delete service
const deleteService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield service_model_1.Service.findByIdAndUpdate(id, { isDeleted: true }, { new: true }).exec();
    return result;
});
exports.ServiceServices = {
    createService,
    getServiceById,
    getAllService,
    updateService,
    deleteService
};
