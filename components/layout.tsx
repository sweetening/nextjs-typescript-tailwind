import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const name = "Hi, I'm Sanja";
const subline = "I'm a software engineer based in Leipzig, Germany";
export const siteTitle = "Sanja Wetzel, Full Stack Web Developer";

//@ts-ignore
export default function Layout({ children, home }) {
  return (
    <div className="container mx-auto">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="Sanja Wetzel, Full Stack Web Developer"
          content="Welcome to my portfolio website built with Next.js"
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
      <header className="flex flex-col items-center mt-16">
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className="rounded-full shadow-md"
              height={244}
              width={244}
              alt={name}
            />
            <h1 className="text-6xl font-extrabold tracking-tighter my-4 mx-0">
              {name}
            </h1>
            <h3 className="text-2xl font-semibold tracking-tighter text-center mx-0">
              {subline}
            </h3>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.jpg"
                  className="rounded-full shadow-md"
                  height={208}
                  width={208}
                  alt={name}
                />
              </a>
            </Link>
          </>
        )}
      </header>
      <main>{children}</main>
    </div>
  );
}
