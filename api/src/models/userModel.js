import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({
  nm_usuario: { type: String },
  nr_idade: { type: Number },
  ds_sexo: { type: String },
  ds_login: { type: String },
  ds_senha: { type: String },
  bt_admin: { type: Boolean },
});

export default mongoose.model("usuario", usuarioSchema);
