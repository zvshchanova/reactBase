import { rest } from "msw";

export const handlers = [
    rest.get("https://www.greetingsapi.com/random", (req, res, ctx) => {
       return res(ctx.json({type: 'hello'}))
        return res(ctx.status(404));
      })
]