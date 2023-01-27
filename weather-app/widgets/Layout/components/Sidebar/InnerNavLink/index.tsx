import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./index.module.scss";

const InnerNavLink = ({ href, label }: { href: string; label: string }) => {
  const { pathname } = useRouter();

  return (
    <Link
      className={`${styles.container} ${pathname === href ? "active" : ""}`}
      href={href}
    >
      {label}
    </Link>
  );
};

export default InnerNavLink;
