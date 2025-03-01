import React from "react";
import prt1 from "/Partners/prt1.jpeg";
import prt2 from "/Partners/prt2.jpeg";
import prt3 from "/Partners/prt3.jpeg";
import crt1 from "/Partners/crt1.jpeg"
import crt2 from "/Partners/crt2.jpeg"
import brc from "/Partners/brc.png"
function Partners() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-6">
        <div className="flex  flex-col">
          <h1 className="text-[16px] text-[#595959] font-[poppins]">
            Our Delivery Partners
          </h1>
          <div className="flex gap-3">
            <img src={prt1} className="w-24 h-24 rounded-lg" alt="" />
            <img src={prt2} className="w-24 h-24 rounded-lg" alt="" />
            <img src={prt3} className="w-24 h-24 rounded-lg" alt="" />
          </div>
        </div>

        <div className="flex  w-full h-full justify-center gap-10 items-center px-28">
            <div className=" flex  items-center justify-center ">
                <img src={brc} alt="" className="w-38" />
                <div className="flex flex-col">
                    <img src={crt1} alt="" className="w-16 h-24" />
                    <img src={crt2} alt="" className="w-16 h-24" />
                </div>
            </div>
            <div className="flex flex-col w-[40vw]">
                <h1 className="text-[34px] text-[#4CAF50] font-semibold font-[poppins] lg: text-nowrap">Certified for Quality, Trustes for Taste</h1>
                <h1 className="text-[16px] text-[#595959] leading-8">At Bawarchi Restaurant, we adhere to the highest food safety standards, ensuring every dish is prepared with certified quality and hygiene. Our commitment to safety guarantees fresh, authentic flavors you can trust.</h1>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Partners;
