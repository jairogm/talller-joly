import { DataTypes } from "sequelize";
import { dataBase } from "../config/dataBase.js";

const Producto = dataBase.define('producto', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    precio: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    referencia: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    descripcion: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

export {
    Producto
}