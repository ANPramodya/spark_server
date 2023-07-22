import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';
import { CreateUserInput } from './create-user.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field()
  @IsNotEmpty()
  id: string;

  @Field({ nullable: true })
  @IsOptional()
  username?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsEmail()
  email?: string;

  @Field({ nullable: true })
  @IsEmail()
  uniEmail?: string;

  @Field({ nullable: true })
  @IsOptional()
  firstName?: string;

  @Field({ nullable: true })
  @IsOptional()
  lastName?: string;

  @Field({ nullable: true })
  @IsOptional()
  address?: string;

  @Field({ nullable: true })
  @IsOptional()
  contactNumber?: string;

  @Field({ nullable: true })
  @IsOptional()
  degreeProgram?: string;

  @Field({ nullable: true })
  @IsOptional()
  schoolLastAttended?: string;

  @Field({ nullable: true })
  @IsOptional()
  onine?: boolean;
}
