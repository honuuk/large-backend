import { IEntity } from 'src/interfaces/entity';
import { BaseEntity } from 'src/module/database/base.entity';
import { TagEntity } from 'src/module/tag/entities/tag.entity';
import { UserEntity } from 'src/module/user/entities/user.entity';
import { entityToModel } from 'src/utils/entity-converter';
import { Column, Entity, ManyToOne } from 'typeorm';
import { Post } from './post.model';

@Entity({ name: 'posts' })
export class PostEntity extends BaseEntity implements IEntity<Post> {
  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  userId: number;

  @ManyToOne(() => UserEntity, (userEntity) => userEntity.posts)
  user?: UserEntity;

  @ManyToOne(() => TagEntity, (tagEntity) => tagEntity.posts)
  tag?: TagEntity;

  toModel(): Post {
    return new Post({ ...this, user: entityToModel(this.user), tag: entityToModel(this.tag) });
  }
}
