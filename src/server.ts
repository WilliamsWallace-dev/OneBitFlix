import express from "express"
import { database } from "../config/sequelize"
import { adminJS, adminJsRouter } from "./adminjs"

const app = express()

app.use(express.static('public'))

app.use(adminJS.options.rootPath,adminJsRouter)

const PORT = process.env.PORT || 3000
app.listen(PORT, ()=>{
    //O seguinte código irá executar uma query que irá se certificar acerca da conexão com o banco de dados. 
    database.authenticate().then(()=>{
        console.log(`DB connection successfuly`)
    })
    console.log(`Server started successfuly at the port ${PORT}`)
})