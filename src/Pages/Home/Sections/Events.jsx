import React from "react";
import img1 from "/Events/ev1.jpeg";
import img2 from "/Events/ev2.jpeg";
import img3 from "/Events/ev3.jpeg";
import img4 from "/Events/ev4.jpeg";

const data = [
  {
    img: img1,
    text: "Birthday",
  },
  {
    img: img2,
    text: "Marriage",
  },
  {
    img: img3,
    text: "Party",
  },
  {
    img: img4,
    text: "Family Gathering",
  },
];

function Events() {
  return (
    <div className="w-full h-full bg-[#fdf8f7] pt-5 flex flex-col gap-6">
      {/* ____heading______ */}
      <div className="flex flex-col items-center">
        <h2 className="text-[#d94f3a] text-[38px] font-[quattrocento] text-center font-bold">
          Events
        </h2>
        <h1 className="text-[16px] text-[#595959] font-[poppins]">
          We Serve for all events
        </h1>
      </div>

      {/* _____________card______________ */}
      <div className="px-28 w-full h-full flex lg:flex-row flex-col justify-center gap-6 pb-10">
        {data.map((item, index) => (
          <div key={index} className="bg-white shadow-sm rounded-md shadow-pink-100  p-3">
            <img
              src={item.img}
              alt={item.text}
              className=" w-80 h-[20vh] object-cover"
            />
            <h1 className="text-[20px] pt-3 text-[#3d3d3d] font-semibold text-center">
              {item.text}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;
