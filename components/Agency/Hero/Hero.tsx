import { ArrowDownLeft } from "../Common/Icons";

const Hero = () => {
  return (
    <section className="mx-auto h-screen w-full max-w-[calc(1400px+15%)] px-[7.5%] 2xl:max-w-[1800px+15%]">
      <div className="flex h-[90%] flex-col justify-center lg:h-[80%]">
        <h1 className="text-fs-100 max-w-[12ch] leading-[0.95]">
          Proudly signing every piece.
        </h1>
      </div>
      <div className="flex h-[10%] items-center justify-between lg:h-[20%]">
        <h2 className="font-display text-fs-60 relative px-4">
          <span className="absolute top-1/2 left-0 h-[50%] w-px -translate-y-1/2 bg-black" />
          agency
        </h2>
        <div className="h-8 w-8 lg:hidden">
          <ArrowDownLeft />
        </div>
      </div>
    </section>
  );
};

export default Hero;
