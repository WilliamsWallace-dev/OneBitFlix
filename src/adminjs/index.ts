import AdminJS from "adminjs"
import AdminJSExpress from "@adminjs/express"
import AdminJSSequelize from "@adminjs/sequelize"
import { database } from "../../config/sequelize"
import { adminJsResources } from "./resources"

AdminJS.registerAdapter(AdminJSSequelize) // Estamos dizendo para o adminJS qual a ORM que estamos utilizando.

export const adminJS = new AdminJS({ //Estamos criando uma instância do adminJS para passarmos as confirgurações e customizações
    databases : [database],
    rootPath : '/admin',
    resources : adminJsResources, // rota da aplicação (endPoint) para acessar ao adminJS na nossa aplicação
    branding: { //Customização as cores e visual do adminJS
        companyName: 'OneBitFlix',
        logo: '/svg/logoOnebitflix.svg',
        theme: {
          colors: {
            primary100: '#ff0043',
              primary80: '#ff1a57',
              primary60: '#ff3369',
              primary40: '#ff4d7c',
                primary20: '#ff668f',
              grey100: '#151515',
              grey80: '#333333',
              grey60: '#4d4d4d',
              grey40: '#666666',
              grey20: '#dddddd',
              filterBg: '#333333',
              accent: '#151515',
              hoverBg: '#151515',
          }
        }
    }
})

export const adminJsRouter = AdminJSExpress.buildRouter(adminJS) 
//Estamos criando o middleware para utilizarmos no nosos arquivo principal server.ts (app.js)
//Estamos exportando o router das rotas do adminJs para ser aplicada como middleware em "app.use('endPoint',middleware)