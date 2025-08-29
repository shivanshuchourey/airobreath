'use server';

/**
 * @fileOverview Generates a creative title for a short video moment.
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
      "A short video of a child's moment, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type GenerateMomentTitleInput = z.infer<typeof GenerateMomentTitleInputSchema>;

const GenerateMomentTitleOutputSchema = z.object({
  title: z.string().describe('A short, creative, and fun title for the video moment.'),
});
export type GenerateMomentTitleOutput = z.infer<typeof GenerateMomentTitleOutputSchema>;

export async function generateMomentTitle(input: GenerateMomentTitleInput): Promise<GenerateMomentTitleOutput> {
  return generateMomentTitleFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateMomentTitlePrompt',
  input: {schema: GenerateMomentTitleInputSchema},
  output: {schema: GenerateMomentTitleOutputSchema},
  prompt: `You are an expert at creating short, fun, and engaging titles for video stories about children. Based on the video, generate a title that is 2-5 words long.

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
