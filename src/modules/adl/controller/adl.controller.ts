import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags
} from '@nestjs/swagger';
import { ErrorResponse } from '../../../common/responses';
import { CreateAdlDto } from '../dtos/create.dto';
import { UpdateAdlDto } from '../dtos/update.dto';
import { Adl } from '../entity/adl.entity';
import { AdlService } from '../service/adl.service';


@ApiTags('Adl')
@Controller('adls')
export class AdlController {
  constructor(private service: AdlService) {}

  @Get()
  @HttpCode(200)
  @ApiOperation({ summary: 'Search all Adl' })
  @ApiOkResponse({ type: [CreateAdlDto], description: 'The found Adl' })
  async findAll(): Promise<Adl[]> {
    return await this.service.findAll();
  }

  @Post()
  @HttpCode(201)
  @ApiOperation({ summary: 'Create a new Adl' })
  @ApiCreatedResponse({ type: UpdateAdlDto, description: 'Created Adl' })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request', })
  async create(@Body() data: CreateAdlDto): Promise<Adl> {
    return await this.service.create(data);
  }

  @Get(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Search a Adl by id' })
  @ApiOkResponse({ type: UpdateAdlDto, description: 'The found Adl' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async findById(@Param('id') id: string): Promise<Adl> {
    return await this.service.findById(id);
  }

  @Put(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Update a Adl' })
  @ApiOkResponse({ type: UpdateAdlDto, description: 'Updated Adl' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async update(
    @Param('id') id: string,
    @Body() data: UpdateAdlDto,
  ): Promise<Adl> {
    return this.service.update(id, data);
  }

  @Delete(':id')
  @HttpCode(204)
  @ApiOperation({ summary: 'Delete a Adl' })
  @ApiNoContentResponse({ description: 'Deleted Adl' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async delete(@Param('id') id: string): Promise<void> {
    await this.service.delete(id);
  }
}