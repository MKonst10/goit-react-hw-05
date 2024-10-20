import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
import clsx from "clsx";

const Navigation = () => {
  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) =>
          clsx(styles.link, isActive && styles.active)
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        className={({ isActive }) =>
          clsx(styles.link, isActive && styles.active)
        }
      >
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
