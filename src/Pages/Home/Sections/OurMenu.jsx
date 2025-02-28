import React from "react";
import img1 from "/Home/menuBwl.jpeg";

const menuItems = [
  { img: img1, heading: "Starters", description: "Biryani is a fragrant, spice-infused rice dish layered with meat or vegetables, slow-cooked to perfection." },
  { img: img1, heading: "Chicken Biryani", description: "Biryani is a fragrant, spice-infused rice dish layered with meat or vegetables, slow-cooked to perfection." },
  { img: img1, heading: "Rice", description: "Biryani is a fragrant, spice-infused rice dish layered with meat or vegetables, slow-cooked to perfection." },
  { img: img1, heading: "Non-Veg", description: "Biryani is a fragrant, spice-infused rice dish layered with meat or vegetables, slow-cooked to perfection." },
  { img: img1, heading: "Side Dish", description: "Biryani is a fragrant, spice-infused rice dish layered with meat or vegetables, slow-cooked to perfection." },
  { img: img1, heading: "Thalis", description: "Biryani is a fragrant, spice-infused rice dish layered with meat or vegetables, slow-cooked to perfection." },
  { img: img1, heading: "Chats", description: "Biryani is a fragrant, spice-infused rice dish layered with meat or vegetables, slow-cooked to perfection." },
  { img: img1, heading: "Soups", description: "Biryani is a fragrant, spice-infused rice dish layered with meat or vegetables, slow-cooked to perfection." },
  { img: img1, heading: "Tandoori", description: "Biryani is a fragrant, spice-infused rice dish layered with meat or vegetables, slow-cooked to perfection." },
  { img: img1, heading: "Bread", description: "Biryani is a fragrant, spice-infused rice dish layered with meat or vegetables, slow-cooked to perfection." },
  { img: img1, heading: "Veg Curries", description: "Biryani is a fragrant, spice-infused rice dish layered with meat or vegetables, slow-cooked to perfection." },
  { img: img1, heading: "Desserts", description: "Biryani is a fragrant, spice-infused rice dish layered with meat or vegetables, slow-cooked to perfection." },
  { img: img1, heading: "South Indian Tiffins", description: "Biryani is a fragrant, spice-infused rice dish layered with meat or vegetables, slow-cooked to perfection." },
  { img: img1, heading: "Drinks", description: "Biryani is a fragrant, spice-infused rice dish layered with meat or vegetables, slow-cooked to perfection." },
];

function OurMenu() {
  return (
    <div className="w-full h-full flex flex-col py-20 gap-10 lg:px-28">
      {/* Heading Section */}
      <div className="flex flex-col items-center">
        <h2 className="text-[#d94f3a] text-[38px] font-[quattrocento] text-center font-bold">
          Our Menu
        </h2>
        <h1 className="text-[16px] text-[#595959] font-[poppins]">
          A Feast of Spices, A Symphony of Taste
        </h1>
      </div>

      {/* Menu Items */}
      <div className="w-full flex flex-wrap justify-center gap-6">
        {menuItems.map((item, index) => (
          <div key={index} className="flex items-center gap-4 w-full md:w-[48%]">
            <img src={item.img} className="w-[8vw]" alt={item.heading} />
            <div className="flex flex-col">
              <h1 className="text-[21px] text-[#D94F3A] font-[poppins] font-medium">
                {item.heading}
              </h1>
              <h1 className="text-[16px] text-[#595959] font-[poppins] leading-8">
                {item.description}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurMenu;
