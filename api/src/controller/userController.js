import { Router } from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import UserService from "../service/userService.js";
import UserUtils from "../utils/userUtils.js";
import Error from "../models/res/errorModel.js";

dotenv.config();

const router = Router();
const srv = new UserService();
const utils = new UserUtils();

router.get("/", async (req, resp) => {
  try {
    const name = req.query.name || "";

    let tableUsers = await srv.listUsers(name);

    if (tableUsers.length === 0)
      resp
        .status(404)
        .send(new Error(404, "Não há usuários registrado no sistema."));
    else {
      let respUsers = utils.toResponses(tableUsers, "");

      resp.status(200).send(respUsers);
    }
  } catch (error) {
    resp.status(400).send(new Error(400, error));
  }
});

router.post("/cadastrar", async (req, resp) => {
  try {
    const userReq = req.body;

    let userTable = utils.toTable(userReq);

    userTable = await srv.createUser(userTable);

    if (!userTable || !mongoose.isValidObjectId(userTable._id))
      resp
        .status(404)
        .send(new Error(404, "Ocorreu um erro ao tentar criar usuário."));
    else {
      let userResp = utils.toResponse(userTable, "");

      resp.status(200).send(userResp);
    }
  } catch (error) {
    resp.status(400).send(new Error(400, error));
  }
});

router.put("/alterar/:id", async (req, resp) => {
  try {
    const userId = req.params.id || "";
    const newUserReq = req.body;

    let oldUser = await srv.consultUserById(userId);

    if (!oldUser || !mongoose.isValidObjectId(oldUser._id))
      resp
        .status(404)
        .send(new Error(404, `Usuário não cadastrado no sistema.`));
    else {
      const newUser = utils.toUpdateTable(newUserReq);

      oldUser = await srv.updateUser(oldUser, newUser);

      let userResp = utils.toResponse(oldUser, "");

      resp.status(200).send(userResp);
    }
  } catch (error) {
    resp.status(400).send(new Error(400, error));
  }
});

router.delete("/deletar/:id", async (req, resp) => {
  try {
    const userId = req.params.id || "";

    let user = await srv.consultUserById(userId);

    if (!user || !mongoose.isValidObjectId(user._id))
      resp
        .status(404)
        .send(new Error(404, `Usuário não cadastrado no sistema.`));
    else {
      await srv.deleteUser(userId);

      let userResp = utils.toResponse(user, "");

      resp.status(200).send(userResp);
    }
  } catch (error) {
    resp.status(400).send(new Error(400, error));
  }
});

router.post("/login", async (req, resp) => {
  try {
    const email = req.body.email || "";
    const password = req.body.password || "";

    const user = await srv.login(email, password);

    if (!user || !mongoose.isValidObjectId(user._id))
      resp.status(404).send(new Error(404, "Email ou senha incorretos."));
    else {
      const token = jwt.sign(
        { user_id: user._id, password },
        process.env.TOKEN,
        {
          expiresIn: 120,
        }
      );
      
      let userResp = utils.toResponse(user, token);

      resp.status(200).send(userResp);
    }
  } catch (error) {
    console.log("🚀 ~ file: userController.js ~ line 124 ~ router.post ~ error", error)
    resp.status(400).send(new Error(400, error));
  }
});

export default router;
