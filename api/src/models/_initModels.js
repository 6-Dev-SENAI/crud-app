import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _usuarioTb from "./userModel.js";

function initModels(sequelize) {
  var usuarioTb = _usuarioTb.init(sequelize, DataTypes);

  return {
    usuarioTb,
  };
}

export default async function authenticateDB(sequelize, logging) {
  try {
    if (logging) {
      console.log("Tentando acessar o banco de dados...");
      await sequelize.authenticate();
      console.log("Banco de Dados acessado com sucesso!");
      console.log("Iniciando Models...");
      return initModels(sequelize);
    } else {
      await sequelize.authenticate();
      return initModels(sequelize);
    }
  } catch (error) {
    throw "Não foi possível acessar o banco de dados...";
  }
}
