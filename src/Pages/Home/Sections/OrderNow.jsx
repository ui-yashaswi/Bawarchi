import React, { useState } from "react";
import img1 from "/OrderNow/on1.jpeg";
import img2 from "/OrderNow/on2.jpeg";
import img3 from "/OrderNow/on3.jpeg";
import img4 from "/OrderNow/on4.jpeg";
import { FaStar } from "react-icons/fa";
import QuantityCard from "../../../Components/QuantityCard";

const data = [
  {
    img: img1,
    heading: "Chicken Biryani",
    subheading: "Fresh from Kitchen",
    price: "200rs",
  },
  {
    img: img2,
    heading: "Mutton Biryani",
    subheading: "Fresh from Kitchen",
    price: "250rs",
  },
  {
    img: img3,
    heading: "Paneer Biryani",
    subheading: "Fresh from Kitchen",
    price: "180rs",
  },
  {
    img: img4,
    heading: "Veg Biryani",
    subheading: "Fresh from Kitchen",
    price: "150rs",
  },
  {
    img: img4,
    heading: "Veg Biryani",
    subheading: "Fresh from Kitchen",
    price: "150rs",
  },
  {
    img: img2,
    heading: "Mutton Biryani",
    subheading: "Fresh from Kitchen",
    price: "250rs",
  },
  {
    img: img3,
    heading: "Paneer Biryani",
    subheading: "Fresh from Kitchen",
    price: "180rs",
  },
  {
    img: img4,
    heading: "Veg Biryani",
    subheading: "Fresh from Kitchen",
    price: "150rs",
  },
  {
    img: img4,
    heading: "Veg Biryani",
    subheading: "Fresh from Kitchen",
    price: "150rs",
  },
];

function OrderNow() {
  const [quantities, setQuantities] = useState(data.map(() => 1));

  const handleIncrease = (index) => {
    setQuantities((prev) => prev.map((q, i) => (i === index ? q + 1 : q)));
  };

  const handleDecrease = (index) => {
    setQuantities((prev) =>
      prev.map((q, i) => (i === index && q > 1 ? q - 1 : q))
    );
  };

  return (
    <div className="w-full h-full  px-28 flex flex-col gap-6 p-6">
      {/* Heading */}
      <div className="flex flex-col items-center">
        <h2 className="text-[#d94f3a] text-[38px] font-[quattrocento] text-center font-bold">
          Order Now
        </h2>
        <h1 className="text-[16px] text-[#595959] font-[poppins]">
          A Feast of Spices, A Symphony of Taste
        </h1>
      </div>

      {/* Menu Cards */}
      <div className=" flex flex-wrap gap-6 justify-center">
        {data.map((item, index) => (
          <div key={index} className="flex gap-4 p-4 border border-zinc-200 rounded-lg lg:w-[26vw]  min-w-96   bg-white">
            <img src={item.img} alt={item.heading} className="w-[138px]  h-[138px] rounded-md object-cover" />

            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center gap-16  w-full">
                <div>
                  <h1 className="text-lg font-semibold">{item.heading}</h1>
                  <h1 className="text-green-500">{item.subheading}</h1>
                </div>

                <div className="flex items-center gap-1">
                  <FaStar className="text-yellow-400" />
                  <h1 className="text-gray-600">4.4</h1>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <QuantityCard
                  index={index}
                  quantities={quantities}
                  handleIncrease={handleIncrease}
                  handleDecrease={handleDecrease}
                />
                <h1 className="font-bold text-gray-700">{item.price}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrderNow;
