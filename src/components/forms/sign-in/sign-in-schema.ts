import * as Yup from "yup";

export const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .email("Укажите в качестве логина свой адрес эл. почты")
    .required("Это поле объязательно для заполнения"),
  password: Yup.string()
    .min(8, "Пароль должен иметь минимум 8 символов")
    .matches(/^((?![А-я]).)*$/, "Пароль нет может влючать кириллические буквы")
    .required("Это поле объязательно для заполнения"),
});
