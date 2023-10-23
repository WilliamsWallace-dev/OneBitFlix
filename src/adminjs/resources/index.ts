import { ResourceWithOptions } from "adminjs";
import { Category, Course, Episode } from "../../models";
import { categoryResourceOptions } from "./category";
import { courseResourceOptions } from "./course";
import { episodeResourceOptions } from "./episode";


export const adminJsResources: ResourceWithOptions[] = [
  //Essa é a ordem que aparece no adminJS
  {
    resource: Category, //model
    options: categoryResourceOptions
  },
  {
    resource : Course, //model
    options : courseResourceOptions
  },
  {
    resource : Episode,
    options : episodeResourceOptions
  }
]
//Neste arquivo com o ResourceWithOptions iremos atrelar as opções de recurso do
//adminJs com os models criados, para que assim o sequelize possa realizar a 
//comunicação entre o adminJS e o banco de dados.