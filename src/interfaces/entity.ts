import { ObjectLiteral } from 'typeorm';

export interface IEntity<M> extends ObjectLiteral {
  toModel(): M;
}
