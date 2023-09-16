import { createPool, Pool } from "mysql2";
import { mysqlDatabase, mysqlHost, mysqlPassword, mysqlPort, mysqlUser } from "../mysql.js";

let pool: Pool = createPool({
  host: mysqlHost,
  user: mysqlUser,
  database: mysqlDatabase,
  password: mysqlPassword,
  port: mysqlPort,
});

export default pool.promise();
