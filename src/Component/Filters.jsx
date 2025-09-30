import React, { useState } from "react";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { MdOutlineCheckBox } from "react-icons/md";

function Filters() {
  const CategoryList = [
    { id: 0, title: "People", toggle: false },
    { id: 1, title: "Pets", toggle: true },
    { id: 2, title: "Food", toggle: true },
    { id: 3, title: "Landmarks", toggle: true },
    { id: 4, title: "Cities", toggle: false },
    { id: 5, title: "Nature", toggle: false },
  ];

  const priceData = [
    { id: 0, title: "Lower than $20", toggle: false },
    { id: 1, title: "$20 - $100", toggle: false },
    { id: 2, title: "$100 - $200", toggle: false },
    { id: 3, title: "More than $200", toggle: false },
  ];

  const [display, setDisplay] = useState(CategoryList);
  const [PriceRate, setPriceRate] = useState(priceData);

  const handleToggle = (id) => {
    setDisplay((prev) =>
      prev.map((displays) =>
        displays.id === id
          ? { ...displays, toggle: !displays.toggle }
          : displays
      )
    );
  };

  const handlePriceToggle = (id) => {
    setPriceRate((prev) =>
      prev.map((PriceTag) =>
        PriceTag.id === id
          ? { ...PriceTag, toggle: !PriceTag.toggle }
          : PriceTag
      )
    );
  };

  return (
    <div className="mr-20 ">
      <div className="flex flex-col justify-between h-150">
        <div>
          <div className="pb-3 text-[22px] font-Archivo-bold">Category</div>
          <div className="text-[#1D1D1D] flex flex-col justify-between items-baseline pb-3 h-60">
            {display.map((list, index) => {
              return (
                <div
                  key={index}
                  className="flex justify-center items-center cursor-pointer"
                >
                  <div className="mr" onClick={() => handleToggle(list.id)}>
                    {list.toggle ? (
                      <MdOutlineCheckBox size={25} onClick={() => true} />
                    ) : (
                      <MdCheckBoxOutlineBlank
                        size={25}
                        onClick={() => false}
                        className="text-black"
                      />
                    )}
                  </div>
                  <div className="text-[22px] pl-3 font-normal">
                    {list.title}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <hr className="w-full my-3 text-[#E4E4E4] border-1" />
        <div>
          <div className="pb-3 text-[22px] font-Archivo-bold">Price range</div>
          <div>
            <div className="text-[#1D1D1D] flex flex-col justify-between items-baseline pb-3 h-60">
              {PriceRate.map((Price) => {
                return (
                  <div
                    key={Price.id}
                    className="flex justify-center items-center"
                  >
                    <div
                      className="mr"
                      onClick={() => handlePriceToggle(Price.id)}
                    >
                      {Price.toggle ? (
                        <MdOutlineCheckBox size={25} onClick={() => true} />
                      ) : (
                        <MdCheckBoxOutlineBlank
                          size={25}
                          onClick={() => false}
                          className="text-black"
                        />
                      )}
                    </div>
                    <div className="text-[22px] pl-3 font-normal">
                      {Price.title}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filters;
