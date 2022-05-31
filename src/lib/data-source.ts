import { DataSource } from "typeorm";
import { entities } from "../entities";

export const dataSource = async () => {
  try {
    // creating connection variable
    let connection: DataSource;

    // checking if connection already exists
    if (global.connection) return;

    connection = new DataSource({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "root",
      database: "sch_mgt",
      entities: [...entities],
      synchronize: true,
    });
    await connection.initialize();
    global.connection = connection;
    console.log("Database connected successfully.");
  } catch (err) {
    console.log("Error connected database", err);
  }
};
