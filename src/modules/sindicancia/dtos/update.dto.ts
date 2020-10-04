import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
} from 'class-validator';

export class UpdateDto {
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  @ApiProperty()
  idAndamentocoger: number

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  @ApiProperty()
  idAndamento: number

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  @ApiProperty()
  sjdRef: number

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  @ApiProperty()
  sjdRefAno: number

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  fatoData: string

  @IsDate()
  @ApiProperty()
  aberturaData: Date

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  sinteseTxt: string

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  cdopm: string

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  docTipo: string

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  docNumero: string

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  docOrigemTxt: string

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  portariaNumero: string

  @IsDate()
  @ApiProperty()
  portariaData: Date

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  solCmtFile: string

  @IsDate()
  @ApiProperty()
  solCmtData: Date

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  solCmtgeralFile: string

  @IsDate()
  @ApiProperty()
  solCmtgeralData: Date

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  opmMeta4: string

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  relatorioFile: string

  @IsDate()
  @ApiProperty()
  relatorioData: Date

  @IsBoolean()
  @ApiProperty()
  prioridade: boolean

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  motivoAbertura: string

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  motivoOutros: string

  @IsBoolean()
  @ApiProperty()
  prorogacao: boolean

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  @ApiProperty()
  prorogacaoDias: number
}