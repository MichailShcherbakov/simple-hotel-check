import { useFormik } from "formik";
import { UiButton } from "../../../ui-kit/btn";
import { UiTextField } from "../../../ui-kit/text-field";
import { SignInSchema } from "./sign-in-schema";

export function SignInForm() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: SignInSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
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
          label="Логин"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.errors.email}
        />
        <UiTextField
          id="password"
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
