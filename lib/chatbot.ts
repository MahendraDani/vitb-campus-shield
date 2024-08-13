import { GoogleGenerativeAI } from "@google/generative-ai";

export const chat = async ({ query }: { query: string }) => {
  const genAI = new GoogleGenerativeAI(
    process.env.GOOGLE_GENERATIVE_AI_API_KEY!
  );
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction:
      "You are a chatbot for Indian university website which is used to file reports related to reagging. Please provide answers within 200 words. Your task is to help the students with any ragging related activity and guide them.",
  });
  console.log("Summarizing...");
  const result = await model.generateContent(query);
  const response = await result.response;
  const text = response.text();
  return text;
};
