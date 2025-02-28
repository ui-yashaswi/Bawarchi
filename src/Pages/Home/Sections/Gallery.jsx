import React from "react";
import img1 from "/OrderNow/on1.jpeg";
import img2 from "/OrderNow/on2.jpeg";
import img3 from "/OrderNow/on3.jpeg";
import img4 from "/OrderNow/on4.jpeg";
import img5 from "/OrderNow/on5.jpeg";

const images = [img1, img2, img3, img4, img5, ];

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
            <img src={item} alt={`Order Now ${idx + 1}`} className="w-[16vw] h-[18vh] object-cover bg-center" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
