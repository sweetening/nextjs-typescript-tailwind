import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div>
        <nav className="bg-nav-pattern dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex items-center justify-between h-16">
              <div className="w-full justify-between flex items-center">
                <Link href="/">
                  <a className="flex-shrink-0">
                    <svg
                      className="text-yellow-600 w-8 mr-2 fill-current cursor-pointer hover:text-purple-500"
                      xmlns="http://www.w3.org/2000/svg"
                      data-name="Capa 1"
                      viewBox="0 0 16.16 12.57"
                    >
                      <defs></defs>
                      <path d="M14.02 4.77v7.8H9.33V8.8h-2.5v3.77H2.14v-7.8h11.88z"></path>
                      <path d="M16.16 5.82H0L8.08 0l8.08 5.82z"></path>
                    </svg>
                  </a>
                </Link>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    <a
                      className="text-lg uppercase mx-3 text-purple-800 tracking-wide cursor-pointer hover:text-white"
                      href="/about-me"
                    >
                      About Me
                    </a>
                    <a
                      className="text-lg uppercase mx-3 text-purple-800 tracking-wide cursor-pointer hover:text-white"
                      href="/recent-projects"
                    >
                      Recent Projects
                    </a>
                    <a
                      className="text-lg uppercase mx-3 text-purple-800 tracking-wide cursor-pointer hover:text-white"
                      href="/contact"
                    >
                      Contact
                    </a>
                  </div>
                </div>
              </div>
              <div className="block">
                <div className="ml-4 flex items-center sm:ml-6"></div>
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                className="text-lg uppercase mx-3 text-purple-500 tracking-wide cursor-pointer hover:text-white"
                href="/about-me"
              >
                About Me
              </a>
              <a
                className="text-lg uppercase mx-3 text-purple-500 tracking-wide cursor-pointer hover:text-white"
                href="/recent-projects"
              >
                Recent Projects
              </a>
              <a
                className="text-lg uppercase mx-3 text-purple-500 tracking-wide cursor-pointer hover:text-white"
                href="/contact"
              >
                Contact
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
