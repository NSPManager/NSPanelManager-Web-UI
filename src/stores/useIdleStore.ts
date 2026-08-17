import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface IdleState {
  idleTimeoutMs: number;
  timerId: ReturnType<typeof setTimeout> | null;
  lastResetTime: number;
  resetIdleTimer: (onTimeout: () => void) => void;
}

export const useIdleStore = create<IdleState>()(
  devtools(
    (set, get) => ({
      idleTimeoutMs: 5000,
      timerId: null,
      lastResetTime: 0,

      resetIdleTimer: (onTimeout) => {
        const { timerId, idleTimeoutMs, lastResetTime } = get();
        const now = Date.now();
        if (timerId && now - lastResetTime < 500) {
          return;
        }

        if (timerId) {
          clearTimeout(timerId);
        }
        const newTimer = setTimeout(() => {
          onTimeout();
        }, idleTimeoutMs);

        set({ timerId: newTimer, lastResetTime: now });
      },
    }),
    { name: "useIdleStore" },
  ),
);
