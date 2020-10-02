import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDto } from '../dtos/create.dto';
import { UpdateDto } from '../dtos/update.dto';
import { Sindicancia } from '../entity/sindicancia.entity';

@Injectable()
export class SindicanciaService {
  constructor(
    @InjectRepository(Sindicancia)
    private repository: Repository<Sindicancia>,
  ) {}

  async findAll(): Promise<Sindicancia[]> {
    return await this.repository.find();
  }

  async create(data: CreateDto): Promise<Sindicancia> {
    const registry = this.repository.create(data);
    return await this.repository.save(registry);
  }

  async findById(id: string): Promise<Sindicancia> {
    const registry = await this.repository.findOne(id);

    if (!registry) {
      throw new NotFoundException('Registry not found');
    }

    return registry;
  }

  async update(id: string, data: UpdateDto): Promise<Sindicancia> {
    const registry = await this.findById(id);
    await this.repository.update(id, { ...data });

    return this.repository.create({ ...registry, ...data });
  }

  async delete(id: string): Promise<void> {
    await this.findById(id);
    await this.repository.delete(id);
  }
}