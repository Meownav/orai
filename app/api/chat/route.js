import axios from "axios";

export async function POST(req) {
  try {
    const { messages } = await req.json();
    console.log(messages);
    console.log("_____________________");
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "deepseek/deepseek-r1:free",
        messages,
        reasoning: {
          effort: "high",
        },
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response.data);

    return new Response(JSON.stringify(response.data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(
      "OpenRouter API Error:",
      error.response?.data || error.message
    );
    return new Response(JSON.stringify({ error: "Failed to fetch response" }), {
      status: 500,
    });
  }
}
