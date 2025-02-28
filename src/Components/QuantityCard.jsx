import React from "react";

function QuantityCard({ index, quantities, handleIncrease, handleDecrease }) {
  return (
    <div>
      <div className="flex items-center bg-[#fafafa] rounded-lg border border-zinc-300 ">
        <button
          onClick={() => handleDecrease(index)}
          className=" px-3 py-2"
        >
          -
        </button>
        <span className=" px-3 py-2 border-zinc-300 border-l font-semibold">
          {quantities[index]}
        </span>
        <button
          onClick={() => handleIncrease(index)}
          className="bg-red-500 text-white px-3 rounded-r-lg py-2"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default QuantityCard;
