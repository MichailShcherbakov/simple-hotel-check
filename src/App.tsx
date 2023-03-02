import { UiButton } from "./ui-kit/button/button";
import { UiTextField } from "./ui-kit/text-field/text-field";

export default function App() {
  return (
    <div className="flex flex-col p-6 gap-6">
      <UiButton>Войти</UiButton>
      <UiTextField id="sing-in" label="Логин" />
      <UiTextField
        id="sing-in-error"
        error
        label="Логин"
        helperText="Неверный пароль"
      />
    </div>
  );
}
