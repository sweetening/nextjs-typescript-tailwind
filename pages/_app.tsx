import type { AppProps } from "next/app";
import Head from "next/head";
import Navbar from "../components/navbar";
import "../styles/base.css";

function SweeteningApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="images/favicon.png"
        />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default SweeteningApp;
