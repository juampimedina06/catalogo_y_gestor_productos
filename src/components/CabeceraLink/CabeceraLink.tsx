import { Link } from "react-router-dom";
import styles from "./CabeceraLink.module.css";

const CabeceraLink = ({ url, children, isActive }) => {
  return (
      <Link to={url} className={styles.link}>
            <button className={`${styles.button} ${isActive ? styles.activeButton : ""}`}>
        {children}
        </button>
      </Link>
  );
};

export default CabeceraLink;
