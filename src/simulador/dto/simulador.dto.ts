import { IsOptional, IsInt, IsString, IsObject } from 'class-validator';

export class FindCoursesDto {
  @IsOptional()
  @IsInt()
  limit?: number;

  @IsOptional()
  @IsInt()
  offset?: number;

  @IsOptional()
  @IsObject()
  filter?: any;

  @IsOptional()
  @IsObject()
  order?: any;
}
