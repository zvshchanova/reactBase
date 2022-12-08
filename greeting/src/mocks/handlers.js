import { rest } from "msw";

export const handlers = [
  // Handles a GET request
  rest.get("https://www.greetingsapi.com/random", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        type: 'hello',
        greeting: 'Tashi Delek',
        language: 'Tibetan'
      })
    );
  })
];
