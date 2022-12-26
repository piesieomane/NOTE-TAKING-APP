'use strict';
/** @type {import('sequelize-cli').Migration} */
async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('UserNotes', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: {
          tableName: 'Users',
        },
        key: 'id',
      },
    },
    noteId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: {
          tableName: 'Notes',
        },
        key: 'id',
      },
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
  await queryInterface.dropTable('UserNotes');
}

module.exports = {
  up,
  down,
};
