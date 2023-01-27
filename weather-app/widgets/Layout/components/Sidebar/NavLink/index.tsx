import { ReactNode, useEffect } from "react";
import Link from "next/link";
import styles from "./index.module.scss";
import { useRouter } from "next/dist/client/router";

const NavLink = ({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: string;
}) => {
  const { pathname } = useRouter();

  useEffect(() => {
    console.log(pathname);
  }, [pathname]);

  return (
    <Link
      className={`${styles.container} ${pathname === href ? "active" : ""}`}
      href={href}
    >
      <div
        className={styles.container__icon}
        style={{
          background: `cover no-reapeate url(${icon})`,
        }}
      />
      <div className={styles.container__label}>{label}</div>
    </Link>
  );
};

export default NavLink;
