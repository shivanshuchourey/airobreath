
'use server';
/**
 * @fileOverview Generates a creative title for a child's moment video.
 *
 * - generateMomentTitle - A function that handles the title generation process.
 * - GenerateMomentTitleInput - The input type for the generateMomentTitle function.
 * - GenerateMomentTitleOutput - The return type for the generateMomentTitle function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateMomentTitleInputSchema = z.object({
  videoDataUri: z
    .string()
    .describe(
      "A short video of a child's moment, as a data URI. It must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type GenerateMomentTitleInput = z.infer<typeof GenerateMomentTitleInputSchema>;

const GenerateMomentTitleOutputSchema = z.object({
  title: z.string().describe('A short, fun, and creative title for the video moment. (e.g., "A Happy Dance!", "Pure Joy!", "Little Explorer"). Max 5 words.'),
});
export type GenerateMomentTitleOutput = z.infer<typeof GenerateMomentTitleOutputSchema>;

export async function generateMomentTitle(input: GenerateMomentTitleInput): Promise<GenerateMomentTitleOutput> {
  return generateMomentTitleFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateMomentTitlePrompt',
  input: {schema: GenerateMomentTitleInputSchema},
  output: {schema: GenerateMomentTitleOutputSchema},
  prompt: `You are an AI assistant that creates fun and heartwarming titles for short video clips of children.

Watch this video and generate a short, fun, and creative title for the moment. The title should be a maximum of 5 words.

Examples:
- "A Happy Dance!"
- "Pure Joy!"
- "Little Explorer"
- "Concentration Face"
- "Silly Smiles"

Video: {{media url=videoDataUri}}`,
});

const generateMomentTitleFlow = ai.defineFlow(
  {
    name: 'generateMomentTitleFlow',
    inputSchema: GenerateMomentTitleInputSchema,
    outputSchema: GenerateMomentTitleOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
