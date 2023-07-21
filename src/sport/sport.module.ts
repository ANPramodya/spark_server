import { Module } from '@nestjs/common';
import { SportService } from './sport.service';
import { SportResolver } from './sport.resolver';

@Module({
  providers: [SportResolver, SportService]
})
export class SportModule {}
