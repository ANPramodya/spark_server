import { Module } from '@nestjs/common';
import { SocialLinkService } from './social-link.service';
import { SocialLinkResolver } from './social-link.resolver';

@Module({
  providers: [SocialLinkResolver, SocialLinkService]
})
export class SocialLinkModule {}
