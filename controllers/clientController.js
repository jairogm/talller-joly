import { Cliente } from "../models/ClientModel.js";
import { check, validationResult } from "express-validator";



const formularioRegistro = (req, res) => {
    res.render("cliente/registro", {
        nombreVista: "Nuevo Cliente",
    });
};

const guardarUsuario = async (req, res) => {
    await check("nombre")
        .notEmpty()
        .withMessage("El campo nombre es obligatorio")
        .run(req);
    await check("apellido")
        .notEmpty()
        .withMessage("El campo apellido es obligatorio")
        .run(req);
    await check("documento")
        .notEmpty()
        .withMessage("El campo documento es obligatorio")
        .run(req);
    await check("correo")
        .isEmail()
        .withMessage("El correo debe llevar un formato valido")
        .run(req);
    await check("direccion")
        .notEmpty()
        .withMessage("El campo direccion es obligatorio")
        .run(req);
    await check("telefono")
        .notEmpty()
        .withMessage("El campo telefono es obligatorio")
        .run(req);


    let listadoErrores = validationResult(req);

    if (!listadoErrores.isEmpty()) {
        return res.render("cliente/registro", {
            nombreVista: "Nuevo Cliente",
            errores: listadoErrores.array(),
            usuario: {
                nombre: req.body.nombre,
                correo: req.body.correo,
            },
        });
    }
    const { nombre, apellido, documento ,correo,  direccion, telefono } = req.body;

    const validarUsuario = await Cliente.findOne({ where: { correo } });

    if (validarUsuario) {
        return res.render("cliente/registro", {
            nombreVista: "Nuevo Cliente",
            errores: [{ msg: "El correo ya existe en la base de datos" }],
            usuario: {
                nombre: req.body.nombre,
                correo: req.body.correo,
            },
        });
    }

    const usuario = await Cliente.create({
        nombre,
        apellido,
        documento,
        correo,
        direccion,
        telefono
    });


    res.render("templates/guardadoExitosamente", {
        nombreVista: "Cliente Guardado!",
        mensaje:
            "El cliente ha sido guardado exitosamente en la base de datos :)",
    });
};


export {
    formularioRegistro,
    guardarUsuario
};
