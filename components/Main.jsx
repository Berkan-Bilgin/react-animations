import React, { useState, useEffect } from "react";
import AnimatedLetters from "./AnimatedLetters";
import Image from "next/image";

export default function Main() {
  const strArray = "Chainzoku".split("");
  console.log(strArray);

  const [letterClass, setLetterClass] = useState("textAnimate");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("textAnimateHover");
    }, 3000); // Buradaki 3000, 3 saniyeyi temsil eder. İstediğiniz süreyi milisaniye cinsinden ayarlayabilirsiniz.

    return () => clearTimeout(timer); // Component temizlendiğinde zamanlayıcıyı temizleme işlemi yapılıyor.
  }, []);

  return (
    <div id='home' className="bg-turquoise h-[1200px] flex justify-center relative overflow-hidden">
      <div className="absolute left-0 bottom-0 clouds">
        <Image src="/images/cloud1.png" alt="cloud1" width={400} height={300} />
        <Image
          src="/images/cloud1.png"
          alt="cloud2"
          width={400}
          height={300}
          className="flip-vertical"
        />
      </div>

      <div className="absolute right-0 bottom-0 clouds-2">
        <Image src="/images/cloud1.png" alt="cloud1" width={400} height={300} />
        <Image
          src="/images/cloud1.png"
          alt="cloud2"
          width={400}
          height={300}
          className="flip-vertical"
        />
      </div>

      <div className="absolute right-0 top-0 clouds-4">
        <Image src="/images/cloud1.png" alt="cloud1" width={400} height={300} />
        <Image
          src="/images/cloud1.png"
          alt="cloud2"
          width={400}
          height={300}
          className="flip-vertical"
        />
      </div>

      <div className="absolute left-0 top-0 clouds-6">
        <Image src="/images/cloud1.png" alt="cloud1" width={400} height={300} />
        <Image
          src="/images/cloud1.png"
          alt="cloud2"
          width={400}
          height={300}
          className="flip-vertical"
        />
      </div>

      <div>
        <div className="mt-40 text-center">
          <AnimatedLetters
            strArray={strArray}
            idx={0}
            letterClass={letterClass}
          />
        </div>

        <h2
  className="
    text-3xl md:text-5xl
    font-serif mt-10
    animate__animated animate__fadeInUp"
  data-aos="fade-up"
  data-aos-duration="2000"
  data-aos-delay="1000"
>
  MINT YOU ZOKU.TAKE A SIDE
</h2>
      </div>
    </div>
  );
}
