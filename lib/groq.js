const GROQ_URL = "https://api.groq.com/openai/v1/chat/completions";
const DEFAULT_MODEL = "llama-3.1-8b-instant";

export async function askGroqJson({ system, user, fallback, temperature = 0.3 }) {
  const apiKey = process.env.GROQ_API_KEY;

  if (!apiKey) {
    return {
      data: fallback,
      source: "fallback",
      warning: "Missing GROQ_API_KEY. Add it to .env.local to enable AI responses.",
    };
  }

  try {
    const response = await fetch(GROQ_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: process.env.GROQ_MODEL || DEFAULT_MODEL,
        temperature,
        response_format: { type: "json_object" },
        messages: [
          { role: "system", content: system },
          { role: "user", content: user },
        ],
      }),
    });

    if (!response.ok) {
      return {
        data: fallback,
        source: "fallback",
        warning: `Groq request failed with status ${response.status}.`,
      };
    }

    const payload = await response.json();
    const content = payload?.choices?.[0]?.message?.content;
    return { data: JSON.parse(content), source: "groq" };
  } catch (error) {
    return {
      data: fallback,
      source: "fallback",
      warning: "AI response could not be generated. Showing local fallback.",
    };
  }
}
