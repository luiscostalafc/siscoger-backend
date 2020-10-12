import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  MinLength,
} from 'class-validator';

export class UpdateSindicanciaDto {
  @IsOptional()
  @IsNumber()
  @IsPositive()
  @ApiProperty()
  id_andamentocoger: number

  @IsOptional()
  @IsNumber()
  @IsPositive()
  @ApiProperty()
  id_andamento: number

  @IsOptional()
  @IsNumber()
  @IsPositive()
  @ApiProperty()
  sjd_ref?: number

  @IsOptional()
  @IsNumber()
  @IsPositive()
  @ApiProperty()
  sjd_ref_ano?: number

  @IsOptional()
  @IsDate()
  @ApiProperty()
  fato_data?: Date

  @IsOptional()
  @IsDate()
  @ApiProperty()
  abertura_data?: Date

  @IsString()
  @IsNotEmpty()
  @MinLength(100)
  @ApiProperty()
  sintese_txt: string

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  cdopm: string

  @IsOptional()
  @IsString()
  @ApiProperty()
  doc_tipo?: string

  @IsOptional()
  @IsString()
  @ApiProperty()
  doc_numero?: string

  @IsOptional()
  @IsString()
  @ApiProperty()
  doc_origem_txt: string

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  portaria_numero: string

  // @IsDate()
  @IsNotEmpty()
  @ApiProperty()
  portaria_data: Date

  @IsOptional()
  @IsString()
  @ApiProperty()
  sol_cmt_file?: string

  @IsOptional()
  @IsDate()
  @ApiProperty()
  sol_cmt_data?: Date

  @IsOptional()
  @IsString()
  @ApiProperty()
  sol_cmtgeral_file?: string

  @IsOptional()
  @IsDate()
  @ApiProperty()
  sol_cmtgeral_data?: Date

  @IsOptional()
  @IsString()
  @ApiProperty()
  opm_meta4?: string

  @IsOptional()
  @IsString()
  @ApiProperty()
  relatorio_file?: string

  @IsOptional()
  @IsDate()
  @ApiProperty()
  relatorio_data?: Date

  @IsOptional()
  @IsBoolean()
  @ApiProperty()
  prioridade?: boolean

  @IsOptional()
  @IsString()
  @ApiProperty()
  motivo_cancelamento?: string

  @IsOptional()
  @IsString()
  @ApiProperty()
  motivo_abertura?: string

  @IsOptional()
  @IsString()
  @ApiProperty()
  motivo_outros?: string

  @IsOptional()
  @IsBoolean()
  @ApiProperty()
  prorogacao?: boolean

  @IsOptional()
  @IsNumber()
  @ApiProperty()
  prorogacao_dias?: number
}