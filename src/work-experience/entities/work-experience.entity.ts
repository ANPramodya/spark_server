import { ObjectType, Field, ID } from '@nestjs/graphql';
import { User } from 'src/user/entities/user.entity';

@ObjectType()
export class WorkExperience {
  @Field(() => ID)
  id: string;

  @Field()
  company: string;

  @Field()
  position: string;

  @Field()
  startDate: Date;

  @Field({ nullable: true })
  endDate?: Date;

  //Relationship

  @Field(() => User)
  user: User;

  //UserId field (foreign key)
  userId: string;
}
