import { Test, TestingModule } from '@nestjs/testing';
import { SocialLinkService } from './social-link.service';

describe('SocialLinkService', () => {
  let service: SocialLinkService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SocialLinkService],
    }).compile();

    service = module.get<SocialLinkService>(SocialLinkService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
