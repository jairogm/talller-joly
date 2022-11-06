import { DataTypes } from "sequelize";
import { dataBase } from "../config/dataBase.js";

const Cliente = dataBase.define('cliente', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false
    },
    documento: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    correo: {
        type: DataTypes.STRING,
        allowNull: false
    },

    direccion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefono: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

export {
    Cliente
}