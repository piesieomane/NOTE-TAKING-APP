'use strict';
import { Model } from 'sequelize';

interface NoteAttributes {
  id: number;
  title: string;
  content: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Note extends Model<NoteAttributes> implements NoteAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    public id!: number;
    public title!: string;
    public content!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

    static associate(models: any) {
      // define association here
    }
  }
  Note.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      content: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Note',
    }
  );
  return Note;
};
