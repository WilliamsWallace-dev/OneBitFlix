import { ResourceWithOptions } from "adminjs";
import { Category } from "../../models";
import { categoryResourceOptions } from "./category";

export const adminJsResources: ResourceWithOptions[] = [
  {
    resource: Category, //model
    options: categoryResourceOptions
  }
]
//Neste arquivo com o ResourceWithOptions iremos atrelar as opções de recurso do
//adminJs com os models criados, para que assim o sequelize possa realizar a 
//comunicação entre o adminJS e o banco de dados.