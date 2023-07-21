import { IsOptional, IsString, IsUrl } from 'class-validator';
import { CreateSocialLinkInput } from './create-social-link.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateSocialLinkInput extends PartialType(CreateSocialLinkInput) {
  @Field(() => ID)
  id: string;

  @Field()
  @IsOptional()
  @IsString()
  type?: string;

  @Field()
  @IsOptional()
  @IsUrl()
  url?: string;
}
