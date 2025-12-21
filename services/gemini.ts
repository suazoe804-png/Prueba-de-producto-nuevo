
import { GoogleGenAI } from "@google/genai";

export const generateCreativeBrief = async (prompt: string): Promise<string> => {
  // El API_KEY se inyecta vía vite.config.ts desde el .env
  const apiKey = process.env.API_KEY;
  
  if (!apiKey) {
    return "Error: No se encontró la API Key. Crea un archivo .env con VITE_API_KEY=tu_llave";
  }

  const ai = new GoogleGenAI({ apiKey });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Act as a senior creative director. Generate a professional creative brief summary for the following concept: "${prompt}". 
      Keep it structured with: 
      1. Concept Title
      2. Core Visual Direction
      3. Key Color Palette (hex codes)
      4. Targeted Emotion. 
      Keep the response concise, under 200 words. Format with clean text and no excessive markdown.`,
    });

    return response.text || "Failed to generate a brief. Please try again.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Error generating response. Ensure API key is configured correctly.";
  }
};
