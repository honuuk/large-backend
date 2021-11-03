import { Tag } from 'src/module/tag/entities/tag.model';
import { User } from 'src/module/user/entities/user.model';

export interface IPost {
  id: number;
  title: string;
  content: string;
  userId: number;

  user?: User;
  tag?: Tag;
}
