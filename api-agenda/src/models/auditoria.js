const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Auditoria = sequelize.define(
  "Auditoria",
  {
    id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true },
    usuario: { type: DataTypes.STRING, allowNull: false },
    acao: { type: DataTypes.STRING, allowNull: false },
    data: { type: DataTypes.JSON, allowNull: true },
  },
  {
    timestamps: true,
  }
);

module.exports = Auditoria;
