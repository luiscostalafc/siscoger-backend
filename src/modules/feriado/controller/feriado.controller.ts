import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { ErrorResponse } from '../../../common/responses';

import { CreateFeriadoDto } from '../dtos/create.dto';
import { UpdateFeriadoDto } from '../dtos/update.dto';
import { Feriado } from '../entity/feriado.entity';
import { FeriadoService } from '../service/feriado.service';

@ApiTags('Feriado')
@Controller('feriados')
export class FeriadoController {
  constructor(private service: FeriadoService) {}

  @Get()
  @HttpCode(200)
  @ApiOperation({ summary: 'Search all Feriado' })
  @ApiOkResponse({ type: [CreateFeriadoDto], description: 'The found Feriado' })
  async findAll(): Promise<Feriado[]> {
    return await this.service.findAll();
  }

  @Post()
  @HttpCode(201)
  @ApiOperation({ summary: 'Create a new Feriado' })
  @ApiCreatedResponse({ type: UpdateFeriadoDto, description: 'Created Feriado' })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request', })
  async create(@Body() data: CreateFeriadoDto): Promise<Feriado> {
    return await this.service.create(data);
  }

  @Get(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Search a Feriado by id' })
  @ApiOkResponse({ type: UpdateFeriadoDto, description: 'The found Feriado' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async findById(@Param('id') id: string): Promise<Feriado> {
    return await this.service.findById(id);
  }

  @Put(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Update a Feriado' })
  @ApiOkResponse({ type: UpdateFeriadoDto, description: 'Updated Feriado' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async update(
    @Param('id') id: string,
    @Body() data: UpdateFeriadoDto,
  ): Promise<Feriado> {
    return this.service.update(id, data);
  }

  @Delete(':id')
  @HttpCode(204)
  @ApiOperation({ summary: 'Delete a Feriado' })
  @ApiNoContentResponse({ description: 'Deleted Feriado' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async delete(@Param('id') id: string): Promise<void> {
    await this.service.delete(id);
  }
}