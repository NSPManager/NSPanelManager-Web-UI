import { pageRoutes } from "@/router";
import { useRoutes } from "react-router-dom";

function Screen({ path }: { path: string }) {
  return useRoutes(pageRoutes, path); // always runs, once per Screen
}
export default Screen;
