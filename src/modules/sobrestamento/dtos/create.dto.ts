import { ApiProperty } from '@nestjs/swagger';
import {
  IsDate,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';

export class CreateSobrestamentoDto {
  @IsOptional()
  @IsString()
  @ApiProperty()
  rg?: string

  @IsOptional()
  @IsDate()
  @ApiProperty()
  inicio_data?: Date

  @IsOptional()
  @IsString()
  @ApiProperty()
  publicacao_inicio?: string

  @IsOptional()
  @IsDate()
  @ApiProperty()
  termino_data?: Date

  @IsOptional()
  @IsString()
  @ApiProperty()
  publicacao_termino?: string
  
  @IsOptional()
  @IsString()
  @ApiProperty()
  motivo?: string
  
  @IsOptional()
  @IsNumber()
  @IsPositive()
  @ApiProperty()
  id_adl?: number
  
  @IsOptional()
  @IsNumber()
  @IsPositive()
  @ApiProperty()
  id_cd?: number
  
  @IsOptional()
  @IsNumber()
  @IsPositive()
  @ApiProperty()
  id_cj?: number
  
  @IsOptional()
  @IsNumber()
  @IsPositive()
  @ApiProperty()
  id_fatd?: number
  
  @IsOptional()
  @IsNumber()
  @IsPositive()
  @ApiProperty()
  id_iso?: number
  
  @IsOptional()
  @IsNumber()
  @IsPositive()
  @ApiProperty()
  id_it?: number
  
  @IsOptional()
  @IsNumber()
  @IsPositive()
  @ApiProperty()
  id_sindicancia?: number
}