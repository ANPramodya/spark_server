import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateInterestInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
