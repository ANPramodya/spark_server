import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { User } from 'src/user/entities/user.entity';

@ObjectType()
export class SocialLink {
  @Field(() => ID)
  id: string;

  @Field()
  type: string;

  @Field()
  url: string;

  //Relationship

  @Field(() => User)
  user: User;

  //UserId field (foreign key)
  userId: string;
}
