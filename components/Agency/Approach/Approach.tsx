import Image from "next/image";
import { ArrowDownLeft } from "../Common/Icons";

const Approach = () => {
  return (
    <section className="mx-auto flex w-full max-w-[calc(1400px+15%)] flex-col gap-[0.75rem] px-[7.5%] py-[5vw] lg:grid lg:grid-cols-12 2xl:max-w-[1800px+15%]">
      <h1 className="flex flex-col text-[3.125rem] leading-none uppercase lg:col-span-11 lg:text-[clamp(3.125rem,10.6vw,10rem)]">
        <span>Our</span>
        <span className="ml-auto lg:ml-0 lg:pl-[13.5%]">Approach</span>
      </h1>
      <div className="mt-auto mb-6 hidden lg:block lg:w-[clamp(2rem,5vw,4.5rem)]">
        <ArrowDownLeft />
      </div>
      <Image
        className="col-span-5 mt-[5vw] aspect-square rounded-tl-[6rem] object-cover lg:rounded-tl-[12.5rem]"
        src="/agency/approach/approach.webp"
        alt="image"
        width={1024}
        height={1024}
      />
      <div className="lg:text-fs-24 col-span-5 col-start-8 mt-[5vw] flex flex-col justify-center gap-4 lg:leading-[125%]">
        <p>
          We&apos;re not just coders who take instructions - we&apos;re artists
          who take pride in being bold and draw inspiration from the wider
          creative world of music, film and the arts.
        </p>

        <p>
          You&apos;ll never see us play it safe, and we especially like
          partnering with clients who are up for making digital waves.
        </p>

        <p>
          Sustainability is very close to our hearts, too. If your brand makes a
          positive impact on the environment, we&apos;d relish in making it even
          bigger.
        </p>
      </div>
    </section>
  );
};

export default Approach;
