import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserGroupInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
