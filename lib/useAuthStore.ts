import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const HARD_CODED_EMAIL = "prohitpatel.012@gmail.com";
const HARD_CODED_PASSWORD = "12345";

const createStorage = () => {
  if (typeof window !== "undefined") {
    return window.localStorage;
  }

  const noop = (_: string, __?: string) => null;
  return {
    getItem: noop,
    setItem: noop,
    removeItem: noop,
  };
};

export type AuthState = {
  loggedIn: boolean;
  email: string | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      loggedIn: false,
      email: null,

      login: (email, password) => {
        if (email === HARD_CODED_EMAIL && password === HARD_CODED_PASSWORD) {
          set({ loggedIn: true, email });
          return true;
        }

        return false;
      },

      logout: () => set({ loggedIn: false, email: null }),
    }),
    {
      name: "tea-stall-auth",
      storage: createJSONStorage(createStorage),
    }
  )
);
