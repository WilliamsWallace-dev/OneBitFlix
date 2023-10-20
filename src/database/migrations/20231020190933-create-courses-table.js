'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('courses',{
      id : {
        type : Sequelize.DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey : true,
        allownNull : false
      },
      name: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING
      },
      synopsis: {
        allowNull: false,
        type: Sequelize.DataTypes.TEXT
      },
      thumbnail_url: {
        type: Sequelize.DataTypes.STRING
      },
      featured: {
        defaultValue: false,
        type: Sequelize.DataTypes.BOOLEAN
      },
      category_id : {
        allowNull : false,
        type : Sequelize.DataTypes.INTEGER,
        references : {model : "categories" , key : "id"},
        onUpdate : "CASCADE",
        onDelete : "RESTRICT"
      },
      created_at : {
        type : Sequelize.DataTypes.DATE
      },
      //Tivemos uma problema pois estava escrito upDATED_at
      updated_at : {
        type : Sequelize.DataTypes.DATE
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('courses')
  }
};
