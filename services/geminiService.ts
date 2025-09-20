
import { GoogleGenAI, Type } from "@google/genai";
import type { Trend } from '../types';

if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable is not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const responseSchema = {
  type: Type.ARRAY,
  items: {
    type: Type.OBJECT,
    properties: {
      title: {
        type: Type.STRING,
        description: 'The title of the song or reel trend.',
      },
      artist: {
        type: Type.STRING,
        description: 'The artist of the song, if applicable. Can be empty for reel trends.',
      },
      description: {
        type: Type.STRING,
        description: 'A brief, engaging description of the trend.',
      },
      platform: {
        type: Type.STRING,
        description: 'The primary social media platform where this is trending (e.g., Instagram, TikTok).',
      },
      type: {
        type: Type.STRING,
        description: "The type of trend, either 'song' or 'reel'.",
        enum: ['song', 'reel'],
      },
    },
    required: ['title', 'description', 'platform', 'type'],
  },
};

export const getTrendingContent = async (query: string): Promise<Trend[]> => {
  const userPrompt = `
    Based on current social media data, find the top trending content related to this query: "${query}".
    Focus on platforms like Instagram Reels, TikTok, and YouTube Shorts.
    For each trend, provide the song title (if it's a song), the artist, a brief description of the trend, the main platform, and classify it as a 'song' or a 'reel' trend.
    Return a list of about 6-9 top trends.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: userPrompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: responseSchema,
      },
    });

    const responseText = response.text.trim();
    if (!responseText) {
      console.warn("Gemini API returned an empty response text.");
      return [];
    }
    
    const parsedResponse = JSON.parse(responseText);
    
    if (Array.isArray(parsedResponse)) {
      return parsedResponse as Trend[];
    } else {
      console.error("Parsed response is not an array:", parsedResponse);
      return [];
    }

  } catch (error) {
    console.error("Error fetching trending content from Gemini API:", error);
    throw new Error("Failed to fetch trends from the Gemini API.");
  }
};
