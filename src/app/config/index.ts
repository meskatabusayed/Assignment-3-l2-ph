import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join((process.cwd(), ".env")) });

export default {
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