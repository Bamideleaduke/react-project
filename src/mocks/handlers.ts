import { rest } from "msw"

export const handlers = [
  rest.get("https://jsonplaceholder.typicode.come/users", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          name: "Bruce Wayne",
        },
        {
          name: "Tony Walt",
        },
        {
          name: "Hakeem Lione",
        },
      ]),
    )
  }),
]
