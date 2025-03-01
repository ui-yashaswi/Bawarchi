import React from "react";
import img1 from "/OrderNow/on1.jpeg";
import img2 from "/OrderNow/on2.jpeg";
import img3 from "/OrderNow/on3.jpeg";
import img4 from "/OrderNow/on4.jpeg";
import img5 from "/OrderNow/on5.jpeg";

import tag from "/Icons/dealTag.png";
const images = [img1, img2, img3, img4, img5];

function Gallery() {
  return (
    <div className="py-20">
      <div className="flex flex-col items-center ">
        <h2 className="text-[#d94f3a] text-[38px] font-[quattrocento] text-center font-bold">
          Gallery
        </h2>
        <h1 className="text-[16px] text-[#595959] font-[poppins]">
          All Our dishes
        </h1>
      </div>

      <div className="flex w-full h-full lg:px-28 pt-20 justify-between flex-wrap gap-4">
        {images.map((item, idx) => (
          <div key={idx}>
            <img
              src={item}
              alt={`Order Now ${idx + 1}`}
              className="w-[16vw] h-[18vh] object-cover bg-center"
            />
          </div>
        ))}
      </div>

      <div className="flex w-full h-full py-5 mt-10 gap-4 items-center bg-[#fef8f7] justify-center flex-col">
        <img src={tag} alt="" className="w-48" />

        <h1 className="text-[#d94f3a] text-[38px] font-serif font-bold text-3xl ">
          On Direct Collection of Order Get 20% OFF
        </h1>
      </div>
    </div>
  );
}

export default Gallery;
