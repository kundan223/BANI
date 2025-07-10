import React from 'react';
import Button from './button';

const Hero = () => {
  return (
    <div className="relative bg-[#D5D5D5] min-h-screen px-4 md:px-8 py-12 overflow-hidden">

      {/* Video Background */}
      <div className="w-full flex justify-center md:justify-end">
        <video
          src="/videos/Hero_Section.mp4"
          autoPlay
          loop
          muted
          className="w-full md:w-[60vw] max-w-screen-xl h-auto rounded-xl object-cover"
        />
      </div>

      {/* Top Content Overlapping */}
      <div className="absolute top-10 sm:top-14 md:top-20 left-0 right-0 px-4 md:px-12 z-10">
        <div className="max-w-screen-xl mx-auto space-y-4 text-center md:text-left">
          <p className="codystar-regular text-lg sm:text-2xl md:text-4xl text-gray-700 tracking-widest">
            MVP WEB DESIGN
          </p>
          <p className="b612-mono-bold text-2xl sm:text-4xl md:text-5xl leading-tight text-black">
            WHERE BUILDING<br className="hidden sm:block" />FAST RUNS DEEP
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
            <Button>PROJECTS</Button>
            <Button>BUILD MVP</Button>
          </div>
        </div>
      </div>

      {/* Bottom Content Overlapping */}
      <div className="absolute bottom-8 left-0 right-0 px-4 md:px-12 z-10">
        <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="b612-mono-regular text-lg sm:text-xl md:text-2xl text-black text-center sm:text-left">
            YOUR PRODUCT IS OUR WORK
          </p>
          <Button>GET CONSULTATION</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
