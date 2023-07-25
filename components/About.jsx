import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <div id='about' className="h-[800px] flex justify-center overflow-x-hidden">
      <div data-aos="slide-right" data-aos-duration="2000">
        <Image
          src="/images/left monkey.png"
          alt="Left Monkey"
          width={400}
          height={300}
        />
      </div>

      <div className="text-red-700 text-center mt-4 md:mt-10 sm:mt-2">
        <h1
          className="font-serif text-5xl lg:text-9xl md:text-7xl"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          MINT
        </h1>
        <h2
          className="font-serif text-5xl lg:text-9xl md:text-7xl"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="500"
        >
          YOUR CLAN
        </h2>
      </div>

      <div data-aos="slide-left" data-aos-duration="2000" data-aos-delay="0">
        <Image
          src="/images/right monkey.png"
          alt="Right Monkey"
          width={400}
          height={300}
        />
      </div>
    </div>
  );
}
