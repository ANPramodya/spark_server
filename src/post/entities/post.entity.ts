import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Comment } from 'src/comment/entities/comment.entity';
import { UserGroup } from 'src/user-group/entities/user-group.entity';
import { User } from 'src/user/entities/user.entity';

@ObjectType()
export class Post {
  @Field(() => ID)
  id: string;

  @Field(() => Date)
  createdAt: Date;

  @Field()
  title: string;

  @Field({ nullable: true })
  content?: string;

  @Field({ nullable: true })
  imageUrl?: string;

  //Relationships

  //Author Relationship
  @Field(() => User, { nullable: true })
  author?: User;

  //authorId field (foriegn key)
  authorId?: string;

  //userGroup Relatioship
  @Field(() => UserGroup, { nullable: true })
  group?: UserGroup;

  //groupID field (foriegn key)
  groupId?: string;

  //Comments Relationship
  @Field(() => [Comment], { defaultValue: [] })
  comments: Comment[];
}
