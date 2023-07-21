import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { PostModule } from './post/post.module';
import { SocialLinkModule } from './social-link/social-link.module';
import { WorkExperienceModule } from './work-experience/work-experience.module';
import { SkillModule } from './skill/skill.module';
import { ProjectModule } from './project/project.module';
import { InterestModule } from './interest/interest.module';
import { AchievementModule } from './achievement/achievement.module';
import { SportModule } from './sport/sport.module';
import { CommentModule } from './comment/comment.module';
import { UserGroupModule } from './user-group/user-group.module';
import { ReplyModule } from './reply/reply.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),

    PrismaModule,
    UserModule,
    PostModule,
    SocialLinkModule,
    WorkExperienceModule,
    SkillModule,
    ProjectModule,
    InterestModule,
    AchievementModule,
    SportModule,
    CommentModule,
    UserGroupModule,
    ReplyModule,
  ],

  controllers: [],
  providers: [],
})
export class AppModule {}
