import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { HomePage } from "./pages/home";
import { SignInPage } from "./pages/sign-in";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/sign-in",
    element: <SignInPage />,
  },
]);
