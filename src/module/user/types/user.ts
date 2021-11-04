import { Post } from 'src/module/post/entities/post.model';

export interface IUser {
  id: number;
  username: string;
  name: string;
  password: string;
  salt: string;
  logoImageSrc?: string;

  posts?: Post[];
}
