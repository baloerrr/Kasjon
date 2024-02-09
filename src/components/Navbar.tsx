import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 w-full absolute top-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <label className="text-xl">🔮</label>
          <span className="self-center text-2xl font-extrabold whitespace-nowrap dark:text-white">
            KasJon
          </span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link
            href={"https://docs.google.com/spreadsheets/d/1ZoaDEWK2PkqVE3Xu1iHnTrAZ-eMyI2x2dDPyPdxxsxk/edit#gid=2045135101"}
            className="text-white bg-violet-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Lihat Kas
          </Link>
        </div>
      </div>
    </nav>
  );
}
