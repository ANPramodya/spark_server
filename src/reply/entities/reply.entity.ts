import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { IsString } from 'class-validator';
import { Comment } from 'src/comment/entities/comment.entity';
import { User } from 'src/user/entities/user.entity';

@ObjectType()
export class Reply {
  @Field(() => ID)
  id: string;

  @Field(() => Date)
  createdAt: Date;

  @Field()
  text: string;

  //Relationships

  //User Relationship
  @Field(() => User)
  author: User;

  //authorId field (foreign key)
  authorId: string;

  @Field(() => Comment)
  comment: Comment;

  //commentId field (foreign key)
  commentId: string;
}
