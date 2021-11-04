import _sequelize from "sequelize";
const { Model } = _sequelize;

export default class usuarioTb extends Model {
  static init(sequelize, DataTypes) {
    super.init(
      {
        id_usuario: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        nm_usuario: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
        nr_idade: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        ds_sexo: {
          type: DataTypes.CHAR,
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: "usuario_tb",
        timestamps: false,
      }
    );
    return usuarioTb;
  }
}
