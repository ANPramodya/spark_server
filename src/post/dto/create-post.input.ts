import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { UserGroup } from 'src/user-group/entities/user-group.entity';
import { User } from 'src/user/entities/user.entity';

@InputType()
export class CreatePostInput {
  @Field()
  @IsNotEmpty()
  @IsString()
  title: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  content?: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  imageUrl?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  authorId?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  groupId: string;
}
