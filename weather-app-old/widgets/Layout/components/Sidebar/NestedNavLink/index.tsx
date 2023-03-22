import Link from "next/link";
import { ReactNode, useRef } from "react";
import styles from "./index.module.scss";
import NestedCursor from "./NestedCursor";
// import NestedCursor from "./NestedCursor";

const NestedNavLink = ({
  children,
  label,
  icon,
}: {
  children: ReactNode | ReactNode[];
  label: string;
  icon: string;
}) => {
  const containerNestedRef = useRef(null);

  return (
    <div className={styles.container}>
      <div className={styles.container__title}>
        <div className={styles.title__icon}>{icon}</div>
        <div className={styles.title__label}>{label}</div>
      </div>
      <div className={styles.container__nested}>
        <div className={styles.wrapper__nested} ref={containerNestedRef}>
          <NestedCursor containerNestedRef={containerNestedRef} />
          {children}
        </div>
      </div>
    </div>
  );
};

export default NestedNavLink;
