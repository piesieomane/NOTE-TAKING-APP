'use strict';

import { Model } from 'sequelize';

interface UserNoteAttributes {
  noteId: number;
  userId: number;
  id: number;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class UserNote
    extends Model<UserNoteAttributes>
    implements UserNoteAttributes
  {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    public id!: number;
    public noteId!: number;
    public userId!: number;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

    static associate(models: any) {
      // define association here
    }
  }
  UserNote.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      noteId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'Note',
          key: 'id',
        },
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'User',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'UserNote',
    }
  );
  return UserNote;
};
