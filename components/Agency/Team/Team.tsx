import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { team } from "./data";
import Image from "next/image";

const Team = () => {
  return (
    <div className="bg-black">
      <div className="w-full text-white">
        <section className="mx-auto flex w-full max-w-[calc(1400px+15%)] flex-col gap-[0.75rem] px-[7.5%] py-[5vw] lg:grid lg:grid-cols-12 2xl:max-w-[1800px+15%]">
          <p className="order-2 col-span-5 col-start-8 mt-[5vw] lg:order-1 lg:translate-y-[50%] lg:text-xl">
            We&apos;re proud to be a Certified Great Place to Work®!
            You&apos;ll find us working across Creative Web Design, Web
            Development, Branding, and Digital Marketing.
          </p>
          <div className="order-1 flex items-end justify-between lg:order-2 lg:col-span-12">
            <h1 className="flex flex-col text-[2.8125rem] leading-none uppercase lg:text-[clamp(3.125rem,10.6vw,10rem)]">
              <span>Our</span>
              <span className="ml-4 lg:ml-0 lg:pl-[13.5%]">Team</span>
            </h1>
          </div>
        </section>
      </div>
      <div className="block w-full">
        <Swiper
          spaceBetween={35}
          slidesPerView={1.3}
          slidesOffsetBefore={28}
          slidesOffsetAfter={28}
          breakpoints={{
            768: {
              spaceBetween: 10,
              slidesPerView: 6,
              slidesOffsetAfter: 0,
              slidesOffsetBefore: 0,
            },
          }}
        >
          {team.map((elem, index) => {
            return (
              <SwiperSlide key={index}>
                <Image
                  className="rounded-tr-[5rem] object-cover"
                  key={index}
                  src={elem.image}
                  alt="team-member-img"
                  width={1366}
                  height={689}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Team;
