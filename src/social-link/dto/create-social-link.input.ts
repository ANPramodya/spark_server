import { InputType, Int, Field, ID } from '@nestjs/graphql';
import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

@InputType()
export class CreateSocialLinkInput {
  @Field()
  @IsNotEmpty()
  @IsString()
  type: string;

  @Field()
  @IsNotEmpty()
  @IsUrl()
  url: string;

  @Field()
  @IsNotEmpty()
  userId: string;
}
