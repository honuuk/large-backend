import { IEntity } from 'src/interfaces/entity';

export function entitiesToModels<T>(entities: IEntity<T>[] | undefined): T[] | undefined {
  if (!entities) return;
  return entities.map((entity) => entity.toModel());
}

export function entityToModel<T>(entity: IEntity<T> | undefined): T | undefined {
  if (!entity) return;
  return entity.toModel();
}
