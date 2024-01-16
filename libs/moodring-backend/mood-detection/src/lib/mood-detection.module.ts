import { Module } from '@nestjs/common';
import { MoodController } from './mood-detection.controller';
import { MoodService } from './mood-detection.service';

@Module({
  controllers: [MoodController],
  providers: [MoodService],
  exports: [MoodService],
})
export class MoodDetectionModule {}
