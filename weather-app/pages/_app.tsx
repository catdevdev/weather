import "../app/styles/globals.scss";
import { Fragment } from "react";
import type { AppProps } from "next/app";
import { Page } from "../types/page";

type Props = AppProps & {
  Component: Page;
};

export default function App({ Component, pageProps }: Props) {
  const getLayout = Component.getLayout ?? ((page) => page);
  const Layout = Component.layout ?? Fragment;

  return <Layout>{getLayout(<Component {...pageProps} />)}</Layout>;
}
