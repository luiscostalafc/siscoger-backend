import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsOptional, IsString
} from 'class-validator';

export class UpdateUploadDto {
  @IsOptional()
  @IsString()
  @ApiProperty()
  name: string

  @IsString()
  @ApiProperty()
  campo: string

  @IsOptional()
  @IsString()
  @ApiProperty()
  mime: string

  @IsOptional()
  @IsString()
  @ApiProperty()
  path: string

  @IsOptional()
  @IsString()
  @ApiProperty()
  size: string

  @IsString()
  @ApiProperty()
  sjd_ref: string

  @IsString()
  @ApiProperty()
  sjd_ref_ano: string

  @IsOptional()
  @IsString()
  @ApiProperty()
  rg: string

  @IsString()
  @ApiProperty()
  id_proc: string

  @IsString()
  @ApiProperty()
  proc: string

  @IsOptional()
  @IsString()
  @ApiProperty()
  obs: string

  @IsOptional()
  @IsBoolean()
  @ApiProperty()
  is_old_file: boolean
}