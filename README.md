# React Example

This is a simple react app that showcases how we can use react in our project! This is a very, **VERY** simple example of using React State to control if a table is taken or not. Vite was used to create this example. [Vite](https://vitejs.dev/) is one of the potential React centric frameworks we might use, the other being [Next.js](https://nextjs.org/). Vite is minimalistic and nice for small examples. Next is a React Framework built FOR designing webapps with modular templating to have pre-configured tooling (NextAuth.JS, Tailwind, Typescript, Database ORM options (primsa or drizzle) and easy hosting using [Vercel](https://vercel.com/)!)

Vite created a majority of the files, dont feel overwhelmed! The only code that I added was in the `App.css` and `App.tsx`! Using a template framework takes all the pain of manually setup (installing React, Typescript/Javascript, dependcies, setting up package.json) out of the equation!

## How to use

- 1. Clone the repo
- 2. Using your operating system terminal or VSCode terminal run the following commands after cloning locally:
  - `npm install` to install the dependencies
  - `npm run dev` to start the localhost
- 3. This will download the node dependencies and create a local version of app and show the url.
- 4. Click the URL and you should see a webpage open with a button, that upon clicking, will change the state of the table to "taken" or "open" !

## Practice makes perfect

I **HIGHLY** recommend whoever will be working on the Front End UI to do the [React: Tic Tac Toe](https://react.dev/learn/tutorial-tic-tac-toe) tutorial. After completing it, try to implement the following features:

- Pass in Table properties( aka parameters) such as - name on reservation, table number
- Move the table code into its own component, and pass it to App.tsx
- Build a Floor component, comprised of Tables.

ALL of this is possible, just by doing a quick (will take an hour TOPS) tutorial and understanding the basics. I hope this is helpful and as always, feel free to reach out !

Cheers!

Anthony
