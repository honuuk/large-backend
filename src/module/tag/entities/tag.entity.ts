import { IEntity } from 'src/interfaces/entity';
import { BaseEntity } from 'src/module/database/base.entity';
import { PostEntity } from 'src/module/post/entities/post.entity';
import { entitiesToModels } from 'src/utils/entity-converter';
import { Column, Entity, OneToMany } from 'typeorm';
import { Tag } from './tag.model';

@Entity({ name: 'tags' })
export class TagEntity extends BaseEntity implements IEntity<Tag> {
  @Column()
  name: string;

  @OneToMany(() => PostEntity, (postEntity) => postEntity.tag)
  posts?: PostEntity[];

  toModel(): Tag {
    return new Tag({ ...this, posts: entitiesToModels(this.posts) });
  }
}
