import mongoose from "mongoose";

const MONGO_URI =
  "mongodb+srv://devmonkdb:d3vm0nk@cluster0.jghqd.mongodb.net/crud_db";

class Database {
  async connect() {
    console.log("Tentando acessar o banco de dados...");
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Banco de Dados acessado com sucesso!");
    return true;
  }
}

export default Database;
