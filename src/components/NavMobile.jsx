import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export const NavMobile = () => {
  const currentPath = usePathname();

  const isCurrentPage = (path) => {
    return currentPath === path ? "border-b-2 border-purple-400 font-bold" : "";
  };

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      exit={{ opacity: 0 }}
      className="w-2/5 bg-pink-300/60 pb-2 absolute md:hidden"
    >
      <ul className="flex flex-col space-y-2 p-3 font-medium text-lg">
        <li>
          <Link href="/" className={`${isCurrentPage("/")}`}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className={`${isCurrentPage("/about")}`}>
            About
          </Link>
        </li>
        <li>
          <Link href="/projects" className={`${isCurrentPage("/projects")}`}>
            Projects
          </Link>
        </li>
        <li>
          <Link href="/partners" className={`${isCurrentPage("/partners")}`}>
            Partners
          </Link>
        </li>
        <li>
          <Link href="/contact" className={`${isCurrentPage("/contact")}`}>
            Contact
          </Link>
        </li>
      </ul>

      <div className="p-2 text-sm space-x-2 mt-2 pl-3">
        <a href="#" className="underline">
          Login
        </a>
        <span>|</span>
        <a href="#" className="underline">
          Register
        </a>
      </div>
    </motion.nav>
  );
};
