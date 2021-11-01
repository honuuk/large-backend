import { NotFoundException } from '@nestjs/common';
import { DeepPartial, Repository } from 'typeorm';
import { IEntity } from '../../interfaces/entity';

export class BaseRepository<Entity extends IEntity<Model>, Model> {
  protected repository: Repository<Entity>;

  constructor(repository: Repository<Entity>) {
    this.repository = repository;
  }

  async create(data: DeepPartial<Entity>): Promise<Model> {
    const newEntity = this.repository.create(data);
    await this.repository.save(newEntity);
    return newEntity.toModel();
  }

  async findAll(): Promise<Model[]> {
    const entities = await this.repository.find();
    return entities.map((entity) => entity.toModel());
  }

  async findByPk(id: number): Promise<Model> {
    const entity = await this.repository.findOne(id);
    if (!entity) throw new NotFoundException('Entity not found');
    return entity.toModel();
  }

  async update(id: number, data: DeepPartial<Entity>): Promise<Model> {
    await this.repository.update(id, data);
    const updatedEntity = await this.repository.findOne(id);
    if (!updatedEntity) throw new NotFoundException('Entity not found');
    return updatedEntity.toModel();
  }

  async delete(id: number): Promise<void> {
    const deleteResponse = await this.repository.delete(id);
    if (deleteResponse.affected !== 1) throw new NotFoundException('Fleet not found');
  }
}
