import { Module } from '@nestjs/common';
import { DatabaseModule } from './module/database/database.module';
import { PostModule } from './module/post/post.module';
import { UserModule } from './module/user/user.module';

@Module({
  imports: [PostModule, UserModule, DatabaseModule],
})
export class AppModule {}
