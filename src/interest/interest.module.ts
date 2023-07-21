import { Module } from '@nestjs/common';
import { InterestService } from './interest.service';
import { InterestResolver } from './interest.resolver';

@Module({
  providers: [InterestResolver, InterestService]
})
export class InterestModule {}
