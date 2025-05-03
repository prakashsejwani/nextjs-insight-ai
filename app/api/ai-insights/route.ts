// 2. /app/api/ai-insights/route.ts – handles AI summarization
import { OpenAI } from "openai";

export async function POST(req: Request) {
  const { query } = await req.json();
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  const response = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      { role: "system", content: "You are an analytics assistant." },
      { role: "user", content: query },
    ],
  });
  return Response.json({ result: response.choices[0].message.content });
}
