import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { CreateUserGroupInput } from './create-user-group.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserGroupInput extends PartialType(CreateUserGroupInput) {
  @Field()
  @IsNotEmpty()
  id: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  name?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  description?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  iconUrl?: string;
}
