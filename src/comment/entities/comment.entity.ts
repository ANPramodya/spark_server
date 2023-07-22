import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Post } from 'src/post/entities/post.entity';
import { Reply } from 'src/reply/entities/reply.entity';
import { User } from 'src/user/entities/user.entity';

@ObjectType()
export class Comment {
  @Field(() => ID)
  id: string;

  @Field(() => Date)
  createdAt: Date;

  @Field()
  text: string;

  //Relationships

  //Author Relatiosnship
  @Field(() => User)
  author: User;

  //AuthorId field (foriegn key)
  authorId: string;

  //Post Relationship
  @Field(() => Post)
  post: Post;

  //postId field (foriegn Key)
  postId: string;

  //Relationship Reply
  @Field(() => [Reply], { defaultValue: [] })
  replies: Reply[];
}
