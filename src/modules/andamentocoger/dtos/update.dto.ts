import { ApiProperty } from '@nestjs/swagger';
import {
  IsOptional,
  IsString,
} from 'class-validator';

export class UpdateAndamentocogerDto {
  @IsOptional()
  @IsString()
  @ApiProperty()
  Andamentocogercoger?: string
  
  @IsOptional()
  @IsString()
  @ApiProperty()
  procedimento?: string
}