import jwt from "jsonwebtoken";
import Error from "../models/res/errorModel.js";

const config = process.env;

const verifyToken = (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];

  if (!token)
    res.status(401).send(new Error(401, "Token de autenticação não definido."));
  else {
    try {
      const decoded = jwt.verify(token, config.TOKEN);
      req.body.token = decoded;
      return next();
    } catch (err) {
      res
        .status(401)
        .send(new Error(401, "Token inválido; por favor re-faça o login!"));
    }
  }
};

export default verifyToken;
