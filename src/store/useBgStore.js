import { create } from "zustand";

export const useBgStore = create(set => ({
  bg: "HOME",
  changeBg: (newBg) => set({ bg: newBg }),
}));
