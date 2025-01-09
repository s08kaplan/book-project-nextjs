import { create } from 'zustand';

export type UserState = {
    username: string;
    email: string;
    isActive: boolean;
    isAdmin: boolean;
    gender?: string;
    image?: string;
  }
  
  export type UserActions = {
  registerUser: (user: Partial<UserState>) =>  Promise<void>;
  loginUser: (email: string, password: string) =>  Promise<void>;
  logoutUser: () =>  Promise<void>;
  }

  export type AuthStore = UserState & UserActions

  export const defaultInitState: UserState = {
    username: "",
    email: "",
    isActive: false,
    isAdmin: false,
    gender: "",
    image: "",
  }
  export const useAuthStore = create<AuthStore>((set) => ({
    ...defaultInitState,
    registerUser: async (user) => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}users`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(user),
        });
  
        if (!response.ok) {
          throw new Error('Registration failed');
        }
  
        const userData = await response.json();
        set((state) => ({
          ...state,
          ...userData, 
          isActive: true,
        }));
      } catch (error) {
        console.error('Login error:', error);
        set((state) => ({
          ...state,
          isActive: false,
        }));
      }
     
    },
    loginUser: async (username, password) => {
      // console.log("login username in auth store ===> ", username);
      // console.log("login password in auth store ===> ", password);
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}auth/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, password }),
        });
  
        if (!response.ok) {
          throw new Error('Login failed');
        }
  
        const userData = await response.json();
        // const {user,token}= await response.json();
        //!CHECK
        console.log("userData===>>>>",userData);
        // console.log("userData===>>>>",user);
        // console.log("userData token===>>>>",token);
        set((state) => ({
          ...state,
          ...userData, 
          isActive: true,
        }));
      } catch (error) {
        console.error('Login error:', error);
        set((state) => ({
          ...state,
          isActive: false,
        }));
      }
    },
    logoutUser: async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}auth/logout`, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        });
         set(() => ({
        ...defaultInitState,
      }));
      } catch (error) {
        console.error("Log out error: ",error);
        
      }
     
    },
  }));