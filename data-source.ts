import { DataSource } from "typeorm";   
import { SafetyEvent } from "./src/entity/SafetyEvent";
import dotenv from 'dotenv';
dotenv.config();

export const AppDataSource = new DataSource({
  type: process.env.DB_TYPE as any,
  host: process.env.DB_HOST!,
  port: Number(process.env.DB_PORT!),
  username: process.env.DB_USERNAME!,
  password: process.env.DB_PASSWORD!,
  database: process.env.DB_DATABASE!,
  synchronize: true,
  entities: [SafetyEvent],   
  logging: false,
});
