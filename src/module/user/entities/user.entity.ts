import { IEntity } from 'src/interfaces/entity';
import { BaseEntity } from 'src/module/database/base.entity';
import { PostEntity } from 'src/module/post/entities/post.entity';
import { entitiesToModels } from 'src/utils/entity-converter';
import { Column, Entity, OneToMany } from 'typeorm';
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

  @Column({ nullable: true })
  logoImageSrc?: string;

  @OneToMany(() => PostEntity, (postEntity) => postEntity.user)
  posts?: PostEntity[];

  toModel(): User {
    return new User({ ...this, posts: entitiesToModels(this.posts) });
  }
}
