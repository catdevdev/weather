import { ReactElement } from "react";
import { LayoutWrapper } from "../widgets/Layout";

const Overview = () => {
  return <div>Overview</div>;
};

Overview.getLayout = (page: ReactElement) => (
  <LayoutWrapper>{page}</LayoutWrapper>
);

export default Overview;
