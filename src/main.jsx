import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import router from "./app/routers/route";
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Toaster />
    <RouterProvider router={router} />
  </StrictMode>
);
