import Interested from "@/components/Agency/Interested/Interested";
import Faqs from "@/components/Home/Faqs/Faqs";
import Hero from "@/components/Services/Hero/Hero";
import Intro from "@/components/Services/Intro/Intro";
import Result from "@/components/Services/Result/Result";
import Service from "@/components/Services/Service/Service";
import Workflow from "@/components/Services/Workflow/Workflow";
import Head from "next/head";

const ServicesPage = () => {
  return (
    <>
      <Head>
        <title>Kota Application | Services</title>
      </Head>
      <div className="bg-[#efefef]">
        <Hero />
        <Intro />
        <Service />
        <Result />
        <Workflow />
        <Faqs />
        <Interested />
      </div>
    </>
  );
};

export default ServicesPage;
