import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BaseRepository } from '../database/base.repository';
import { UserEntity } from './entities/user.entity';
import { User } from './entities/user.model';

@Injectable()
export class UserRepository extends BaseRepository<UserEntity, User> {
  constructor(@InjectRepository(UserEntity) private userRepository: Repository<UserEntity>) {
    super(userRepository);
  }
}
