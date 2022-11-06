// Importanto la dependencia y extrayeno la funcion de exress
import express from 'express'
import { clientRouter } from './routes/clientRouter.js'
import { dataBase } from './config/dataBase.js'
import { productRouter } from './routes/productRouter.js'

// Realizando la instancia para trabajar con express
const app = express()
app.use(express.urlencoded({extended:true}))
// Definiendo el puerto en el cual correra el servidor
const puerto = 4000

try {
  await dataBase.authenticate()
  dataBase.sync()
  console.log('Coneccion exitosa a la base de datos')
} catch (error) {
  console.log(error)
}
app.use('/cliente', clientRouter)
app.use('/producto', productRouter)
app.set('view engine', 'pug')
app.set('views', './views')

// Levantando el servidor en el peurto con la funcion lister de express
app.listen(puerto, ()=>{
  console.log(`Servidor corriendo en el puerto ${puerto}`)
})