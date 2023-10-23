import { ResourceOptions } from "adminjs";
//ResourceOptions, recurso utilizado para definir um recurso do adminJS
//Onde serão disponibilizado as opções para manipulação

export const episodeResourceOptions: ResourceOptions = {
  navigation: 'Catálogo',
  editProperties: ['name', 'synopsis','order','video_url','seconds_long', 'course_id'],
  filterProperties: ['name', 'synopsis','order', 'course_id', 'createdAt', 'updatedAt'],
  listProperties: ['name', 'synopsis','order','seconds_long', 'course_id'],
  showProperties: ['name', 'synopsis','order','video_url','seconds_long', 'course_id', 'createdAt', 'updatedAt']
}