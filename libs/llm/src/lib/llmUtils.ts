import { OpenAI } from 'langchain/llms/openai';

const { NX_OPEN_AI_KEY } = process.env;

/**
 * Initialization of OpenAI's LLM using the Langchain JS/TS framework.
 *
 * Langchain Docs: @see {@link https://js.langchain.com/docs/get_started/introduction}
 */
export const openAI = new OpenAI({
  openAIApiKey: NX_OPEN_AI_KEY as string,
});

export const createMoodPrompt = () => {
  console.log('test prompt');
};
