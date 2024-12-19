import { createStore } from 'zustand/vanilla'
import { create } from 'zustand';

export type UserState = {
    username: string;
    email: string;
    password: string;
    isActive: boolean;
    isAdmin: boolean;
    gender?: string;
    image?: string;
  }
  
  export type UserActions = {
    registerUser: (user: Partial<UserState>) => void;
  loginUser: (email: string, password: string) => void;
  logoutUser: () => void;
  }

  export type AuthStore = UserState & UserActions

  export const defaultInitState: UserState = {
    username: "",
    email: "",
    password: "",
    isActive: true,
    isAdmin: false,
    gender: "",
    image: "",
  }
  export const createAuthStore = (initState: UserState = defaultInitState) => {
    return createStore<AuthStore>()((set) => ({
      ...initState,
      registerUser: (user) =>
        set((state) => ({
          ...state,
          ...user,
        })),
      loginUser: (email, password) =>
        set((state) => {
          
          if (email === 'test@test.com' && password === 'password') {
            return {
              ...state,
              username: 'Test User',
              email,
              isAdmin: true,
              isActive: true,
            };
          }
          return state;
        }),
      logoutUser: () =>
        set(() => ({
          ...defaultInitState,
        })),
    }));
  };
