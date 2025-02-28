import React from "react";

function Gallery() {
  return (
    <div>
      <div className="flex items-center rounded-2xl ">
        <button
          onClick={() => handleDecrease(index)}
          className="bg-zinc-100 text-white px-2 py-1 "
        >
          -
        </button>
        <span className=" bg-zinc-100 px-2  py-1 font-semibold">
          {quantities[index]}
        </span>
        <button
          onClick={() => handleIncrease(index)}
          className="bg-red-500 text-white px-2 py-1 "
        >
          +
        </button>
      </div>



      <div
              key={index}
              className="bg-white p-3 flex flex-col items-center gap-2 border rounded-lg shadow-lg"
            >
              <img
                src={item.img}
                alt={item.text}
                className="h-[195px] w-[290px] object-cover"
              />
              <h1 className="text-[20px] font-semibold text-center">
                {item.text}
              </h1>
            
            </div>
    </div>
  );
}

export default Gallery;
