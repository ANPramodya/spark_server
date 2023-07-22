import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { CreateAchievementInput } from './create-achievement.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateAchievementInput extends PartialType(
  CreateAchievementInput,
) {
  @Field()
  @IsNotEmpty()
  @IsString()
  id: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  title?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  description?: string;
}
