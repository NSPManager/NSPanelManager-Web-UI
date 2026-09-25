import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import {
  LightPage,
  LoadingPage,
  MainPage,
  RoomPage,
  ScreenSaverPage,
} from "./pages";

export const router = createBrowserRouter([
  {
    path: "/webapp",
    element: <App />,
    children: [
      { index: true, element: <LoadingPage /> },
      { path: "mainpage", element: <MainPage /> },
      { path: "roompage", element: <RoomPage /> },
      { path: "lightpage/:id", element: <LightPage /> },
      { path: "screensaver", element: <ScreenSaverPage /> },
    ],
  },
]);
