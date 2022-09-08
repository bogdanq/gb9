import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../api/firebase";
import { ThemeContext } from "../../theme-context";

const menuWithoutSession = [
  {
    title: "Login",
    to: "/login",
  },
  {
    title: "SignUp",
    to: "/signup",
  },
];

const menuWithSession = [
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
  {
    title: "Gists",
    to: "/gists",
  },
];

export const Header = ({ email }) => {
  const { theme, themeSetter } = useContext(ThemeContext);

  return (
    <div>
      {!!email && (
        <div>
          <h1>USER: {email}</h1>
          <button
            onClick={() => {
              signOut(auth);
            }}
          >
            x
          </button>
        </div>
      )}
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

      {!!email &&
        menuWithSession.map((item) => (
          <NavLink key={item.to} to={item.to}>
            {item.title}
          </NavLink>
        ))}

      {!email &&
        menuWithoutSession.map((item) => (
          <NavLink key={item.to} to={item.to}>
            {item.title}
          </NavLink>
        ))}
    </div>
  );
};
