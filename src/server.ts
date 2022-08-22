import * as dotenv from "dotenv";
import express from "express";
import Server from "./app";

dotenv.config();

const app = express();
const server: Server = new Server(app);
const port: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 3001;

app
  .listen(port, '0.0.0.0', function () {
    console.info(`Server running on : http://localhost:${port}`);
  })
  .on("error", (err: any) => {
    if (err.code === "EADDRINUSE") {
      console.log("server startup error: address already in use");
    } else {
      console.log(err);
    }
  });
