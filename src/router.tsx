import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { LightPage, MainPage, RoomPage, ScreenSaverPage } from "./pages";

export const router = createBrowserRouter([
  {
    path: "/webapp",
    element: <App />,
    children: [
      { index: true, element: <MainPage /> },
      { path: "roompage", element: <RoomPage /> },
      { path: "lightpage/:id", element: <LightPage /> },
      { path: "screensaver", element: <ScreenSaverPage /> },
    ],
  },
]);
