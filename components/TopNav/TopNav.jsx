import Link from "next/link";

const TopNav = () => {
  return (
    <div
      className="bg-url('/bg4.jpg') rounded-md border-2 border-white/5 
      flex flex-row justify-between items-center p-2 px-4 m-4 shadow-lg
      font-[family-name:var(--font-geist-sans)]"
    >
      <Link
        href="/"
        className="text-white font-semibold text-lg hover:text-white/80 transition duration-250"
      >
        ORAI
      </Link>
      <div className="flex flex-row gap-4">
        <Link
          href="/about"
          className="text-white hover:text-white/80 transition duration-250"
        >
          Who We Are
        </Link>
        <Link
          href="/chat"
          className="text-white hover:text-white/80 transition duration-250"
        >
          Chat
        </Link>
      </div>
      <div>
        <Link href="/login">
          <button
            className="bg-white/10 backdrop-blur-md text-white px-4 py-2 
            rounded-md hover:bg-white/20 transition duration-250 border-white/5"
          >
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TopNav;
