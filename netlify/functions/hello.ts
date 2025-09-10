import type { Handler } from "@netlify/functions";

export const handler: Handler = async (event, context) => {
  return {
    statusCode: 200,
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      ok: true,
      message: "Hello from Netlify Function!",
      at: new Date().toISOString(),
    }),
  };
};