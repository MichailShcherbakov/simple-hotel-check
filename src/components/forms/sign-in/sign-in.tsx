import { useFormik } from "formik";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router";
import { HOME_PAGE_PATH } from "../../../router";
import { UiButton } from "../../../ui-kit/btn";
import { UiTextField } from "../../../ui-kit/text-field";
import { AUTH_COOKIE_NAME } from "../../auth-provider";
import { SignInSchema } from "./sign-in-schema";

export function SignInForm() {
  const [_, setCookie] = useCookies();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: SignInSchema,
    onSubmit: () => {
      setCookie(AUTH_COOKIE_NAME, true, {
        path: "/",
        sameSite: "strict",
      });

      navigate(HOME_PAGE_PATH);
    },
  });

  return (
    <form className="flex flex-col gap-8 w-96" onSubmit={formik.handleSubmit}>
      <h1 className=" text-2xl font-medium text-gray-500 text-center">
        Simple Hotel Check
      </h1>
      <div className="flex flex-col gap-6">
        <UiTextField
          id="email"
          name="email"
          type="email"
          label="Логин"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.errors.email}
        />
        <UiTextField
          id="password"
          type="password"
          name="password"
          label="Пароль"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.errors.password}
        />
      </div>
      <UiButton type="submit" className="w-full">
        Войти
      </UiButton>
    </form>
  );
}
