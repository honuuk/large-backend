import { Injectable } from '@nestjs/common';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { TagRepository } from './tag.repository';

@Injectable()
export class TagService {
  constructor(private tagRepository: TagRepository) {}

  create(createTagDto: CreateTagDto) {
    return this.tagRepository.create(createTagDto);
  }

  getAll() {
    return this.tagRepository.findAll();
  }

  getById(id: number) {
    return this.tagRepository.findByPk(id);
  }

  update(id: number, updateTagDto: UpdateTagDto) {
    return this.tagRepository.update(id, updateTagDto);
  }

  delete(id: number) {
    return this.tagRepository.delete(id);
  }
}
