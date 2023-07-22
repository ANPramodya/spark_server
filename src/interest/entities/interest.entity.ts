import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { User } from 'src/user/entities/user.entity';

@ObjectType()
export class Interest {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  //Relationships

  @Field(() => User)
  user: User;

  //UserId field (foreign key)
  userId: string;
}
