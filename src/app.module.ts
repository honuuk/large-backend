import { Module } from '@nestjs/common';
import { PostModule } from './module/post/post.module';
import { UserModule } from './module/user/user.module';

@Module({
  imports: [PostModule, UserModule],
})
export class AppModule {}
