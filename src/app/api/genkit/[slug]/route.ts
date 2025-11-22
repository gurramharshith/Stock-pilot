import { genkit } from '@/ai/genkit';
import { defineNextJsHandler } from '@genkit-ai/next';

export const { GET, POST } = defineNextJsHandler(genkit);
