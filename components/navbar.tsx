import { ReactNode } from "react";

import Link from "next/link";

type INavbarProps = {
  children: ReactNode;
};

export default function Navbar(props: INavbarProps) {
  return (
    <div className="flex flex-wrap justify-between items-center">
      <div>
        <Link href="/">
          <a>Link</a>
        </Link>
      </div>

      <nav className="mt-0">
        <ul className="navbar flex items-center font-medium text-xl text-gray-800">
          {props.children}
        </ul>
      </nav>
    </div>
  );
}
