import { Arrow } from "@/components/Layout/Header/Svgs";
import Image from "next/image";

const Service = () => {
  const services = [
    {
      title: "Creative Web Design",
      description:
        "Drawing inspiration from different mediums, trends and audiences, we craft thoughtful, creative websites that help brands put their best digital foot forwards.",
      image: "/services/services/creative-web-design.webp",
    },
    {
      title: "Web Development",
      description:
        "Powered by front-end technologies and forward-thinking concepts, we make animated and interactive elements that enhance your website without slowing it down.",
      image: "/services/services/web-dev.webp",
    },
    {
      title: "Copywriting",
      description:
        "We craft purposeful copy that packs a punch - not only telling your story, but selling your brand.",
      image: "/services/services/copywriting.webp",
    },
    {
      title: "E-Commerce",
      description:
        "Use design and optimisation to your brand's advantage, turning casual visitors into committed fans.",
      image: "/services/services/e-commerce.webp",
    },
    {
      title: "WordPress",
      description:
        "Tailor-made WordPress websites that capture hearts, minds and wallets.",
      image: "/services/services/wordpress.webp",
    },
  ];

  return (
    <section className="mx-auto mb-[4.5rem] flex max-w-[calc(1400px+15%)] flex-col gap-[3.125rem] px-[7.5%] py-[5vw] lg:mb-[10rem] 2xl:max-w-[1800px+15%]">
      {services.map((elem, index) => {
        const isReversed = index % 2 !== 0;

        return (
          <div key={index} className="grid grid-cols-12 items-center gap-3">
            <div
              className={`order-2 col-span-12 flex flex-col lg:col-span-5 ${isReversed ? "lg:order-2 lg:col-start-8" : "lg:order-1"} `}
            >
              <h2 className="text-fs-60 mb-4 leading-none">{elem.title}</h2>
              <p className="lg:text-fs-24 mb-8 max-w-[33ch] text-base leading-[133%]">
                {elem.description}
              </p>
              <button className="flex w-fit items-center rounded-full border-2 border-black px-6 py-2 tracking-tight">
                Find out more
                <span className="ml-4 w-4">
                  <Arrow />
                </span>
              </button>
            </div>
            <Image
              className={`order-1 col-span-12 mb-6 aspect-square lg:col-span-6 lg:mb-0 ${
                isReversed
                  ? "rounded-tl-[7.5rem] lg:order-1 lg:rounded-tl-[12.5rem]"
                  : "rounded-tr-[7.5rem] lg:order-2 lg:col-start-7 lg:rounded-tr-[12.5rem]"
              }`}
              src={elem.image}
              alt="service-img"
              width={1024}
              height={1024}
            />
          </div>
        );
      })}
    </section>
  );
};

export default Service;
