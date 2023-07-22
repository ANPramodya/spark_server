import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Post } from 'src/post/entities/post.entity';
import { User } from 'src/user/entities/user.entity';

@ObjectType()
export class UserGroup {
  @Field(() => ID)
  id: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  @Field()
  name: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  iconUrl?: string;

  //Relationships

  //User Relationship
  @Field(() => [User])
  users: User[]; //the creator will be added in the creation process

  //Post Relationship
  @Field(() => [Post], { defaultValue: [] })
  posts: Post[];
}
