import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface EnergyState {
  energy: number;
  addEnergy: (amount: number) => void;
  spendEnergy: (amount: number) => boolean;
  resetEnergy: () => void;
}

export const useEnergy = create<EnergyState>()(
  persist(
    (set, get) => ({
      energy: 0,
      addEnergy: (amount: number) => set((state) => ({ energy: state.energy + amount })),
      spendEnergy: (amount: number) => {
        const currentEnergy = get().energy;
        if (currentEnergy >= amount) {
          set({ energy: currentEnergy - amount });
          return true;
        }
        return false;
      },
      resetEnergy: () => set({ energy: 0 }),
    }),
    {
      name: 'brainbox-energy',
    }
  )
);
