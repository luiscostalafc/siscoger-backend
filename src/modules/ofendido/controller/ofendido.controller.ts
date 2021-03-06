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

import { CreateOfendidoDto } from '../dtos/create.dto';
import { UpdateOfendidoDto } from '../dtos/update.dto';
import { Ofendido } from '../entity/ofendido.entity';
import { OfendidoService } from '../service/ofendido.service';

@ApiTags('Ofendido')
@Controller('ofendidos')
export class OfendidoController {
  constructor(private service: OfendidoService) {}

  @Get()
  @HttpCode(200)
  @ApiOperation({ summary: 'Search all Ofendido' })
  @ApiOkResponse({ type: [CreateOfendidoDto], description: 'The found Ofendido' })
  async findAll(): Promise<Ofendido[]> {
    return await this.service.findAll();
  }

  @Post('search')
  @HttpCode(200)
  @ApiOperation({ summary: 'Search ofendido' })
  @ApiCreatedResponse({ type: UpdateOfendidoDto, description: 'Searched Ligacao' })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request', })
  async search(@Body() data: CreateOfendidoDto): Promise<Ofendido[]> {
    return await this.service.search(data);
  }

  @Post()
  @HttpCode(201)
  @ApiOperation({ summary: 'Create a new Ofendido' })
  @ApiCreatedResponse({ type: UpdateOfendidoDto, description: 'Created Ofendido' })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request', })
  async create(@Body() data: CreateOfendidoDto): Promise<Ofendido> {
    return await this.service.create(data);
  }

  @Get(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Search a Ofendido by id' })
  @ApiOkResponse({ type: UpdateOfendidoDto, description: 'The found Ofendido' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async findById(@Param('id') id: string): Promise<Ofendido> {
    return await this.service.findById(id);
  }

  @Put(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Update a Ofendido' })
  @ApiOkResponse({ type: UpdateOfendidoDto, description: 'Updated Ofendido' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async update(
    @Param('id') id: string,
    @Body() data: UpdateOfendidoDto,
  ): Promise<Ofendido> {
    return this.service.update(id, data);
  }

  @Delete(':id')
  @HttpCode(204)
  @ApiOperation({ summary: 'Delete a Ofendido' })
  @ApiNoContentResponse({ description: 'Deleted Ofendido' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async delete(@Param('id') id: string): Promise<void> {
    await this.service.delete(id);
  }
}