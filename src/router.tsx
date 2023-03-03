import { createBrowserRouter } from "react-router-dom";
import { AuthProvider } from "./components/auth-provider";
import { HomePage } from "./pages/home";
import { SignInPage } from "./pages/sign-in";

export const SIGN_IN_PAGE_PATH = "/sign-in";
export const HOME_PAGE_PATH = "/";

export const router = createBrowserRouter([
  {
    path: SIGN_IN_PAGE_PATH,
    element: <SignInPage />,
  },
  {
    path: HOME_PAGE_PATH,
    element: (
      <AuthProvider>
        <HomePage />
      </AuthProvider>
    ),
  },
]);
