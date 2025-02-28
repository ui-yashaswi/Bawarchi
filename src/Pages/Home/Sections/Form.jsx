import React, { useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import bgBanner from "/Home/Slides/formBg.jpeg";

function ReserveTable() {
  const [date, setDate] = useState("");
  const [persons, setPersons] = useState(0);
  const [hour, setHour] = useState("12");
  const [minute, setMinute] = useState("30");
  const [ampm, setAmPm] = useState("PM");
  const [showTimeDropdown, setShowTimeDropdown] = useState(false);

  const hours = Array.from({ length: 12 }, (_, i) => (i + 1).toString());
  const minutes = ["10", "20", "30", "40", "50", "60"];
  const amPmOptions = ["AM", "PM"];

  return (
    <div
      className="w-full h-[80vh]  flex items-center justify-center object-cover bg-cover bg-center"
      style={{ backgroundImage: `url(${bgBanner})` }}
    >
      {/* ______form__________ */}
      <div className="lg:min-w-[38vw] mx-auto p-8 bg-white shadow-md rounded-lg">
        {/* Heading */}
        <h2 className="text-[#d94f3a] text-[38px] font-[quattrocento] text-center font-bold">
          Reserve Table
        </h2>

        {/* Form */}
        <form className="mt-6 space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-[#686868] mb-2 font-medium">Full Name</label>
            <input
              type="text"
              placeholder="Please enter your name"
              className="w-full border-2 border-[#a9a9aa] text-[#686868] mb-2 rounded-md p-3 focus:border-red-500 focus:outline-none"
            />
          </div>

          {/* Date, Persons, Time */}
          <div className="flex gap-4">
            {/* Date */}
            <div className="w-1/3 relative">
              <label className="block text-[#686868] mb-2 font-medium">Date</label>
              <div className="relative">
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full border-2 border-[#a9a9aa] text-[#686868] mb-2 rounded-md p-3 focus:border-red-500 focus:outline-none"
                />
                <FaRegCalendarAlt className="absolute right-4 top-5 text-gray-500 pointer-events-none" />
              </div>
            </div>

            {/* Persons */}
            <div className="w-1/3">
              <label className="block text-[#686868] mb-2 font-medium select-none">Persons</label>
              <div className="flex items-center justify-between border-2 border-[#a9a9aa] text-[#686868] mb-2 rounded-md p-3">
                <IoIosArrowBack
                  className={`text-gray-500 cursor-pointer ${persons === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
                  onClick={() => persons > 0 && setPersons(persons - 1)}
                />
                <span>{persons}</span>
                <IoIosArrowForward
                  className="text-gray-500 cursor-pointer"
                  onClick={() => setPersons(persons + 1)}
                />
              </div>
            </div>

            {/* Time */}    
            <div className="w-1/3 relative">
              <label className="block text-[#686868] mb-2 font-medium">Time</label>
              <div className="relative">
                <button
                  type="button"
                  className="w-full border-2 border-[#a9a9aa] text-[#686868] mb-2 rounded-md p-3 flex justify-between items-center focus:border-red-500 focus:outline-none"
                  onClick={() => setShowTimeDropdown(!showTimeDropdown)}
                >
                  {hour}:{minute} {ampm}
                  <IoIosArrowDown className="text-gray-500" />
                </button>

                {showTimeDropdown && (
                  <div className="absolute w-full bg-white border border-[#a9a9aa] rounded-md shadow-md mt-1 z-10 p-2 flex justify-between">
                    {/* Hour Selection */}
                    <select
                      value={hour}
                      onChange={(e) => setHour(e.target.value)}
                      className="border rounded-md focus:outline-none"
                    >
                      {hours.map((h) => (
                        <option key={h} value={h}>
                          {h}
                        </option>
                      ))}
                    </select>

                    {/* Minute Selection */}
                    <select
                      value={minute}
                      onChange={(e) => setMinute(e.target.value)}
                      className="border rounded-md focus:outline-none"
                    >
                      {minutes.map((m) => (
                        <option key={m} value={m}>
                          {m}
                        </option>
                      ))}
                    </select>

                    {/* AM/PM Selection */}
                    <select
                      value={ampm}
                      onChange={(e) => setAmPm(e.target.value)}
                      className="border rounded-md focus:outline-none"
                    >
                      {amPmOptions.map((ap) => (
                        <option key={ap} value={ap}>
                          {ap}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <label className="block text-[#686868] mb-2 font-medium">Contact</label>
            <input
              type="text"
              placeholder="Contact number"
              className="w-full border-2 border-[#a9a9aa] text-[#b3b3b] rounded-md p-3 focus:border-red-500 focus:outline-none"
            />
          </div>

          {/* Add Note */}
          <div>
            <label className="block text-[#686868] mb-2 font-medium">Add Note</label>
            <textarea
              placeholder="Please enter your message"
              className="w-full border-2 border-[#a9a9aa] text-[#b3b3b] rounded-md p-3 focus:border-red-500 focus:outline-none"
            ></textarea>
          </div>

          {/* Button */}
          <button className="w-full bg-[#d94f3a] text-white py-3 rounded-md text-lg font-semibold hover:bg-red-700 transition">
            BOOK TABLE
          </button>
        </form>
      </div>
    </div>
  );
}

export default ReserveTable;
