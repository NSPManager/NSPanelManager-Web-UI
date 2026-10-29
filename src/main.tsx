// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

if (import.meta.env.DEV) {
  import("eruda").then((eruda) => eruda.default.init());
}

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />,
);
