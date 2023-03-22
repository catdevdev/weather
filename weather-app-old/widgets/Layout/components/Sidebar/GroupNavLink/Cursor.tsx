import {
  MutableRefObject,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "./Cursor.module.scss";
import { useRouter } from "next/router";

const Cursor = ({ sideBarRef }: { sideBarRef: RefObject<HTMLDivElement> }) => {
  const cursorRef = useRef<HTMLDivElement>(
    null
  ) as MutableRefObject<HTMLDivElement>;
  const { pathname } = useRouter();

  useEffect(() => {
    if (sideBarRef.current) {
      const activeNavLink = Array.from(sideBarRef.current.children).find(
        (navEl) => {
          return navEl.className.includes("active");
        }
      );

      if (activeNavLink) {
        const positionY =
          sideBarRef.current.offsetTop -
          activeNavLink.getBoundingClientRect().top;
        const height = activeNavLink.getBoundingClientRect().height;
        cursorRef.current.style.transform = `translateY(${-positionY}px)`;
        cursorRef.current.style.height = `${height}px`;
      }

      const activeNestedNavLink = Array.from(sideBarRef.current.children).find(
        (navEl) => {
          return Array.from(navEl.children).find((el) => {
            return Array.from(el.children).find((nestedNavLink) => {
              return Array.from(nestedNavLink.children).find(
                (nestedNavLink) => {
                  return nestedNavLink.className.includes("active");
                }
              );
            });
          });
        }
      );

      if (activeNestedNavLink) {
        const positionY =
          sideBarRef.current.offsetTop -
          activeNestedNavLink.getBoundingClientRect().top;

        const height = activeNestedNavLink.getBoundingClientRect().height;
        cursorRef.current.style.transition = `transform 0.3s ease-in-out, height 0.3s ease-in-out`;
        cursorRef.current.style.transform = `translateY(${-positionY}px)`;
        cursorRef.current.style.height = `${height}px`;
        // cursorRef.current.style.transition = `transform 0.3s ease-in-out, height 0.3s ease-in-out`;
      }
    }
  }, [pathname, sideBarRef]);

  return <div className={styles.container} ref={cursorRef} />;
};

export default Cursor;
