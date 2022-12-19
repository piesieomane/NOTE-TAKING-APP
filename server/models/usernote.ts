'use strict';

const { Model, UUID } = require('sequelize');

interface UserNoteAttributes {
  NoteId: number;
  UserId: String;
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
    public NoteId!: number;
    public UserId!: String;
    static associate(models: any) {
      // define association here
    }
  }
  UserNote.init(
    {
      NoteId: {
        type: DataTypes.NUMBER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'Notes',
          key: 'id',
        },
      },
      UserId: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'Users',
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
