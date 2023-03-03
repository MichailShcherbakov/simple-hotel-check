import { SignInForm } from "../components/forms/sign-in";
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
          <SignInForm />
        </UiPaper>
      </div>
    </div>
  );
}
