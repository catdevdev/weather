import React from "react";
import styles from "./index.module.scss";

const Header = ({ children }: { children: string }) => {
  return <h1 className={styles.container}>{children}</h1>;
};

export default Header;
