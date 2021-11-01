import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BaseRepository } from '../database/base.repository';
import { PostEntity } from './entities/post.entity';
import { Post } from './entities/post.model';

@Injectable()
export class PostRepository extends BaseRepository<PostEntity, Post> {
  constructor(@InjectRepository(PostEntity) private postRepository: Repository<PostEntity>) {
    super(postRepository);
  }
}
