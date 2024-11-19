// store.ts
import { create } from "zustand";

type State = {
  selectedCategory: "Buildings" | "People";
  setSelectedCategory: (category: "Buildings" | "People") => void;
};

export const useStore = create<State>((set) => ({
  selectedCategory: "Buildings",
  setSelectedCategory: (category) => set({ selectedCategory: category }),
}));
