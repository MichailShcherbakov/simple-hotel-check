import { UiButton } from "../ui-kit/btn";
import { UiPaper } from "../ui-kit/paper";
import { UiTextField } from "../ui-kit/text-field";

export function SignInPage() {
  return (
    <div className="relative w-screen h-screen">
      <img
        src="images/background.png"
        alt="background image"
        className="absolute top-0 left-0 w-screen h-screen blur-md"
      />
      <div className="absolute top-0 left-0 w-screen h-screen bg-white/60"></div>
      <div className="flex flex-col items-center justify-center w-full h-full">
        <UiPaper>
          <form className="flex flex-col gap-8 w-96">
            <h1 className=" text-2xl font-medium text-gray-500 text-center">
              Simple Hotel Check
            </h1>
            <div className="flex flex-col gap-6">
              <UiTextField id="username" label="Логин" />
              <UiTextField id="password" label="Пароль" />
            </div>
            <UiButton className="w-full">Войти</UiButton>
          </form>
        </UiPaper>
      </div>
    </div>
  );
}
