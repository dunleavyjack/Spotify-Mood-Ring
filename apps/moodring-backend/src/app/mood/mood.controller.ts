import { Controller, Get, Query } from '@nestjs/common';

import { MoodService } from './mood.service';

@Controller()
export class MoodController {
  constructor(private readonly moodService: MoodService) {}

  @Get()
  public getMoodPrediction(@Query() params) {
    const { first, second } = params;
    console.log(first, second);
    return this.moodService.predictMood();
  }
}
