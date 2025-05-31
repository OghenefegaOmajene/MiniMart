// store/useFavorites.ts
import { create } from 'zustand';

type Product = {
  name: string;
  price: number;
  image: string;
};

type FavoritesStore = {
  favorite: Product | null;
  setFavorite: (product: Product) => void;
};

export const useFavorites = create<FavoritesStore>((set) => ({
  favorite: null,
  setFavorite: (product) => set({ favorite: product }),
}));
