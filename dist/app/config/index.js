"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({ path: path_1.default.join((process.cwd(), ".env")) });
exports.default = {
    NODE_ENV: process.env.NODE_ENV,
    prot: process.env.PORT,
    database_url: process.env.DATABASE_URL,
    default_password: process.env.DEPFULT_PASS,
    data_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
    jwt_access_secret: process.env.JWT_ACCESS_SECRET,
    jwt_assess_exrpired: process.env.JWT_ACCESS_EXPIRES_IN,
    jwt_refreshtoken: process.env.JWT_REFRESH_SECRET,
    jwt_refresh_exrpired: process.env.JWT_REFRESH_EXPIRES_IN,
};
