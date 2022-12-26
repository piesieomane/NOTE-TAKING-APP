'use strict';
/** @type {import('sequelize-cli').Migration} */
async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('Users', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    name: {
      type: Sequelize.STRING,
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
  await queryInterface.dropTable('Users');
}

module.exports = {
  up,
  down,
};
