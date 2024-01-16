import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthenticationModule } from '@moodring/authentication';
// import { MoodDetectionModule } from '@moodring/mood-detection';

@Module({
  imports: [
    // MoodDetectionModule,
    AuthenticationModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
