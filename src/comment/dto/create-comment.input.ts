import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateCommentInput {
  @Field()
  @IsNotEmpty()
  @IsString()
  text: string;

  @Field()
  @IsNotEmpty()
  authorId: string;

  @Field()
  @IsNotEmpty()
  postId: string;
}
