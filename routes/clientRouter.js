import express from 'express'
import { formularioRegistro, guardarUsuario } from '../controllers/clientController.js'

const clientRouter = express.Router()

clientRouter.get('/registro', formularioRegistro)
clientRouter.post('/registro', guardarUsuario)

export {
    clientRouter
}