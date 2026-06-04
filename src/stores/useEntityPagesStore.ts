import { create } from "zustand";
import { devtools } from "zustand/middleware";

import type { NSPanelRoomEntitiesPage } from "@/proto/bundle";

interface EntityPagesState {
  entityPages: Record<string, NSPanelRoomEntitiesPage>;
  isLoaded: boolean;
  updateEntityPage: (entityPageData: NSPanelRoomEntitiesPage) => void;
  resetEntityPages: () => void;
}

export const useEntityPagesStore = create<EntityPagesState>()(
  devtools(
    (set) => ({
      entityPages: {},
      isLoaded: false,

      updateEntityPage: (entityPageData) => {
        set(
          (state) => ({
            entityPages: {
              ...state.entityPages,
              [String(entityPageData.id)]: entityPageData,
            },
            isLoaded: true,
          }),
          false,
          "updateEntityPage",
        );
      },

      resetEntityPages: () =>
        set(
          {
            entityPages: {},
            isLoaded: false,
          },
          false,
          "resetEntityPage",
        ),
    }),
    { name: "EntityPagesStore" },
  ),
);
