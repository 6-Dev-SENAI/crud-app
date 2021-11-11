import express from "express";
import setRoutes from "./routes.js";
import Database from "./src/database/index.js";
const database = new Database();

function startServer() {
  const server = express();
  setRoutes(express, server);

  const PORT = process.env.PORT || 5000;
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
