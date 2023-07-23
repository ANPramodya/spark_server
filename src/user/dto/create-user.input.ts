import { InputType, Int, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty } from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field()
  @IsNotEmpty()
  username: string;

  @Field()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Field()
  @IsNotEmpty()
  uniEmail: string;

  @Field()
  @IsNotEmpty()
  firstName: string;

  @Field()
  @IsNotEmpty()
  lastName: string;

  @Field({ nullable: true })
  address?: string;

  @Field({ nullable: true })
  contactNumber?: string;

  @Field({ nullable: true })
  degreeProgram?: string;

  @Field({ nullable: true })
  schoolLastAttended?: string;

  @Field()
  online: boolean;
}
