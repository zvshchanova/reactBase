import { setupServer } from "msw/node";
import { rest } from "msw";
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import {FetchData} from './FetchData';

const server = setupServer(
    rest.get("https://www.greetingsapi.com/random", (req, res, ctx) => {
    //   return res(ctx.json({ data: "return this string" }));
    // return res(ctx.json({type: 'hello'}))
      return res(ctx.status(200));
    })
  );

  describe("<FetchData />", () => {
    beforeAll(() => server.listen());
    afterAll(() => server.close());

    test('renders FetchData 200', async () => {
        render(<FetchData />);
        expect(screen.getByText(/Fetch info/i)).toBeInTheDocument();

        await screen.findByText(/hello/);
            expect(screen.getByText(/hello/)).toBeInTheDocument();
});

//     test('renders FetchData 404', async () => {
//         render(<FetchData />);
//         expect(screen.getByText(/Fetch info/i)).toBeInTheDocument();
  
//         await screen.findByText(/Something went wrong/);
//         expect(screen.getByText(/Something went wrong/)).toBeInTheDocument();
//   });


});