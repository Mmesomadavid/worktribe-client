import { motion } from "framer-motion";

const Logo = () => {
  return (
    <div className="flex items-center">
      <motion.h1
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-2xl font-bold tracking-tight"
      >
        <span className="text-slate-900 dark:text-white uppercase">WorkTribe</span>
      </motion.h1>
    </div>
  );
};

export default Logo;