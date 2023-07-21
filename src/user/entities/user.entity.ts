import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field()
  id: String;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field()
  username: String;

  @Field()
  email: String;

  @Field()
  uniEmail: String;

  @Field()
  firstName: String;

  @Field()
  lastName: String;

  @Field()
  address: String;

  @Field()
  contactNumber: String;

  @Field()
  degreeProgram: String;

  @Field()
  schoolLastAttended: String;
}
