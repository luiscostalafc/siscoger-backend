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

  getNextRefYear(data: CreateDto): number {
    return data.sjd_ref_ano || new Date().getFullYear()
  }

  async getNextRef(data: CreateDto): Promise<number> {
    const year = this.getNextRefYear(data)
    const registry = await this.repository
    .createQueryBuilder()
    .select("MAX(sjd_ref)", "max")
    .where('sjd_ref_ano = :year', { year })
    .getRawOne()
    console.log(registry)
    // .findOne(
    //   { sjdRefAno: year }
    // )
    return registry?.max ? ++registry.max : 1

  }

  async findAll(): Promise<Sindicancia[]> {
    return await this.repository.find();
  }

  async create(data: CreateDto): Promise<Sindicancia> {
    const registry = this.repository.create(data);
    registry.sjdRefAno = this.getNextRefYear(data)
    registry.sjdRef = await this.getNextRef(data)
    console.log(registry)
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