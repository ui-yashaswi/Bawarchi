import React from "react";
import img1 from "/Icons/abtBwl.png";
import img2 from "/Icons/abt2.png";

function AboutUs() {
  return (
    <div className="flex flex-col w-full items-center h-full lg:py-28 lg:px-28">
      <div className=" h-full flex lg:flex-row flex-col-reverse justify-center items-center gap-38">
        <div className="lg:w-[40vw] items-center h-full flex flex-col gap-6">
          <h1 className="text-[40px] text-[#D94F3A]  font-[quattrocento] font-bold">
            Why Bawarchi...?
          </h1>
          <h1 className="text-[16px] text-[#595959] font-[poppins] leading-8">
            Bawarchi Biryani is a name that defines tradition, taste, and
            timeless flavors. For generations, it has mastered the art of dum
            biryani with rich, aromatic spices. Every grain of rice carries the
            essence of perfection, making it a true food lover’s choice. Its
            unmatched quality and consistency have made it the king of biryanis
            for years!
          </h1>
        </div>
        <img src={img1} alt="" className="w-[20vw] object-cover" />
      </div>

      <div className=" h-full flex lg:flex-row flex-col justify-center items-center gap-38">
        <img src={img2} alt="" className="w-[18vw] object-cover" />
        <div className="lg:w-[40vw] items-center h-full flex flex-col gap-6">
          <h1 className="text-[40px] text-[#D94F3A]  font-[quattrocento] font-bold">
            Our Story
          </h1>
          <h1 className="text-[16px] text-[#595959] font-[poppins] leading-8">
            From the streets of Hyderabad to the heart of London, our journey is
            fueled by a love for authentic biryani. Inspired by Nizami
            traditions, we bring you the same rich flavors, slow-cooked to
            perfection with the finest spices and fragrant basmati rice. At
            Bawarchi Biryani House, we don’t just serve food—we share a legacy,
            a taste of home, and a tradition that has stood the test of time.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
