import { ReactNode } from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import styles from "./index.module.scss";

import { Rubik } from "@next/font/google";

const rubik = Rubik();

const LayoutWrapper = ({ children }: { children: ReactNode | ReactNode[] }) => {
  return (
    <div className={`${styles.container} ${rubik.className}`}>
      <Sidebar />
      <div className={styles.container__main}>
        <Header />
        <main className={styles.container__wrapper}>{children}</main>
      </div>
    </div>
  );
};

export default LayoutWrapper;
