import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { SiGooglesheets } from "react-icons/si";



export default function Navbar() {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 w-full absolute top-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <label className="text-xl">🔮</label>
          <span className="self-center text-2xl font-extrabold whitespace-nowrap dark:text-white shadow-sm">
            KasJon
          </span>
        </a>
        <div className="flex md:order-2 gap-3 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link
            href={"https://docs.google.com/spreadsheets/d/1ZoaDEWK2PkqVE3Xu1iHnTrAZ-eMyI2x2dDPyPdxxsxk/edit#gid=2045135101"}
            className="bg-transparent border-2 border-solid border-slate-200 font-medium rounded-full text-2xl p-2 text-center text-[#22a565] transition-all hover:text-violet-700 hover:border-violet-700 shadow-md"
          >
            <SiGooglesheets/>
          </Link>
          <Link href={"https://github.com/baloerrr"}   className="bg-transparent border-2 border-solid border-slate-200 font-medium rounded-full text-2xl p-2 text-center transition-all hover:text-violet-700  hover:border-violet-700 shadow-md">
            <FaGithub/>
          </Link>
        </div>
      </div>
    </nav>
  );
}
