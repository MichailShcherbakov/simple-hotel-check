import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { ReactComponent as LogOutIcon } from "../../assets/icons/logout.svg";
import { SIGN_IN_PAGE_PATH } from "../../router";
import { AUTH_COOKIE_NAME } from "../auth-provider";

export function LogOutButton() {
  const navigate = useNavigate();
  const [_, __, removeCookie] = useCookies();

  function clickHandler() {
    removeCookie(AUTH_COOKIE_NAME);

    navigate(SIGN_IN_PAGE_PATH);
  }

  return (
    <button className="flex flex-row items-center gap-3" onClick={clickHandler}>
      <span className="text-green-400 font-medium">Выйти</span>
      <LogOutIcon className="text-green-400" />
    </button>
  );
}
