import Head from "next/head";

export default function RecentProjects() {
  return (
    <>
      <Head>
        <title>Recent Projects</title>
      </Head>
      <div className="container mx-auto mt-12">
        <section className="flex flex-col items-center mt-24">
          <h1 className="text-2xl font-extrabold tracking-tighter my-4 mx-0">
            🚧 Under Construction 🚧
          </h1>
          <p>Sorry, please check back again later. In the meantime, enjoy this <a
                href="https://www.spreadshirt.de/game404/"
                className="text-purple-900 font-bold tracking-tight"
              >
                404 game
              </a> to pass the time.</p>
        </section>
      </div>
    </>
  );
}