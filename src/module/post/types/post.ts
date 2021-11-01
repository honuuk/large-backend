import { User } from 'src/module/user/entities/user.model';

export interface IPost {
  id: number;
  content: string;
  userId: number;

  user?: User;
}
