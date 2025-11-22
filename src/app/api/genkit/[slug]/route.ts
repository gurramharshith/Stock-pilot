'use server';

import {ai} from '@/ai/genkit';
import {createApiHandler} from '@genkit-ai/next';

export const {GET, POST} = createApiHandler({
  ai,
});
