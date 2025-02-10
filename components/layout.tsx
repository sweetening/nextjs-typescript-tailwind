import Head from "next/head";
import Image from "next/image";

const name = "Hi, I'm Sanja";
const shortBio =
  "I’m a frontend engineer based in Leipzig, Germany with a passion for building beautiful, accessible digital products that scale, and I'm always seeking opportunities to collaborate with people and organizations that share a strong commitment to social causes.";
export const siteTitle = "Sanja Wetzel, Software Engineer";

// @ts-ignore
export default function Layout({ children, home }) {
  return (
    <div className="container mx-auto">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="Sanja Wetzel, Software Engineer"
          content="Powered by Next.js + React and TailwindCSS"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className="flex flex-col md:flex-row items-center my-12 md:mt-24 justify-center">
        {home && (
          <>
            <Image
              priority
              src="/images/profile-dots-round.png"
              className="rounded-full shadow-md z-2"
              height={244}
              width={244}
              alt={name}
            />
            <div className="flex flex-col text-center text-center md:text-right">
              <h2 className="text-6xl font-semibold tracking-tighter my-4 mx-6 md:ml-16 md:mr-6">
                {name}
              </h2>
              <h3 className="text-2xl font-medium tracking-tighter mx-6 max-w-lg md:ml-16 md:mr-6 my-6">
                {shortBio}
              </h3>
            </div>
          </>
        )}
      </header>
      <main>{children}</main>
    </div>
  );
}
