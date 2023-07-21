import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Sport {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
