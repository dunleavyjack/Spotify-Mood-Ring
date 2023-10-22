import { Module } from '@nestjs/common';
import { MoodController } from './mood.controller';
import { MoodService } from './mood.service';

@Module({
  imports: [],
  controllers: [MoodController],
  providers: [MoodService],
})
export class MoodModule {}
