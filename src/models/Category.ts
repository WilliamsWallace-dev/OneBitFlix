import { DataTypes } from "sequelize";
import { Model, Optional} from "sequelize/types";
import { database } from "../../config/sequelize";

export interface Category { 
    id : number,
    name : string,
    position : number
}

export interface CategoryCreationAttribute extends Optional<Category,"id">{}

export interface CategoryIntance extends Model<CategoryCreationAttribute, Category>, Category {}

export const Category = database.define("categories",{
    name : DataTypes.STRING,
    position : DataTypes.NUMBER
})