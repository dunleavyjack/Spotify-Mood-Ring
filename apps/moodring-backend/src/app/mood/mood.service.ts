import { createMoodPrompt, openAI } from '@moodring/shared/llm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MoodService {
  async predictMood(): Promise<string> {
    const prompt = createMoodPrompt();
    const openAIResponse = openAI.predict(prompt);

    return openAIResponse;
  }
}
