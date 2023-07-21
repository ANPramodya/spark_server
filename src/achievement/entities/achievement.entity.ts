import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Achievement {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
