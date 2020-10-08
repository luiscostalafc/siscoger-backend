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

import { ErrorResponse } from '../../../common/responses/error';
import { CreateDto } from '../dtos/create.dto';
import { UpdateDto } from '../dtos/update.dto';
import { Sindicancia } from '../entity/sindicancia.entity';
import { SindicanciaService } from '../service/sindicancia.service';

@ApiTags('Sindicancia')
@Controller('sindicancias')
export class SindicanciaController {
  constructor(private service: SindicanciaService) {}

  @Get()
  @HttpCode(200)
  @ApiOperation({ summary: 'Search all Sindicancia' })
  @ApiOkResponse({ type: [UpdateDto], description: 'The found Sindicancia' })
  async findAll(): Promise<Sindicancia[]> {
    return await this.service.findAll();
  }

  @Post()
  @HttpCode(201)
  @ApiOperation({ summary: 'Create a new Sindicancia' })
  @ApiCreatedResponse({ type: UpdateDto, description: 'Created Sindicancia' })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request', })
  async create(@Body() data: CreateDto): Promise<Sindicancia> {
    return await this.service.create(data);
  }

  @Get(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Search a Sindicancia by id' })
  @ApiOkResponse({ type: UpdateDto, description: 'The found Sindicancia' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async findById(@Param('id') id: string): Promise<Sindicancia> {
    return await this.service.findById(id);
  }

  @Put(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Update a Sindicancia' })
  @ApiOkResponse({ type: UpdateDto, description: 'Updated Sindicancia' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async update(
    @Param('id') id: string,
    @Body() data: UpdateDto,
  ): Promise<Sindicancia> {
    return this.service.update(id, data);
  }

  @Delete(':id')
  @HttpCode(204)
  @ApiOperation({ summary: 'Delete a Sindicancia' })
  @ApiNoContentResponse({ description: 'Deleted Sindicancia' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async delete(@Param('id') id: string): Promise<void> {
    await this.service.delete(id);
  }
}