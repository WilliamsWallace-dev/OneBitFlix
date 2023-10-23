import { DataTypes, Model, Optional } from "sequelize"
import { database } from "../../config/sequelize"

export interface Episode {
    id: number
    name: string
    synopsis: number,
    order : number,
    video_url : string,
    seconds_long : number
    course_id : number
  }
  
  export interface EpisodeCreationAttributes extends Optional<Episode,'id' | 'video_url' | 'seconds_long'> {}
  // export interface CategoryCreationAttributes extends Optional<Category, 'id'> {}
  
  export interface EpisodeInstance extends Model<Episode, EpisodeCreationAttributes>, Episode {}
  // export interface CategoryInstance extends Model<Category, CategoryCreationAttributes>, Category {}
  
  export const Episode = database.define<EpisodeInstance, Episode>('episodes', {
  //Nessa declaração, o define deve receber como generics primeiro a interface de Instance, então CategoryInstance,Category
  // export const Category = database.define<CategoryInstance, Category>('categories', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING
      },
      synopsis: {
        allowNull: false,
        type: DataTypes.TEXT
      },
      order: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      video_url: {
        type: DataTypes.STRING
      },
      seconds_long: {
        type: DataTypes.INTEGER
      },
      course_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: { model: 'courses', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      },
    })