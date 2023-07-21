import { Test, TestingModule } from '@nestjs/testing';
import { InterestResolver } from './interest.resolver';
import { InterestService } from './interest.service';

describe('InterestResolver', () => {
  let resolver: InterestResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InterestResolver, InterestService],
    }).compile();

    resolver = module.get<InterestResolver>(InterestResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
