import type { AppProps } from "next/app";
import "../styles/base.css";

function SweeteningApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default SweeteningApp;
