import { useState } from "react";

const Navigator = () => {
  const services = [
    "Web design & development",
    "Creative web design",
    "Web development",
    "E-Commerce",
    "WordPress",
    "Copywriting",
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="col-span-12 hidden flex-col gap-2 lg:col-span-11 lg:flex">
      <p className="mb-2 text-lg text-[#7b7b7b]">Discover More</p>
      <div className="flex w-full flex-wrap gap-2">
        {services.map((elem, index) => {
          return (
            <p
              data-active={index === activeIndex}
              onClick={() => setActiveIndex(index)}
              className="cursor-pointer rounded-full border-2 border-black px-4 py-2 text-lg transition-colors duration-300 hover:bg-black hover:text-white data-[active='true']:bg-black data-[active='true']:text-white"
              key={index}
            >
              {elem}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Navigator;
