import { create } from 'zustand';

interface CartItem {
  name: string;
  price: number;
  image: string; // image filename string like 'iphone16.png'
  quantity: number;
}

interface CartState {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (name: string) => void;
  increaseQty: (name: string) => void;
  decreaseQty: (name: string) => void;
}

export const useCart = create<CartState>((set) => ({
  cart: [],
  addToCart: (item) =>
    set((state) => {
      const existing = state.cart.find((p) => p.name === item.name);
      if (existing) {
        return {
          cart: state.cart.map((p) =>
            p.name === item.name ? { ...p, quantity: p.quantity + 1 } : p
          ),
        };
      } else {
        return {
          cart: [...state.cart, { ...item, quantity: 1 }],
        };
      }
    }),
  removeFromCart: (name) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.name !== name),
    })),
  increaseQty: (name) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.name === name ? { ...item, quantity: item.quantity + 1 } : item
      ),
    })),
  decreaseQty: (name) =>
    set((state) => ({
      cart: state.cart
        .map((item) =>
          item.name === name ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0),
    })),
}));
