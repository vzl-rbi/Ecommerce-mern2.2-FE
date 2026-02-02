import { createSlice, type PayloadAction} from "@reduxjs/toolkit";
// Union Type is cleaner than Enum
type AuthStatus = "idle" | "loading" | "success" | "fail";

interface User {
  username: string;
  email: string;
  password: string;
  token: string
}
interface AuthState {
  user: User | null,// Use null to explicitly show "no user"
  status: AuthStatus, //api call garda success or fail yesbat dekhaune
}
const initialState: AuthState = {
  user: null,
  status: "idle"//Better to start with 'idle' before the API is called
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // state type is inferred automatically from initialState so //state: AuthState garnu pardain
    setUser(state, action:PayloadAction<User | null>) {
      state.user = action.payload
    },
    setStatus(state, action:PayloadAction<AuthStatus>) {
      state.status = action.payload
    }
  }
})

export const {setUser, setStatus} = authSlice.actions
export default authSlice.reducer

/* 
const initialState: AuthState = {
  user: {} as User
}
  // this code is not good practice beacuse
  The Problem with {} as User: Casting an empty object as a full User is risky. TypeScript will think state.user.token exists at runtime, but it will actually be undefined, which can lead to "Cannot read property of undefined" crashes.

Avoiding "The Billion Dollar Mistake": Your original code uses {} as User. This tells TypeScript to "trust you" that the object has a username, email, etc., even though it’s actually empty. If you later try to access user.token.length on that empty object, your app will crash with a Runtime Error because the token is actually undefined.
*/

