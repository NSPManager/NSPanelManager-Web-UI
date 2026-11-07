import {
  NSPanelRoomEntitiesPage_EntitySlot_EntityType,
  type NSPanelRoomEntitiesPage_EntitySlot,
} from "@/generated/src/proto/protobuf_nspanel";
import { stompService } from "@/services/stompService";
import { useEntityPagesStore } from "@/stores";
import { cardBg, cardBorderShadow } from "@/styles";
import type { ReactNode } from "react";
import {
  BsFillQuestionOctagonFill,
  BsLightbulbFill,
  BsToggleOn,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";

interface Props {
  EntityPageId: number;
}

const iconMap: Record<
  NSPanelRoomEntitiesPage_EntitySlot_EntityType,
  ReactNode
> = {
  [NSPanelRoomEntitiesPage_EntitySlot_EntityType.ENTITY_TYPE_BUTTON]: (
    <BsFillQuestionOctagonFill />
  ),
  [NSPanelRoomEntitiesPage_EntitySlot_EntityType.ENTITY_TYPE_LIGHT]: (
    <BsLightbulbFill size={22} />
  ),
  [NSPanelRoomEntitiesPage_EntitySlot_EntityType.ENTITY_TYPE_SCENE]: (
    <BsFillQuestionOctagonFill />
  ),
  [NSPanelRoomEntitiesPage_EntitySlot_EntityType.ENTITY_TYPE_SWITCH]: (
    <BsToggleOn size={22} />
  ),
  [NSPanelRoomEntitiesPage_EntitySlot_EntityType.ENTITY_TYPE_THERMOSTAT]: (
    <BsFillQuestionOctagonFill />
  ),
  [NSPanelRoomEntitiesPage_EntitySlot_EntityType.ENTITY_TYPE_UNSPECIFIED]: (
    <BsFillQuestionOctagonFill />
  ),
  [NSPanelRoomEntitiesPage_EntitySlot_EntityType.UNRECOGNIZED]: (
    <BsFillQuestionOctagonFill />
  ),
};

function EntityGrid({ EntityPageId }: Props) {
  const navigate = useNavigate();

  const EntityPage = useEntityPagesStore((state) =>
    EntityPageId ? state.entityPages[EntityPageId] : undefined,
  );
  const totalEntities = EntityPage?.pageType || 8;
  //   const headerText = EntityPage?.headerText || undefined;
  const entities = EntityPage?.entities || [];

  const roomViewMap: Map<number, NSPanelRoomEntitiesPage_EntitySlot> =
    new Map();
  entities.forEach((entity) => {
    roomViewMap.set(entity.roomViewPosition, entity);
  });

  const roomEntities = Array.from(
    { length: totalEntities },
    (_, index) => index,
  );

  return (
    <div
      className={`grid grid-cols-2 h-full gap-1 md:gap-2 ${totalEntities === 4 ? "grid-rows-2" : totalEntities === 8 ? "grid-rows-4" : "grid-rows-6"}`}
    >
      {roomEntities.map((roomEntity) => {
        const entity = roomViewMap.get(roomEntity);
        const isOn = entity?.icon === "s";
        const entityType = entity?.type;

        const icon = entityType ? iconMap[entityType] : null;

        return (
          <div
            key={roomEntity}
            className={`grid border ${cardBorderShadow} ${totalEntities !== 4 ? "grid-cols-[1fr_2px_70px] md:grid-cols-[1fr_2px_100px]" : "grid-rows-[1fr_2px_1fr]"} items-center rounded-xl`}
          >
            <button
              onClick={() =>
                // (useConfigStore.setState({ resetDefaultRoom: true }),
                {
                  entity?.type ===
                  NSPanelRoomEntitiesPage_EntitySlot_EntityType.ENTITY_TYPE_LIGHT
                    ? navigate(`/webapp/lightpage/${entity?.id}`)
                    : "";
                }
              }
              className={`relative flex h-full ${cardBg} items-center ${totalEntities !== 4 ? "justify-start rounded-l-xl p-3" : "justify-center rounded-t-xl"} md:text-xl select-none cursor-pointer active:opacity-60 duration-50 transition-all`}
            >
              {entity?.name}
              {entity && icon ? (
                <div className="absolute top-2 left-2 md:top-3 md:left-3">
                  {icon}
                </div>
              ) : (
                ""
              )}
            </button>
            <div
              className={`grid ${totalEntities !== 4 ? "grid-rows-[1fr_60%_1fr]" : "grid-cols-[1fr_60%_1fr]"} h-full`}
            >
              <div className={`${cardBg}`}></div>
              <div className={entity ? "bg-transparent" : cardBg}></div>
              <div className={`${cardBg}`}></div>
            </div>
            <div
              onClick={() => {
                entity && EntityPageId
                  ? stompService.sendToggleEntityFromEntitiesPage(
                      EntityPageId,
                      roomEntity,
                    )
                  : "";
              }}
              className={`flex h-full ${cardBg} justify-center items-center ${totalEntities !== 4 ? "rounded-r-xl" : "rounded-b-xl"} ${entity ? "cursor-pointer" : ""}`}
            >
              {entity ? (
                <div
                  className={`relative inline-flex h-6 w-10 md:h-7 md:w-12 rounded-full ${isOn ? "bg-[#ffc101] justify-end" : "bg-white/40 justify-start"}  p-1 transition-colors duration-200 ease-in-out select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400`}
                >
                  <span
                    className={`h-4 w-4 md:h-5 md:w-5 inline-block rounded-full bg-white shadow-md transform transition-transform duration-200 ease-in-out`}
                  ></span>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default EntityGrid;
