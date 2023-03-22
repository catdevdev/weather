import {
  MutableRefObject,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "./NestedCursor.module.scss";
import { useRouter } from "next/router";

const NestedCursor = ({
  containerNestedRef,
}: {
  containerNestedRef: RefObject<HTMLDivElement>;
}) => {
  const cursorRef = useRef<HTMLDivElement>(
    null
  ) as MutableRefObject<HTMLDivElement>;
  const { pathname } = useRouter();
  const [isFirstAppear, setIsFirstAppear] = useState(true);

  useEffect(() => {
    if (!containerNestedRef.current) return;

    const activeNavLink = Array.from(containerNestedRef.current.children).find(
      (navEl) => navEl.className.includes("active")
    );

    if (!activeNavLink) {
      cursorRef.current.style.opacity = "0";
      setIsFirstAppear(true);
      return;
    }

    const positionY =
      containerNestedRef.current.offsetTop -
      activeNavLink.getBoundingClientRect().top;
    const height = activeNavLink.getBoundingClientRect().height;

    cursorRef.current.style.opacity = "0";
    cursorRef.current.style.transition = isFirstAppear
      ? `transform 0s ease-in-out, height 0s ease-in-out, opacity 0.1s ease-in-out`
      : `transform 0.3s ease-in-out, height 0.3s ease-in-out, opacity 0.1s ease-in-out`;
    cursorRef.current.style.transform = `translateY(${-positionY - 114}px)`;
    cursorRef.current.style.height = `${height}px`;
    cursorRef.current.style.opacity = "1";

    setIsFirstAppear(false);
  }, [pathname, containerNestedRef, isFirstAppear]);

  return <div className={styles.container} ref={cursorRef} />;
};

export default NestedCursor;
