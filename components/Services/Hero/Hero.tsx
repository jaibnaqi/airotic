import Image from "next/image";
import Navigator from "./Navigator";
import Bento from "./Bento";
import { ArrowDownLeft } from "@/components/Agency/Common/Icons";

const Hero = () => {
  return (
    <section className="mx-auto flex w-full max-w-[calc(1400px+15%)] flex-col px-[7.5%] 2xl:max-w-[1800px+15%]">
      <div className="flex w-full flex-col items-end justify-between gap-[0.75rem] pt-[7rem] pb-6 lg:flex-row lg:pt-[calc(6.5vh+1rem)]">
        <h1 className="text-fs-100 order-2 w-full leading-none lg:order-1 lg:w-[57.5%]">
          Welcome to the <span className="font-bold">digital</span> renaissance.
        </h1>
        <Image
          className="order-1 aspect-square h-[160px] w-[160px] rounded-full object-cover lg:order-2 lg:h-[346px] lg:w-[346px]"
          src="/services/hero/main.webp"
          alt="hero-img"
          width={1024}
          height={1024}
        />
      </div>
      <div className="grid w-full grid-cols-12 gap-3">
        <p className="lg:text-fs-24 col-span-12 text-lg lg:col-span-5 lg:col-start-7">
          Crafting the future of websites with enjoyably-creative and
          technologically-advanced design and development.
        </p>
        <div className="col-span-12 mt-8 w-full lg:hidden">
          <div className="ml-auto h-10 w-10">
            <ArrowDownLeft />
          </div>
        </div>
        <Navigator />
      </div>
      <Bento />
    </section>
  );
};

export default Hero;
