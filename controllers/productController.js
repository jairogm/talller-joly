import { Producto } from "../models/productModel.js";
import { check, validationResult } from "express-validator";



const formularioRegistro = (req, res) => {
    res.render("producto/registro", {
        nombreVista: "Nuevo Producto",
    });
};

const guardarProducto = async (req, res) => {
    await check("nombre")
        .notEmpty()
        .withMessage("El campo nombre es obligatorio")
        .run(req);
    await check("precio")
        .notEmpty()
        .withMessage("El campo precio es obligatorio")
        .run(req);
    await check("referencia")
        .notEmpty()
        .withMessage("El campo referencia es obligatorio")
        .run(req);
    await check("cantidad")
        .notEmpty()
        .withMessage("El campo cantidad es obligatorio")
        .run(req);
    await check("descripcion")
        .notEmpty()
        .withMessage("El campo descripcion es obligatorio")
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
    const { nombre, precio, referencia, cantidad, descripcion } = req.body;

    const validarUsuario = await Producto.findOne({ where: { referencia } });

    if (validarUsuario) {
        return res.render("cliente/registro", {
            nombreVista: "Nuevo Producto",
            errores: [{ msg: "Esta referencia ya existe en la base de datos" }],
            producto: {
                nombre: req.body.nombre,
                referencia: req.body.referencia,
            },
        });
    }

    const producto = await Producto.create({
        nombre, precio, referencia, cantidad, descripcion
    });


    res.render("templates/guardadoExitosamente", {
        nombreVista: "Producto Guardado!",
        mensaje:
            "El producto ha sido guardado exitosamente en la base de datos :)",
    });
};


export {
    formularioRegistro,
    guardarProducto
};
