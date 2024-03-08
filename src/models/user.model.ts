import { Model, Table, Column, DataType } from 'sequelize-typescript';
import { CryptoUtil } from '../utils/encrypt.utils';

@Table({
  tableName: 'users',
  timestamps: false,
})
export class User extends Model {
  @Column({
    type: DataType.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: DataType.UUIDV4,
  })
  user_id: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  first_name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  username: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  age: number;

  get decryptedPassword(): string {
    // Assuming CryptoUtil.decrypt is a synchronous operation
    return CryptoUtil.decrypt(this.getDataValue('password'));
  }
}
