import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class WorkExperience {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
