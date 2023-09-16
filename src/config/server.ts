import dotenv from "dotenv";
dotenv.config();

const environment = process.env.NODE_ENV;
const port = process.env.PORT || 8080;

export { environment, port };
