import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/navbar";
import Cards from "../components/cards";

export default function RecentProjects() {
  return (
    <>
      <Head>
        <title>Recent Projects</title>
      </Head>
      <Navbar></Navbar>
      <div className="container mx-auto mt-12 mx-8">
        <section className="flex flex-col items-center mt-24">
          <h1 className="text-2xl font-extrabold tracking-tighter my-4 mx-0">
            Here's what I've been working on
          </h1>
          <Cards></Cards>
        </section>
        <h2 mt-8>
          <Link href="/about-me">
            <a className="mx-8 text-purple-900 font-extrabold tracking-tight">
              Back to top
            </a>
          </Link>
        </h2>
      </div>
    </>
  );
}
