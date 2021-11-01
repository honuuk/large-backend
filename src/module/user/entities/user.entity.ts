import { IEntity } from 'src/interfaces/entity';
import { BaseEntity } from 'src/module/database/base.entity';
import { Column, Entity } from 'typeorm';
import { User } from './user.model';

@Entity({ name: 'users' })
export class UserEntity extends BaseEntity implements IEntity<User> {
  @Column()
  username: string;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column()
  salt: string;

  toModel(): User {
    return new User(this);
  }
}
