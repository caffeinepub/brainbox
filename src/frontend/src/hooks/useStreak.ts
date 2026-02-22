import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface StreakState {
  streak: number;
  lastVisit: string;
  updateStreak: () => void;
  resetStreak: () => void;
}

export const useStreak = create<StreakState>()(
  persist(
    (set, get) => ({
      streak: 0,
      lastVisit: new Date().toDateString(),
      updateStreak: () => {
        const today = new Date().toDateString();
        const lastVisit = get().lastVisit;
        const yesterday = new Date(Date.now() - 86400000).toDateString();

        if (lastVisit === today) {
          return;
        } else if (lastVisit === yesterday) {
          set((state) => ({ streak: state.streak + 1, lastVisit: today }));
        } else {
          set({ streak: 1, lastVisit: today });
        }
      },
      resetStreak: () => set({ streak: 0, lastVisit: new Date().toDateString() }),
    }),
    {
      name: 'brainbox-streak',
    }
  )
);
