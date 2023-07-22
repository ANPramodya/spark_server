import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { User } from 'src/user/entities/user.entity';

@ObjectType()
export class Achievement {
  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  @Field({ nullable: true })
  descrription?: string;

  //Relationships

  @Field(() => User)
  user: User;

  //UserId field (foreign key)
  userId: string;
}
