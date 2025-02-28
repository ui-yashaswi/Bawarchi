import React from "react";
import bgImg from "/Home/menuBg.jpeg";
import img1 from "/Icons/abtBwl.png";
import img2 from "/Icons/abtBwl.png";
import img3 from "/Icons/abtBwl.png";
import img4 from "/Icons/abtBwl.png";

const data = [
  {
    img: img1,
    title: "Bawarchi Biryani",
    description:
      "Bawarchi Biryani is a name that defines tradition, taste, and timeless flavors. For generations, it has mastered the art of dum biryani with rich, aromatic spices. Every grain of rice carries the essence of perfection, making it a true food lover’s choice. Its unmatched quality and consistency have made it the king of biryanis for years!",
  },
  {
    img: img2,
    title: "Dum  Biryani",
    description:
      "Bawarchi Biryani is a name that defines tradition, taste, and timeless flavors. For generations, it has mastered the art of dum biryani with rich, aromatic spices. Every grain of rice carries the essence of perfection, making it a true food lover’s choice. Its unmatched quality and consistency have made it the king of biryanis for years!",
  },
  {
    img: img3,
    title: "Bawrchi Biryani",
    description:
      "Bawarchi Biryani is a name that defines tradition, taste, and timeless flavors. For generations, it has mastered the art of dum biryani with rich, aromatic spices. Every grain of rice carries the essence of perfection, making it a true food lover’s choice. Its unmatched quality and consistency have made it the king of biryanis for years!",
  },
  {
    img: img4,
    title: "Dum Biryani ",
    description:
      "Bawarchi Biryani is a name that defines tradition, taste, and timeless flavors. For generations, it has mastered the art of dum biryani with rich, aromatic spices. Every grain of rice carries the essence of perfection, making it a true food lover’s choice. Its unmatched quality and consistency have made it the king of biryanis for years!",
  },
];

function KitchenSpecial() {
  return (
    <div
      className="relative w-full h-full bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white  opacity-95"></div>

      {/* Content */}

      <div className="relative flex flex-col justify-center items-center h-full">

        <div className="flex py-10 flex-col items-center">
          <h2 className="text-[#d94f3a] text-[38px]  font-[quattrocento] text-center font-bold">
            Our Kitechen Special's
          </h2>
          <h1 className="text-[16px] text-[#595959] font-[poppins]">
            A Feast of Spices, A Symphony of Taste
          </h1>
        </div>

        {/* Card */}
        <div className="w-full flex flex-col items-center gap-1 ">
          {data.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col bg-red-00 lg:flex-row items-center gap-10 ${
                index % 2 == 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image Section */}
              <img
                src={item.img}
                alt="Dish"
                className="w-[300px] h-[300px] object-contain"
              />

              {/* Text Section */}
              <div className="lg:w-[40vw] flex flex-col gap-6 text-center lg:text-left">
                <h1 className="text-[40px] text-[#D94F3A] font-[quattrocento] font-bold">
                  {item.title}
                </h1>
                <h1 className="text-[16px] text-[#595959] font-[poppins] leading-8">
                  {item.description}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default KitchenSpecial;
