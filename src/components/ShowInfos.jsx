import { motion } from "framer-motion";

export const ShowInfos = () => {
  return (
    <motion.div
      className="bg-purple-300 pb-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <h3 className="text-center pb-5 text-purple-base font-bold text-3xl px-2">
        Informations about projects
      </h3>

      <div className="flex justify-around text-sm font-medium">
        <div>
          <p className="font-bold text-lg">Lorem ipsum etc</p>
          <p>Vivamus varius tort</p>
          <p>Suspendisse egetc</p>
          <p>Suspendisse eget nunc</p>
        </div>

        <div>
          <p className="font-bold text-lg">Lorem ipsum etc</p>
          <p>Something about</p>
          <p>Dedicated all you</p>
          <p>Tell us about you</p>
        </div>
      </div>

      <div className="mt-10 text-sm text-justify">
        <p className="px-8">
          In <strong>sapie</strong> nunc, imperdiet non est sit amet, pulvinar
          fringilla tellus. <strong>Aliquam</strong> quam libero, fermentum eget
          lectus nec, euismod euismod mauris.
        </p>
      </div>
    </motion.div>
  );
};
