import { InputType, Int, Field } from '@nestjs/graphql';
import { IsDate, IsNotEmpty, IsOptional, IsString } from 'class-validator';

@InputType()
export class CreateWorkExperienceInput {
  @Field()
  @IsNotEmpty()
  @IsString()
  company: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  position: string;

  @Field()
  @IsNotEmpty()
  @IsDate()
  startDate: Date;

  @Field({ nullable: true })
  @IsOptional()
  @IsDate()
  endDate?: Date;

  @Field()
  @IsNotEmpty()
  userID: string;
}
