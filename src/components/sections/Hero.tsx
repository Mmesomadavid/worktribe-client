'use client';

import { useEffect, useRef } from 'react';
import { Search, Play,  ArrowUpRight } from 'lucide-react';
import { Input } from '../ui/input';
import gsap from 'gsap';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Slide up the headline
      tl.fromTo(
        headlineRef.current,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 0.9 }
      )
      // Slide in search bar from left
      .fromTo(
        searchRef.current,
        { opacity: 0, x: -40 },
        { opacity: 1, x: 0, duration: 0.7 },
        '-=0.4'
      )
      // Slide in card from bottom
      .fromTo(
        cardRef.current,
        { opacity: 0, y: 80 },
        { opacity: 1, y: 0, duration: 0.8 },
        '-=0.5'
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen" ref={heroRef}>
      {/* Hero Section */}
      <div className="bg-background p-6 sm:p-10 md:p-12 text-white">
        {/* Two-column Hero Layout — stacks on mobile */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-stretch">

          {/* LEFT SECTION — CTA texts + inline Search */}
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h1
                ref={headlineRef}
                className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
                style={{ opacity: 0 }}
              >
                Find{' '}
                <span className="inline-flex items-center gap-2 sm:gap-3
                border border-lime-400
                rounded-full
                px-3 sm:px-6
                py-1 sm:py-2
                mx-1 sm:mx-2
                text-sm sm:text-base md:text-lg">
                  <Search className="w-5 h-5 sm:w-6 sm:h-6 text-lime-400" /> Top Talents
                </span>{' '}
                In{' '}
                <br className="hidden sm:block" />
                a Few Clicks

                {/* Inline search bar */}
                <span
                  ref={searchRef}
                  className="inline-flex items-center gap-0 bg-white/10 rounded-xl overflow-hidden mx-1 sm:mx-6 align-middle mt-3 sm:mt-0"
                  style={{ opacity: 0 }}
                >

                  <Input
                    type="text"
                    placeholder="Search jobs..."
                    className="
                    bg-white/10
                      px-4 py-3
                      bg backdrop-blur-lg  border-none text-white
                      shadow-lg shadow-black/20 w-60 sm:w-74 md:w-80 p-3 h-12 focus:outline-none focus:ring-2 focus:ring-none focus:border-
                      text-sm sm:text-base font-normal
                      "/>

                  <span className="bg-lime-500 px-4 p-4 self-stretch shrink-0">
                    <Search className="w-4 h-4 text-white" />
                  </span>
                </span>
              </h1>
            </div>
          </div>

          {/* RIGHT SECTION — "See how it's done" card */}
          <div
            className="w-full md:w-80 shrink-0"
            ref={cardRef}
            style={{ opacity: 0 }}
          >
            <div className="relative bg-lime-400 rounded-3xl p-8 text-black h-full min-h-[13rem] flex flex-col justify-between overflow-hidden">

              {/* Decorative intertwined circles */}
              <div className="absolute inset-0 pointer-events-none">
                <div
                  className="absolute rounded-full border-2 border-lime-600/30"
                  style={{ width: 200, height: 200, top: '50%', left: '38%', transform: 'translate(-50%, -50%)' }}
                />
                <div
                  className="absolute rounded-full border-2 border-lime-600/30"
                  style={{ width: 200, height: 200, top: '50%', left: '62%', transform: 'translate(-50%, -50%)' }}
                />
              </div>

              {/* Card content */}
              <div className="relative z-10 flex items-center justify-between mb-6">
                <div className="bg-black rounded-full p-3">
                  <Play className="w-5 h-5 text-white fill-white" />
                </div>
                <ArrowUpRight className="w-14 h-14 text-black" strokeWidth={2} />
              </div>
              <div className="relative z-10">
                <h2 className="text-3xl font-medium mb-2">See how it's done</h2>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;