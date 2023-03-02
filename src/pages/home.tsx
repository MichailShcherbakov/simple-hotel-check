import { AppBar } from "../components/app-bar";
import { LogOutButton } from "../components/log-out-btn";
import { UiButton } from "../ui-kit/btn";
import { UiPaper } from "../ui-kit/paper";
import { UiTextField } from "../ui-kit/text-field";

export function HomePage() {
  return (
    <div className="relative w-screen h-screen flex flex-col bg-gray-10">
      <AppBar title="Simple Hotel Check" LeftSlot={<LogOutButton />} />
      <div className="flex flex-row w-full h-full items-center justify-center">
        <div className="container flex flex-row h-full gap-6">
          <div className="flex flex-col gap-6">
            <UiPaper className="w-90">
              <form className="flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                  <UiTextField
                    id="location"
                    label="Локация"
                    labelClassName="text-medium"
                  />
                  <UiTextField
                    id="check-in-date"
                    label="Дата заселения"
                    labelClassName="text-medium"
                  />
                  <UiTextField
                    id="num-of-days"
                    label="Количество дней"
                    labelClassName="text-medium"
                  />
                </div>
                <UiButton>Найти</UiButton>
              </form>
            </UiPaper>
            <UiPaper></UiPaper>
          </div>
          <div className="flex flex-col gap-6">
            <UiPaper></UiPaper>
          </div>
        </div>
      </div>
    </div>
  );
}
