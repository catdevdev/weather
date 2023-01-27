import { ReactElement } from "react";
import { LayoutWrapper } from "../../widgets/Layout";
import Heading from "@/shared/ui/Heading";

const Overview = () => {
  return (
    <>
      <Heading>Overview</Heading>
    </>
  );
};

Overview.getLayout = (page: ReactElement) => (
  <LayoutWrapper>{page}</LayoutWrapper>
);

export default Overview;
