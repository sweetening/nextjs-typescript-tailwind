import Head from "next/head";
import Cards from "../components/cards";

export default function RecentProjects() {
  return (
    <>
      <Head>
        <title>Recent Projects</title>
      </Head>
      <div className="container mx-auto mt-12">
        <section className="flex flex-col items-center mt-24">
          <h1 className="text-2xl font-extrabold tracking-tighter my-4 mx-0">
            Here's what I've been working on
          </h1>
          <Cards />
        </section>
      </div>
    </>
  );
}
