import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { CreateSportInput } from './create-sport.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSportInput extends PartialType(CreateSportInput) {
  @Field()
  @IsNotEmpty()
  id: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  name?: string;
}
