import { DataTypes, Model, Optional } from 'sequelize'
import { database } from '../../config/sequelize'

export interface Category {
  id: number
  name: string
  position: number
}

export interface CategoryCreationAttributes extends Optional<Category,'id'> {}
// export interface CategoryCreationAttributes extends Optional<Category, 'id'> {}

export interface CategoryInstance extends Model<Category, CategoryCreationAttributes>, Category {}
// export interface CategoryInstance extends Model<Category, CategoryCreationAttributes>, Category {}

export const Category = database.define<CategoryInstance, Category>('categories', {
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
    position: {
      allowNull: false,
      unique: true,
      type: DataTypes.INTEGER
    }
  })