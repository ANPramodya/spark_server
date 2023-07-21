import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { User } from 'src/user/entities/user.entity';

@ObjectType()
export class Skill {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  //Relationship

  @Field(() => User)
  user: User;

  //UserId field (foriegn key)
  @Field()
  userId: string;
}
