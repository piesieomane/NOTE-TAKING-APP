'use strict';
/** @type {import('sequelize-cli').Migration} */
async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('Notes', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    content: {
      type: Sequelize.TEXT,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  });
}
async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable('Notes');
}

module.exports = {
  up,
  down,
};
