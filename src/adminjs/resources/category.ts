import { ResourceOptions } from "adminjs";
//ResourceOptions, recurso utilizado para definir um recurso do adminJS
//Onde serão disponibilizado as opções para manipulação

export const categoryResourceOptions: ResourceOptions = {
  navigation: 'Catálogo',
  editProperties: ['name', 'position'],
  filterProperties: ['name', 'position', 'createdAt', 'updatedAt'],
  listProperties: ['id', 'name', 'position'],
  showProperties: ['id', 'name', 'position', 'createdAt', 'updatedAt']
}