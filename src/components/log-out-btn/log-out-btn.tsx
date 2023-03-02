import { ReactComponent as LogOutIcon } from "../../assets/icons/logout.svg";

export function LogOutButton() {
  return (
    <button className="flex flex-row items-center gap-3">
      <span className="text-green-400 font-medium">Выйти</span>
      <LogOutIcon className="text-green-400" />
    </button>
  );
}
