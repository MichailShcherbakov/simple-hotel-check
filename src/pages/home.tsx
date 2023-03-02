import { AppBar } from "../components/app-bar";
import { LogOutButton } from "../components/log-out-btn";

export function HomePage() {
  return (
    <div className="relative w-screen h-screen flex flex-col bg-gray-10">
      <AppBar title="Simple Hotel Check" LeftSlot={<LogOutButton />} />
      <div className="container"></div>
    </div>
  );
}
