import { Controller, Get, Query } from '@nestjs/common';

import { MoodService } from './mood-detection.service';

@Controller()
export class MoodController {
  constructor(private readonly moodService: MoodService) {}

  @Get()
  public getMoodPrediction(@Query() params: { first: string; second: string }) {
    const { first, second } = params;
    console.log(first, second);
    return this.moodService.predictMood();
  }
}
