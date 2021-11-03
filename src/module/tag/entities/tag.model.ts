import { IModel } from 'src/interfaces/model';
import { Post } from 'src/module/post/entities/post.model';
import { ITag } from '../types/tag';

export class Tag implements IModel, ITag {
  private _id: number;
  private _name: string;

  private _posts?: Post[];

  constructor({ id, name, posts }: ITag) {
    this._id = id;
    this._name = name;

    this._posts = posts;
  }

  public get id(): number {
    return this._id;
  }

  public set id(id: number) {
    this._id = id;
  }

  public get name(): string {
    return this._name;
  }

  public set name(name: string) {
    this._name = name;
  }

  public get posts(): Post[] | undefined {
    return this._posts;
  }

  public set posts(posts: Post[] | undefined) {
    this._posts = posts;
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      posts: this.posts,
    };
  }
}
