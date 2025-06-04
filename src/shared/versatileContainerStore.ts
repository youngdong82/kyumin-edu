// store.ts
import { create } from "zustand";
import { VersatileImage } from './TypeRepository';

type VersatileContainerState = {
  selectedVersatile: VersatileImage | null;
  setSelectedVersatile: (selectedVersatile: VersatileImage | null) => void;
  versatileContainer: VersatileImage[];
  setVersatileContainer: (versatileContainer: VersatileImage[]) => void;
};

export const useVersatileContainerStore = create<VersatileContainerState>((set) => ({
  selectedVersatile: null,
  setSelectedVersatile: (selectedVersatile: VersatileImage | null) => set({ selectedVersatile }),
  versatileContainer: [],
  setVersatileContainer: (versatileContainer: VersatileImage[]) => set({ versatileContainer }),
}));
