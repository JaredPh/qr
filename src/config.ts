import dotenv from "dotenv";
import env from "getenv";

dotenv.config();

type Config = {
  port: number;
};

const config: Config = {
  port: env.int("PORT"),
};

export default config;
