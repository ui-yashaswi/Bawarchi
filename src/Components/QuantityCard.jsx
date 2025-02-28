import React from "react";

function QuantityCard({ index, quantities, handleIncrease, handleDecrease }) {
  return (
    <div>
      <div className="flex items-center rounded-2xl border ">
        <button
          onClick={() => handleDecrease(index)}
          className="bg-zinc-100 px-2 py-1 "
        >
          -
        </button>
        <span className="bg-zinc-100 px-2 py-1 font-semibold">
          {quantities[index]}
        </span>
        <button
          onClick={() => handleIncrease(index)}
          className="bg-red-500 text-white px-2 py-1 "
        >
          +
        </button>
      </div>
    </div>
  );
}

export default QuantityCard;
