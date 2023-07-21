import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateSocialLinkInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
