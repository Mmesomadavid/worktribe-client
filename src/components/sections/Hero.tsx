import heroImage from "../../assets/Obscured_Identity.png";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";
import { useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const Hero = () => {
  const [filter, setFilter] = useState("Freelance");
  const [query, setQuery] = useState("");

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-2 sm:py-2 flex justify-center">
      {/* Hero Container */}
      <div className="w-full md:container relative rounded-none md:rounded-[3rem] overflow-hidden md:shadow-2xl min-h-[520px] md:min-h-[650px]">

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Green Gradient Blend */}
        <div className="absolute bottom-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute bottom-0 left-0 w-[70%] h-[70%] bg-[radial-gradient(ellipse_at_bottom_left,_rgba(34,197,94,0.55),_transparent_70%)]"></div>
        </div>

        {/* Hero Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 flex flex-col justify-end h-full w-full px-5 sm:px-8 md:px-12 pb-10 md:pb-12 text-left"
        >
          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-green-400 font-semibold uppercase mb-3 text-sm tracking-wider"
          >
            AI-Powered Job Marketplace
          </motion.p>

          {/* Main Title */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 max-w-4xl leading-[1.1] tracking-tight"
          >
            Apply to 100+
            <br className="sm:hidden" />
            Jobs
            <br />
            In One Click
            <br className="sm:hidden" />
            With AI
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-gray-200 text-base sm:text-lg md:text-xl mb-8 max-w-2xl"
          >
            WorkTribe’s intelligent matching connects top talent with the right
            opportunities. Discover gigs tailored to your skills, apply instantly,
            and get hired faster.
          </motion.p>

          {/* Search Input */}
          <motion.div
            variants={itemVariants}
            className="flex max-w-3xl w-full h-12 sm:h-14 rounded-full overflow-hidden bg-white/10 backdrop-blur-md focus-within:bg-white/20 border border-white/20"
          >
            <Input
              placeholder="Search jobs, gigs, or skills..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 h-full px-5 text-white caret-white bg-transparent text-sm sm:text-base border-none outline-none focus-visible:ring-0 placeholder:text-white/80"
            />

            <Separator
              orientation="vertical"
              className="h-8 sm:h-10 my-auto bg-white/30"
            />

            {/* Filter */}
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="h-full px-4 bg-white text-black font-medium outline-none text-sm sm:text-base"
            >
              <option value="Freelance">Freelance</option>
              <option value="Jobs">Jobs</option>
              <option value="Talent">Talent</option>
            </select>
          </motion.div>

          {/* Trust line */}
          <motion.p
            variants={itemVariants}
            className="text-white/80 text-sm mt-4"
          >
            Join thousands of freelancers and companies finding work on WorkTribe
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;