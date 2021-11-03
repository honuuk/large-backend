import { Post } from 'src/module/post/entities/post.model';

export interface ITag {
  id: number;
  name: string;

  posts?: Post[];
}
