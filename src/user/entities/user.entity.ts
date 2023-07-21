import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => ID)
  id: string;

  @Field(() => Date)
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field()
  username: string;

  @Field()
  email: string;

  @Field()
  uniEmail: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field({ nullable: true })
  address?: string;

  @Field({ nullable: true })
  contactNumber?: String;

  @Field({ nullable: true })
  degreeProgram?: String;

  @Field({ nullable: true })
  schoolLastAttended?: String;

  @Field()
  online: boolean;

  //Relationships
}
