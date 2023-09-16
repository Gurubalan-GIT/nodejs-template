import dotenv from "dotenv";
dotenv.config();

const mysqlHost = process.env.MYSQLHOST;
const mysqlPort = Number(process.env.MYSQLPORT) || 3306;
const mysqlUser = process.env.MYSQLUSER;
const mysqlPassword = process.env.MYSQLPASSWORD;
const mysqlDatabase = process.env.MYSQLDATABASE;

export { mysqlHost, mysqlPort, mysqlUser, mysqlPassword, mysqlDatabase };
