import Link from "next/link";
import Cursor from "./Cursor";
import { MutableRefObject, ReactNode, RefObject, useRef } from "react";
import styles from "./index.module.scss";

const GroupNavLink = ({ children }: { children: ReactNode }) => {
  const sideBarRef = useRef<HTMLDivElement>(
    null
  ) as MutableRefObject<HTMLDivElement>;

  return (
    <div className={styles.container} ref={sideBarRef}>
      <Cursor sideBarRef={sideBarRef} />
      {children}
    </div>
  );
};

export default GroupNavLink;
