import Link from "next/link";
import { useRouter } from "next/router";
import { BiMessageRoundedDots } from "react-icons/bi";

const NavBar = () => {
  const router = useRouter();
  return (
    <div className="nav mb-[4.9%]">
      <nav className="fixed top-0 left-0 z-20 w-full border-b border-gray-200 bg-white px-2 py-2.5  dark:bg-[#ffffff] sm:px-4">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <Link href="/" className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-black">
              Social Media
            </span>
          </Link>
          <div
            onClick={() => router.push("/chat")}
            className=" bg- flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-gray-400 text-center md:order-2"
          >
            <BiMessageRoundedDots className=" text-3xl text-white " />
          </div>
          <div
            className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
            id="navbar-sticky"
          >
            <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4  md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:text-sm md:font-medium">
              <li className="text-black">
                <Link href="/">Home</Link>
              </li>
              <li className="text-black">
                <Link href="/chat">Chat</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
