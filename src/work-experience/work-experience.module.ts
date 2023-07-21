import { Module } from '@nestjs/common';
import { WorkExperienceService } from './work-experience.service';
import { WorkExperienceResolver } from './work-experience.resolver';

@Module({
  providers: [WorkExperienceResolver, WorkExperienceService]
})
export class WorkExperienceModule {}
