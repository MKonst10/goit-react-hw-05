import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
import clsx from "clsx";

const Navigation = () => {
  return (
    <header className={styles.header}>
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
        end
      >
        Movies
      </NavLink>
    </header>
  );
};

export default Navigation;
