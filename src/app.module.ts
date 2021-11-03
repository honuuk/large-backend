import { Module } from '@nestjs/common';
import { DatabaseModule } from './module/database/database.module';
import { PostModule } from './module/post/post.module';
import { UserModule } from './module/user/user.module';
import { TagModule } from './module/tag/tag.module';

@Module({
  imports: [PostModule, UserModule, DatabaseModule, TagModule],
})
export class AppModule {}
