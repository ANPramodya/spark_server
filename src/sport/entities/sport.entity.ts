import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { User } from 'src/user/entities/user.entity';

@ObjectType()
export class Sport {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  //Relationships

  @Field(() => User)
  user: User;

  //userId field (foriegn key)
  userId: string;
}
