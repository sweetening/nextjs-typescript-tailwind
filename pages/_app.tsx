import type { AppProps } from "next/app";
import Head from "next/head";
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
      <Component {...pageProps} />
    </>
  );
}

export default SweeteningApp;
