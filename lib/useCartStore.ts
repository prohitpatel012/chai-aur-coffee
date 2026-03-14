import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export type CartProduct = {
  id: string;
  title: string;
  price: number;
  coverImage?: string;
  quantity: number;
};

type CartState = {
  items: CartProduct[];
  addItem: (product: Omit<CartProduct, "quantity">, quantity?: number) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clear: () => void;
  totalItems: () => number;
  totalAmount: () => number;
};

const createStorage = () => {
  if (typeof window !== "undefined") {
    return window.localStorage
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const noop = (_: string, __?: string) => null

  return {
    getItem: noop,
    setItem: noop,
    removeItem: noop,
  }
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (product, quantity = 1) => {
        set((state) => {
          const existing = state.items.find((item) => item.id === product.id);
          if (existing) {
            return {
              items: state.items.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + quantity }
                  : item
              ),
            };
          }

          return {
            items: [...state.items, { ...product, quantity }],
          };
        });
      },

      removeItem: (id) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        }));
      },

      updateQuantity: (id, quantity) => {
        if (quantity <= 0) {
          get().removeItem(id);
          return;
        }

        set((state) => ({
          items: state.items.map((item) =>
            item.id === id ? { ...item, quantity } : item
          ),
        }));
      },

      clear: () => set({ items: [] }),

      totalItems: () =>
        get().items.reduce((total, item) => total + item.quantity, 0),

      totalAmount: () =>
        get().items.reduce((total, item) => total + item.quantity * item.price, 0),
    }),
    {
      name: "tea-stall-cart",
      storage: createJSONStorage(createStorage),
    }
  )
);
