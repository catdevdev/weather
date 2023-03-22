import styles from "./index.module.scss";
import Logo from "../Logo";
import GroupNavLink from "./GroupNavLink";
import NavLink from "./NavLink";
import NestedNavLink from "./NestedNavLink";
import InnerNavLink from "./InnerNavLink";

const Sidebar = () => {
  return (
    <aside className={styles.wrapper}>
      <div className={styles.container}>
        <Logo />
        <GroupNavLink>
          <NavLink href="/overview" label="Overview" />
          <NavLink href="/test1" label="Test1" />
          <NestedNavLink label="Statistics" icon="/">
            <InnerNavLink href={"/test2"} label={"test2"} />
            <InnerNavLink href={"/test3"} label={"test3"} />
            <InnerNavLink href={"/test4"} label={"test4"} />
            <InnerNavLink href={"/test5"} label={"test5"} />
          </NestedNavLink>
          <NestedNavLink label="Statistics V2.0" icon="/">
            <InnerNavLink href={"/test6"} label={"test6"} />
            <InnerNavLink href={"/test7"} label={"test7"} />
            <InnerNavLink href={"/test8"} label={"test8"} />
            <InnerNavLink href={"/test9"} label={"test9"} />
          </NestedNavLink>
          <NavLink href="/test10" label="Test10" />
        </GroupNavLink>
      </div>
    </aside>
  );
};

export default Sidebar;
