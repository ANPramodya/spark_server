import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { CreateInterestInput } from './create-interest.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateInterestInput extends PartialType(CreateInterestInput) {
  @Field()
  @IsNotEmpty()
  id: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  name?: string;
}
