import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <header className="absolute top-0 left-0 right-0 z-20">
        <nav className="container mx-auto px-6 md:px-12 py-4">
          <div className="md:flex justify-between items-center">
            <div className="flex justify-between items-center">
              <Link href="/">
                <svg
                  className="w-8 mr-2 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  data-name="Capa 1"
                  viewBox="0 0 16.16 12.57"
                >
                  <defs></defs>
                  <path d="M14.02 4.77v7.8H9.33V8.8h-2.5v3.77H2.14v-7.8h11.88z"></path>
                  <path d="M16.16 5.82H0L8.08 0l8.08 5.82z"></path>
                </svg>
              </Link>
              <div className="md:hidden">
                <button className="text-white focus:outline-none">
                  <svg
                    className="h-12 w-12"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 6H20M4 12H20M4 18H20"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="hidden md:flex items-center">
              <a className="text-lg uppercase mx-3 text-black cursor-pointer hover:text-gray-300">
                About Me
              </a>
              <a className="text-lg uppercase mx-3 text-black cursor-pointer hover:text-gray-300">
                Recent Projects
              </a>
              <a className="text-lg uppercase mx-3 text-black cursor-pointer hover:text-gray-300">
                Contact
              </a>
            </div>
          </div>
        </nav>
      </header>
      <div className="container mx-auto mt-12 mx-8">
        <h1>First Post</h1>
        <h2>
          {/* // To add attributes like className, target, rel, etc.
      // add them to the a tag, not to the  Link tag. */}
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>
      </div>
    </>
  );
}
