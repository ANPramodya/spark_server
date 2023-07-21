import { Test, TestingModule } from '@nestjs/testing';
import { SocialLinkResolver } from './social-link.resolver';
import { SocialLinkService } from './social-link.service';

describe('SocialLinkResolver', () => {
  let resolver: SocialLinkResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SocialLinkResolver, SocialLinkService],
    }).compile();

    resolver = module.get<SocialLinkResolver>(SocialLinkResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
