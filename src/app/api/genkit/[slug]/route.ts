'use server';

import {ai} from '@/ai/genkit';
import {createApiHandler} from '@genkit-ai/next/server';

export const {GET, POST} = createApiHandler({
  ai,
});
