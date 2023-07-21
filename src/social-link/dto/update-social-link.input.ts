import { CreateSocialLinkInput } from './create-social-link.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSocialLinkInput extends PartialType(CreateSocialLinkInput) {
  @Field(() => Int)
  id: number;
}
