// import type { NextPage } from "next";
import Header from "@/components/header";
import Hero from "@/components/hero";
import CategoryContainer from "@/components/categoryContainer";
import Speaker from "@/components/speakerzx9";
import SpeakerZX7 from "@/components/speakerzx7";
import Earphones from "@/components/headphone";
import About from "@/components/shared/about";
import Footer from "@/components/shared/footer";


function Home() {
  return (
    <>
      <div className="overflow-x-hidden">
        <div className="hero">
          <div className="lg:max-w-[1400px] lg:w-[1110px] lg:mx-auto px-4">
            <Header />
            <hr className="mx-auto mt-9 text-white opacity-20"></hr>
            <Hero />
          </div>
        </div>
        <CategoryContainer />
        <Speaker />
        <SpeakerZX7 />
        <Earphones />
        <About />
        <Footer />
      </div>
    </>
  );
}


export default Home;