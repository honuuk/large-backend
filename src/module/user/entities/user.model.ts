import { IModel } from 'src/interfaces/model';
import { IUser } from '../types/user';

export class User implements IModel, IUser {
  private _id: number;
  private _username: string;
  private _name: string;
  private _password: string;
  private _salt: string;

  constructor({ id, username, name, password, salt }: IUser) {
    this._id = id;
    this._username = username;
    this._name = name;
    this._password = password;
    this._salt = salt;
  }

  public get id(): number {
    return this._id;
  }

  public set id(id: number) {
    this._id = id;
  }

  public get username(): string {
    return this._username;
  }

  public set username(username: string) {
    this._username = username;
  }

  public get name(): string {
    return this._name;
  }

  public set name(name: string) {
    this._name = name;
  }

  public get password(): string {
    return this._password;
  }

  public set password(password: string) {
    this._password = password;
  }

  public get salt(): string {
    return this._salt;
  }

  public set salt(salt: string) {
    this._salt = salt;
  }

  toJSON() {
    return {
      id: this.id,
      username: this.username,
      name: this.name,
      password: this.password,
      salt: this.salt,
    };
  }
}
