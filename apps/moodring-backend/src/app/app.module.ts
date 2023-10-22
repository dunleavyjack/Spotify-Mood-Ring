import { Module } from '@nestjs/common';
import { MoodModule } from './mood/mood.module';

@Module({
  imports: [MoodModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
