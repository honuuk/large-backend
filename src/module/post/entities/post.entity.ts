import { IEntity } from 'src/interfaces/entity';
import { BaseEntity } from 'src/module/database/base.entity';
import { UserEntity } from 'src/module/user/entities/user.entity';
import { entityToModel } from 'src/utils/entity-converter';
import { Column, Entity, ManyToOne } from 'typeorm';
import { Post } from './post.model';

@Entity({ name: 'posts' })
export class PostEntity extends BaseEntity implements IEntity<Post> {
  @Column()
  content: string;

  @Column()
  userId: number;

  @ManyToOne(() => UserEntity, (userEntity) => userEntity.posts)
  user?: UserEntity;

  toModel(): Post {
    return new Post({ ...this, user: entityToModel(this.user) });
  }
}
