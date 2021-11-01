import { IModel } from 'src/interfaces/model';
import { User } from 'src/module/user/entities/user.model';
import { IPost } from '../types/post';

export class Post implements IModel, IPost {
  private _id: number;
  private _content: string;
  private _userId: number;

  private _user?: User;

  constructor({ id, content, userId, user }: IPost) {
    this._id = id;
    this._content = content;
    this._userId = userId;

    this._user = user;
  }

  public get id(): number {
    return this._id;
  }

  public set id(id: number) {
    this._id = id;
  }

  public get content(): string {
    return this._content;
  }

  public set content(content: string) {
    this._content = content;
  }

  public get userId(): number {
    return this._userId;
  }

  public set userId(userId: number) {
    this._userId = userId;
  }

  public get user(): User | undefined {
    return this._user;
  }

  public set user(user: User | undefined) {
    this._user = user;
  }

  toJSON() {}
}
