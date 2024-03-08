import { Search } from "lucide-react";
import { motion } from "framer-motion";

export const InputSearch = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      exit={{ opacity: 0 }}
      className="bg-gray-200/70 h-12 flex items-center justify-center"
    >
      <Search size={18} />
      <input
        type="text"
        name="search"
        placeholder="Search"
        className="ml-1 outline-none text-xs w-[60%] bg-transparent border-b border-purple-base"
      ></input>
    </motion.div>
  );
};
