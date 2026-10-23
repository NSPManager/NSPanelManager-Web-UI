import { createBrowserRouter, type RouteObject } from "react-router-dom";
import App from "./App";
import {
  DropDownPage,
  LightPage,
  LoadingPage,
  MainPage,
  RoomPage,
  ScreenSaverPage,
} from "./pages";

export const pageRoutes: RouteObject[] = [
  { index: true, element: <LoadingPage /> },
  { path: "mainpage", element: <MainPage /> },
  { path: "roompage", element: <RoomPage /> },
  { path: "lightpage/:id", element: <LightPage /> },
  { path: "screensaver", element: <ScreenSaverPage /> },
  { path: "dropdown", element: <DropDownPage /> },
];

export const router = createBrowserRouter([
  {
    path: "/webapp/*",
    element: <App />,
    children: pageRoutes,
  },
]);
