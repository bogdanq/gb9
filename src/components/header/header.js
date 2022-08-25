import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../../theme-context";

const menu = [
  {
    title: "Home",
    to: "/",
  },
  {
    title: "Chat",
    to: "/chat",
  },
  {
    title: "Profile",
    to: "/profile",
  },
];

export const Header = () => {
  const { theme, themeSetter } = useContext(ThemeContext);

  return (
    <div>
      <h1>{theme.name}</h1>
      <button
        disabled={theme.name === "light"}
        onClick={() => themeSetter("light")}
      >
        light
      </button>
      <button
        disabled={theme.name === "dark"}
        onClick={() => themeSetter("dark")}
      >
        dark
      </button>

      {menu.map((item) => (
        <NavLink key={item.to} to={item.to}>
          {item.title}
        </NavLink>
      ))}
    </div>
  );
};
