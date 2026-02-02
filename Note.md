## First Step to create project

npm create vite@latest

> npx
> create-vite

│
◇ Project name:
│ ./
│
◇ Package name:
│ ecommerce
│
◇ Select a framework:
│ React
│
◇ Select a variant:
│ TypeScript
│
◇ Use rolldown-vite (Experimental)?:
│ No
│
◇ Install with npm and start now?
│ Yes
│

## To start or run project

`npm run dev`

## To install Tailwind

`npm install tailwindcss @tailwindcss/vite`

# vite.config.ts

import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
plugins: [
tailwindcss(),
],
})

# import tailwind in css

`@import "tailwindcss";`

## To start Redux toolkit

Install Redux Toolkit and React-Redux
`npm install @reduxjs/toolkit react-redux`

# Create a Redux Store

Create a folder named src/app/store
--- store is made from slices---
`src/app/store/authSlice.ts`
reducers means function or methods // Also helping hand

### Connecting React to Redux toolkit, Provider

# Routing

To use routing in project, need or import BrowserRoute, Routes, and Route. First installed
`npm install react-router-dom`
<BrowserRouter>
<Routes>
<Route path="/" element={<h1>Hellow World</h1>} />
</Routes>
</BrowserRouter>

# Provider is used from React-redux not toolkit

import { Provider } from "react-redux";
<Provider store={store}>
<BrowserRouter>
<Routes>
<Route path="/" element={<h1>Home Page </h1>} />
</Routes>
</BrowserRouter>
</Provider>

```Aba provider bhitra ko children or route harule store ko sabai kura use garna pauxa
``
```
