import createStore from "@propero/easy-store";

export interface User {
  username?: string;
  email: string;
  password: string;
}

export const userRegister = createStore({} as User);
