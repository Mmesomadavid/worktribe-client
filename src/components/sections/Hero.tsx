import heroImage from "../../assets/Obscured_Identity.png"; // local image
import { heroData } from "../../constants"; // import your heroData
import { Input } from "../ui/input"; // shadcn/ui input
import { Separator } from "../ui/separator"; // shadcn/ui separator
import { useState } from "react";

const Hero = () => {
  const { sectionTitle, sectionTitle2, decoTitle, sectionText } = heroData;
  const [filter, setFilter] = useState("Freelance");
  const [query, setQuery] = useState("");

  return (
    <section className="py-10 flex justify-center">
      {/* Hero Container */}
      <div className="container relative rounded-[3rem] overflow-hidden shadow-2xl h-[700px] md:h-[600px]">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Green Gradient Bottom Left */}
        <div className="absolute bottom-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(34,197,94,0.6),_transparent_70%)]"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col justify-end h-full p-12 text-left">
          {/* Decorative Title */}
          <p className="text-green-400 font-semibold uppercase mb-2">
            {decoTitle}
          </p>

          {/* Main Section Title */}
          <h1 className="text-5xl md:text-6xl font-medium text-white mb-6 max-w-3xl">
            {sectionTitle}
            <br />
            {sectionTitle2}
          </h1>

          {/* Subtitle */}
          <p className="text-gray-200 text-xl md:text-2xl mb-8 max-w-4xl">
            {sectionText}
          </p>

          {/* Search Input with Filter on Right */}
          <div className="flex max-w-3xl w-full h-14 rounded-full overflow-hidden bg-white/10 focus-within:bg-white/20">
            <Input
              placeholder="Search jobs..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 h-full px-6 text-white placeholder-white bg-transparent focus:ring-0 focus:border-transparent"
            />

            <Separator orientation="vertical" className="h-10 my-auto bg-white/30" />

            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="h-full px-4 bg-green-600 text-white font-semibold outline-none"
            >
              <option>Freelance</option>
              <option>Hiring</option>
              <option>Job Seeker</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;