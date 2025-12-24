import { useSwiper } from "swiper/react";
import { data } from "./data";

const SwiperNextButton = () => {
  const swiper = useSwiper();

  return (
    <button
      disabled={swiper.activeIndex === data.length - 1}
      onClick={() => swiper.slideNext()}
      className="absolute right-6 bottom-6 z-20 flex size-[50px] cursor-pointer items-center justify-center rounded-full border-2 border-black transition-all hover:bg-black hover:text-white lg:right-8 lg:bottom-8"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
        />
      </svg>
    </button>
  );
};

export default SwiperNextButton;
