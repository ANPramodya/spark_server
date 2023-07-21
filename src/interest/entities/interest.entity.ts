import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Interest {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
