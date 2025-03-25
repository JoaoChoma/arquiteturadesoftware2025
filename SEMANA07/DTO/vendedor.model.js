import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

export const Vendedor = sequelize.define('Vendedor', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },

  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },

  telefone: {
    type: DataTypes.STRING,
    allowNull: true,
  },

  senhaHash: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: 'Senha criptografada com bcrypt',
  },

  ativo: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },

}, {
  tableName: 'vendedores',
  timestamps: true,
});
