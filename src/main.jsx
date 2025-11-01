import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import router from "./app/routers/route";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/redux/store";
import AuthProvider from "./app/Provider/AuthProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Toaster />
    <Provider store={store}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </Provider>
  </StrictMode>
);
