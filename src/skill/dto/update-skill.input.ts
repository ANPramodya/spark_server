import { IsNotEmpty, IsString } from 'class-validator';
import { CreateSkillInput } from './create-skill.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateSkillInput extends PartialType(CreateSkillInput) {
  @Field()
  @IsNotEmpty()
  id: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  name?: string;
}
