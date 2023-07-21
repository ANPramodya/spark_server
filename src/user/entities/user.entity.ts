import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Achievement } from 'src/achievement/entities/achievement.entity';
import { Comment } from 'src/comment/entities/comment.entity';
import { Interest } from 'src/interest/entities/interest.entity';
import { Post } from 'src/post/entities/post.entity';
import { Project } from 'src/project/entities/project.entity';
import { Reply } from 'src/reply/entities/reply.entity';
import { Skill } from 'src/skill/entities/skill.entity';
import { SocialLink } from 'src/social-link/entities/social-link.entity';
import { Sport } from 'src/sport/entities/sport.entity';
import { UserGroup } from 'src/user-group/entities/user-group.entity';
import { WorkExperience } from 'src/work-experience/entities/work-experience.entity';

@ObjectType()
export class User {
  @Field(() => ID)
  id: string;

  @Field(() => Date)
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field()
  username: string;

  @Field()
  email: string;

  @Field()
  uniEmail: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field({ nullable: true })
  address?: string;

  @Field({ nullable: true })
  contactNumber?: String;

  @Field({ nullable: true })
  degreeProgram?: String;

  @Field({ nullable: true })
  schoolLastAttended?: String;

  @Field()
  online: boolean;

  //Relationships

  @Field(() => [SocialLink], { nullable: true })
  socialLinks?: SocialLink[];

  @Field(() => [WorkExperience], { nullable: true })
  workExperience?: WorkExperience[];

  @Field(() => [Skill], { nullable: true })
  skills?: Skill[];

  @Field(() => [Project], { nullable: true })
  projects?: Project[];

  @Field(() => [Interest], { nullable: true })
  interests?: Interest[];

  @Field(() => [Achievement], { nullable: true })
  achievements?: Achievement[];

  @Field(() => [Sport], { nullable: true })
  sports?: Sport[];

  @Field(() => [Post], { nullable: true })
  posts?: Post[];

  @Field(() => [Comment], { nullable: true })
  comments?: Comment[];

  @Field(() => [UserGroup], { nullable: true })
  groups?: UserGroup[];

  @Field(() => [Reply], { nullable: true })
  replies?: Reply[];
}
