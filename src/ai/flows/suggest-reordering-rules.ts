'use server';

/**
 * @fileOverview This file defines a Genkit flow to suggest optimal reordering rules for products.
 *
 * It includes:
 * - `suggestReorderingRules`: The main function to trigger the flow.
 * - `SuggestReorderingRulesInput`: The input type for the function.
 * - `SuggestReorderingRulesOutput`: The output type for the function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestReorderingRulesInputSchema = z.object({
  productName: z.string().describe('The name of the product.'),
  historicalData: z
    .string()
    .describe(
      'Historical sales data, including sales volume, seasonal fluctuations, and trends.'
    ),
  currentStockLevel: z
    .number()
    .describe('The current stock level of the product.'),
  leadTime: z.number().describe('The lead time (in days) required to replenish the stock.'),
  serviceLevel: z
    .number()
    .min(0)
    .max(1)
    .default(0.95)
    .describe(
      'The desired service level (probability of not stocking out). A higher service level requires holding more inventory.'
    ),
});
export type SuggestReorderingRulesInput = z.infer<
  typeof SuggestReorderingRulesInputSchema
>;

const SuggestReorderingRulesOutputSchema = z.object({
  reorderPoint: z
    .number()
    .describe(
      'The reorder point (in units) at which a new order should be placed.'
    ),
  orderQuantity: z
    .number()
    .describe('The recommended order quantity (in units) to replenish stock.'),
  safetyStock: z
    .number()
    .describe(
      'The amount of safety stock (in units) to hold to buffer against demand variability.'
    ),
  recommendations: z
    .string()
    .describe(
      'Additional qualitative recommendations for reordering, considering factors like upcoming promotions or changes in demand.'
    ),
});
export type SuggestReorderingRulesOutput = z.infer<
  typeof SuggestReorderingRulesOutputSchema
>;

export async function suggestReorderingRules(
  input: SuggestReorderingRulesInput
): Promise<SuggestReorderingRulesOutput> {
  return suggestReorderingRulesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestReorderingRulesPrompt',
  input: {schema: SuggestReorderingRulesInputSchema},
  output: {schema: SuggestReorderingRulesOutputSchema},
  prompt: `You are an expert inventory manager. Analyze the provided data and suggest optimal reordering rules for the specified product.

Product Name: {{{productName}}}
Historical Data: {{{historicalData}}}
Current Stock Level: {{{currentStockLevel}}}
Lead Time (days): {{{leadTime}}}
Service Level: {{{serviceLevel}}}

Based on this information, calculate the reorder point, order quantity, and safety stock. Also, provide additional recommendations.

Reorder Point: {{$ReorderPoint}}
Order Quantity: {{$OrderQuantity}}
Safety Stock: {{$SafetyStock}}
Recommendations: {{$Recommendations}}`,
});

const suggestReorderingRulesFlow = ai.defineFlow(
  {
    name: 'suggestReorderingRulesFlow',
    inputSchema: SuggestReorderingRulesInputSchema,
    outputSchema: SuggestReorderingRulesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input, {
      config: {
        safetySettings: [
          {category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_ONLY_HIGH'},
          {
            category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
            threshold: 'BLOCK_NONE',
          },
          {
            category: 'HARM_CATEGORY_HARASSMENT',
            threshold: 'BLOCK_MEDIUM_AND_ABOVE',
          },
          {
            category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
            threshold: 'BLOCK_LOW_AND_ABOVE',
          },
        ],
      },
    });
    return output!;
  }
);
