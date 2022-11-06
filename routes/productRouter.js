import express from 'express'
import { formularioRegistro, guardarProducto } from '../controllers/productController.js'

const productRouter = express.Router()

productRouter.get('/registro', formularioRegistro)
productRouter.post('/registro', guardarProducto)

export {
    productRouter
}