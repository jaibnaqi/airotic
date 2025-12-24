import Image from "next/image";

const Bento = () => {
  return (
    <div className="mt-[3.125rem] w-full">
      <div className="grid grid-cols-2 grid-rows-4 gap-6 lg:grid-cols-4 lg:grid-rows-2 lg:gap-[2.1875rem]">
        <Image
          className="col-span-2 row-span-2 rounded-[10px] object-cover lg:rounded-2xl"
          src="/services/bento/0.webp"
          alt="bento-img"
          width={1024}
          height={1024}
        />
        <Image
          className="rounded-[10px] object-cover lg:rounded-2xl"
          src="/services/bento/1.webp"
          alt="bento-img"
          width={1024}
          height={1024}
        />
        <Image
          className="row-span-2 rounded-[10px] object-cover lg:rounded-2xl"
          src="/services/bento/3.webp"
          alt="bento-img"
          width={1024}
          height={1024}
        />
        <Image
          className="rounded-[10px] object-cover lg:rounded-2xl"
          src="/services/bento/2.webp"
          alt="bento-img"
          width={1024}
          height={1024}
        />
      </div>
    </div>
  );
};

export default Bento;
