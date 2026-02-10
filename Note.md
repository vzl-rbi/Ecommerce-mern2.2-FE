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

/\*
const initialState: AuthState = {
user: {} as User
}
// this code is not good practice beacuse
The Problem with {} as User: Casting an empty object as a full User is risky. TypeScript will think state.user.token exists at runtime, but it will actually be undefined, which can lead to "Cannot read property of undefined" crashes.

Avoiding "The Billion Dollar Mistake": Your original code uses {} as User. This tells TypeScript to "trust you" that the object has a username, email, etc., even though it’s actually empty. If you later try to access user.token.length on that empty object, your app will crash with a Runtime Error because the token is actually undefined.
\*/

## Api call from Redux toolkit instead of components

`npm install axios`
example:
function register(data: RegisterData) {
return async function registerThunk(dispatch: any) {
const response = await axios.post(`http://localhost:4000/api/register`, data)

}

}

## Axios ko lagi http/index.ts

instance banaye aba code repitive lekhna parena
import axios from "axios";
const API = axios.create({
baseURL: 'http://localhost:4000/api/',
headers: {
'Content-Type': 'application/json',
'Accept': 'application/json'
}
})
export default API

# now authSlice code will be like this

function register(data: RegisterData) {
return async function registerThunk(dispatch: any) {
const response = await API.post(`register`, data)
}
}

## Login

// const [email, setEmail] = useState("");
// const [password, setPassword] = useState("");
// const [remember, setRemember] = useState(false);

<div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
  <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-indigo-950/30"></div>

  <div className="relative z-10 w-full max-w-md">
    {/* Logo & Title */}
    <div className="text-center mb-10">
      <h1 className="text-5xl font-extrabold bg-gradient-to-r from-amber-400 via-red-600 to-indigo-700 bg-clip-text text-transparent">
        Murim
      </h1>
      <p className="mt-3 text-gray-400 text-lg">Welcome back, warrior</p>
    </div>

    {/* Form Card */}
    <div className="bg-gray-900/80 backdrop-blur-md border border-gray-800 rounded-2xl shadow-2xl p-8">
      <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-amber-400 transition"
            placeholder="your@email.com"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-amber-400 transition"
            placeholder="••••••••"
            required
          />
        </div>

        <div className="flex items-center justify-between">
          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              className="w-4 h-4 text-amber-400 bg-gray-800 border-gray-700 rounded focus:ring-amber-400"
            />
            <span className="text-sm text-gray-400">Remember me</span>
          </label>
          <a href="#" className="text-sm text-amber-400 hover:underline">
            Forgot password?
          </a>
        </div>

        <button
          type="submit"
          className="w-full bg-red-700 hover:bg-red-600 py-4 rounded-lg font-semibold text-lg transition transform hover:scale-105"
        >
          Sign In
        </button>
      </form>
    </div>

    {/* Switch to Register */}
    <p className="text-center mt-8 text-gray-500 text-sm">
      New to Murim?{" "}
      <a
        href="/register"
        className="text-amber-400 hover:underline font-semibold"
      >
        Create an account
      </a>
    </p>

  </div>
</div>;

## Register

// const [name, setName] = useState("");
// const [email, setEmail] = useState("");
// const [password, setPassword] = useState("");
// const [confirmPassword, setConfirmPassword] = useState("");

<div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
  <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-indigo-950/30"></div>

  <div className="relative z-10 w-full max-w-md">
    {/* Logo & Title */}
    <div className="text-center mb-10">
      <h1 className="text-5xl font-extrabold bg-gradient-to-r from-amber-400 via-red-600 to-indigo-700 bg-clip-text text-transparent">
        Murim
      </h1>
      <p className="mt-3 text-gray-400 text-lg">Join the realm</p>
    </div>

    {/* Form Card */}
    <div className="bg-gray-900/80 backdrop-blur-md border border-gray-800 rounded-2xl shadow-2xl p-8">
      <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Full Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-amber-400 transition"
            placeholder="Sect Leader Chen"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-amber-400 transition"
            placeholder="your@email.com"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-amber-400 transition"
            placeholder="••••••••"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Confirm Password
          </label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-amber-400 transition"
            placeholder="••••••••"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-700 hover:bg-indigo-600 py-4 rounded-lg font-semibold text-lg transition transform hover:scale-105"
        >
          Create Account
        </button>
      </form>
    </div>

    {/* Switch to Login */}
    <p className="text-center mt-8 text-gray-500 text-sm">
      Already have an account?{" "}
      <a href="/login" className="text-amber-400 hover:underline font-semibold">
        Sign in
      </a>
    </p>

  </div>
</div>;

## types to remember all the time

const handleChange = (e:ChangeEvent<HTMLInputElement>) => {

}
const handleSubmit = (e:FormEvent<HTMLInputElement>) => {}

## token stored in local store to know user is logged in completed

## Making Navbar Dynamic

useEffect(() => {
const token = localStorage.getItem("token");
setIsLoggedIn(!!token || !!user?.token);
}, [user?.token]);

### 1️⃣ `localStorage.getItem("token")`

This gives:

- `"abc123..."` → if token exists ✅
- `null` → if token does NOT exist ❌

---

### 2️⃣ What is `!!` ?

`!!` means **convert any value to true/false (boolean)**.
Means:

👉 “Does token exist?”

- Has token → `true`
- No token → `false`

---

### `||` (OR Operator)

`||` means: **if left is false, check right**

Example:

```ts
true  || false → true
false || true  → true
false || false → false
```

### 3️⃣ `user?.token`

```ts
user?.token;
```

This means:

> “If user exists, get token. Otherwise return undefined.”

It prevents crash.

Without `?`:

```ts
user.token; // ❌ crash if user is null
```

With `?.`:

```ts
user?.token; // ✅ safe
```

---
