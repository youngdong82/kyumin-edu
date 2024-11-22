// store.ts
import { create } from "zustand";

type category = "Buildings" | "People" | "Animal" | "Bird" | "Insect" | "Plant" | "Tree" | "Rock" | "Others"

type State = {
  selectedCategory: category;
  setSelectedCategory: (selectedCategory: category) => void;
};

export const useStore = create<State>((set) => ({
  selectedCategory: "Buildings",
  setSelectedCategory: (selectedCategory: category) => set({ selectedCategory }),
}));
