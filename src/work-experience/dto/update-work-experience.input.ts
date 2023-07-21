import { IsDate, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { CreateWorkExperienceInput } from './create-work-experience.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateWorkExperienceInput extends PartialType(
  CreateWorkExperienceInput,
) {
  @Field(() => ID)
  @IsNotEmpty()
  id: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  company: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  position?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsDate()
  startDate?: Date;

  @Field({ nullable: true })
  @IsOptional()
  @IsDate()
  endDate?: Date;
}
