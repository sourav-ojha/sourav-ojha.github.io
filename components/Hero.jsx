// The Home section
// Name and a small description with Image

import Image from "next/image";
import SocialMedia from "./SocialMedia";

const Hero = () => {
  return (
    <section id="home" className="w-full h-screen ">
      <div className="container flex items-center h-full m-auto">
        <div className="flex-1 ml-40">
          <div className="my-4 text-3xl "> Hey Folks 👋 </div>
          {/* name = Sourav Ojha and profession - Fullstack Developer */}
          <div className="my-2 text-6xl">
            I'm{" "}
            <span className="font-medium text-blue-500 "> Sourav Ojha </span>
          </div>
          <div className="my-2 text-4xl">I am a Fullstack Developer.</div>
        </div>
        <div className="grid w-1/2 place-items-center">
          <Image
            className=""
            src="/Programming.gif"
            alt="hero"
            width={500}
            height={500}
          />
        </div>
      </div>
      <div className="absolute bottom-10 left-10">
        <SocialMedia className="flex flex-col gap-6" />
      </div>
    </section>
  );
};

export default Hero;
