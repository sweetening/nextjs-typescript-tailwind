import Head from "next/head";
import Layout from "../components/layout";
import Link from "next/link";

export default function AboutMe() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <Layout home>
        <div className="container flex flex-row mx-auto mt-12 justify-evenly">
          <section className="text-lg flex flex-col md:flex-row w-full px-6 pb-12">
            <div className="flex flex-col mx-auto px-4 md:w-3/4">
              <h3 className="text-2xl font-bold tracking-tighter max-w-lg my-4">
                Present
              </h3>
              <Link href="/work">
                <img
                  className="w-150 cursor-pointer"
                  src="https://spreadshirt-res.cloudinary.com/images/f_auto,q_auto/v1729073910/PR/Mayra/53958338005_d52d332d7d_o-2/53958338005_d52d332d7d_o-2.jpg?_i=AA"
                  alt="Press photo for Spreadshirt"
                ></img>
              </Link>
              <h4 className="text-2xl font-semibold tracking-tighter pt-4 hover:text-purple-500">
                <Link href="/work">Spread Group</Link>
              </h4>
              <h5 className="text-xl font-md tracking-tightest">
                Software Engineer
              </h5>
            </div>
            <div className="flex flex-col mx-auto mt-6 md:mt-0 md:w-3/4 px-4">
              <h3 className="text-2xl font-bold tracking-tighter max-w-lg my-4">
                Past
              </h3>
              <Link href="/work">
                <img
                  className="w-150 cursor-pointer"
                  src="/images/ines-berlin.png"
                  alt="INES Berlin"
                ></img>
              </Link>
              <h4 className="text-2xl font-semibold tracking-tighter pt-4 hover:text-purple-500">
                <Link href="/work">INES Berlin</Link>
              </h4>
              <h5 className="text-xl font-md tracking-tightest">
                Freelance Web Developer
              </h5>
            </div>
            <div className="flex flex-col mx-auto mt-6 md:mt-16 md:w-3/4 px-4">
              <Link href="/work">
                <img
                  className="w-150 cursor-pointer"
                  src="https://marikoreed.com/wp-content/uploads/2015/03/sfmoma_web_06.jpg"
                  alt="SFMOMA Blue Bottle"
                ></img>
              </Link>
              <h4 className="text-2xl font-semibold tracking-tighter pt-4 md:pt-10 hover:text-purple-500">
                <Link href="/work">Blue Bottle Coffee</Link>
              </h4>
              <h5 className="text-xl font-md tracking-tightest">
                Retail Manager
              </h5>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
