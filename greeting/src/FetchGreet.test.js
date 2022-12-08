import { FetchGreet } from "./FetchGreet";
import { render, screen } from "@testing-library/react";
import { server } from "./mocks/server";
import { rest } from "msw";

test("renders learn react link", async () => {
  render(<FetchGreet />);
  await screen.findByText(/Tibetan/i);
  expect(screen.getByText(/Tibetan/i)).toBeInTheDocument();
});

test("Not found ", async () => {
  server.use(
    rest.get("https://www.greetingsapi.com/random", (req, res, ctx) => {
      return res(ctx.status(404));
    })
  );
  render(<FetchGreet />);
  await screen.findByText(/Not Found/i);
  expect(screen.getByText(/Not found/i)).toBeInTheDocument();
});

test("Fobidden ", async () => {
  server.use(
    rest.get("https://www.greetingsapi.com/random", (req, res, ctx) => {
      return res(ctx.status(403));
    })
  );
  render(<FetchGreet />);
  await screen.findByText(/Forbiden for you/i);
  expect(screen.getByText(/Forbiden for you/i)).toBeInTheDocument();
});
