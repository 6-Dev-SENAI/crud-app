import cors from "cors";
import user from "./src/controller/userController.js";

function configureRoutes(express, server) {
  server.use(cors());
  server.use(express.json());
  server.use("/usuario", user);
}

export default configureRoutes;
