import express from "express";
import setRoutes from "./routes.js";
import Database from "./src/database/index.js";
import dotenv from "dotenv";
const database = new Database();
dotenv.config();

function startServer() {
  const server = express();
  setRoutes(express, server);

  const PORT = process.env.PORT;
  server.listen(PORT, () =>
    console.log(`API iniciada em http://localhost:${PORT}/usuario`)
  );
}

function stopServer(error) {
  console.log(error);
  console.log("Fechando API...");
  process.exit(-1);
}

database
  .connect()
  .then(startServer)
  .catch((error) => stopServer(error));
