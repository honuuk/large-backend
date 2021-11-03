import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BaseRepository } from '../database/base.repository';
import { TagEntity } from './entities/tag.entity';
import { Tag } from './entities/tag.model';

@Injectable()
export class TagRepository extends BaseRepository<TagEntity, Tag> {
  constructor(@InjectRepository(TagEntity) private tagRepository: Repository<TagEntity>) {
    super(tagRepository);
  }
}
