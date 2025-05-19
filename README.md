# Feathery & Vite

Example of rendering a Feathery form in a React 19 Vite project

Most of the scaffolding came from initializing a React Typescript project in Vite.
Then I added `@feathery/react` as a dependency and rendered a form in `main.tsx`
I added a global definition to vite.config.ts to get Feathery to work with Vite:
```define: {
    // By default, Vite doesn't include shims for NodeJS/
    global: "window",
},```
