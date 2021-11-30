import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const name = "Sanja Wetzel";
export const siteTitle = "Sanja Wetzel, Full Stack Web Developer";

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
      <header className="flex flex-col items-center">
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className="rounded-full"
              height={244}
              width={244}
              alt={name}
            />
            <h1 className="text-4xl font-extrabold tracking-tighter my-4 mx-0">
              {name}
            </h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.jpg"
                  className="rounded-full"
                  height={208}
                  width={208}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className="text-2xl my-4 mx-0">
              <Link href="/">
                <a className="text-current">{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className="mt-12">
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
