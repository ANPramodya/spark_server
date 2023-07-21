import { Test, TestingModule } from '@nestjs/testing';
import { WorkExperienceResolver } from './work-experience.resolver';
import { WorkExperienceService } from './work-experience.service';

describe('WorkExperienceResolver', () => {
  let resolver: WorkExperienceResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorkExperienceResolver, WorkExperienceService],
    }).compile();

    resolver = module.get<WorkExperienceResolver>(WorkExperienceResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
