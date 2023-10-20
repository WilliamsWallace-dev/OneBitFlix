import { ResourceOptions } from "adminjs";
//ResourceOptions, recurso utilizado para definir um recurso do adminJS
//Onde serão disponibilizado as opções para manipulação

export const courseResourceOptions: ResourceOptions = {
  navigation: 'Catálogo',
  editProperties: ['name', 'synopsis','uploadThumbnail','featured','categoryId'],
  filterProperties: ['name','synopsis', 'featured', 'categoryId ', 'createdAt', 'updatedAt'],
  listProperties: ['id', 'name','featured','categoryId'],
  showProperties: ['id', 'name', 'synopsis','uploadThumbnailUrl','featured','categoryId', 'createdAt', 'updatedAt']
}