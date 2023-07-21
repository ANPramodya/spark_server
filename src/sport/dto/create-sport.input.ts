import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateSportInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
