export async function POST(req) {
  const { command, text } = await req.json();

  const prompt = `
You are editing a document.

TEXT:
${text}

COMMAND:
${command}

RULES:
- Only edit the provided text
- Keep meaning
- Use ASCII characters only
- Do not use smart quotes
- Do not use curly apostrophes
- Do not use em dashes
- Do not use special symbols
- Return revised text only
`;

  const res = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "gpt-5",
      input: prompt
    })
  });

  const data = await res.json();

  const result =
    data.output?.[0]?.content?.[0]?.text || "No response returned.";

  return Response.json({ result });
}
