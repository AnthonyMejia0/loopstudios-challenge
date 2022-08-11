import { useState } from "react";

function CreationMobile({ lineOne, lineTwo, img }) {
  const [opacity, setOpacity] = useState("bg-black opacity-20");

  return (
    <div
      id="wrapper"
      className="relative h-48 p-4 text-white hover:text-black cursor-pointer"
      onMouseEnter={() => setOpacity("bg-white opacity-40")}
      onMouseLeave={() => setOpacity("bg-black opacity-20")}
    >
      <img className="w-full h-full z-1" src={img} alt="Creation Banner" />

      <div
        className={`absolute z-10 w-[calc(100%-2rem)] h-[calc(100%-2rem)] top-[1rem] left-[1rem] ${opacity}`}
      ></div>

      <div className="absolute z-20 flex flex-col text-3xl justify-center bottom-0 left-0 p-4 m-6 w-1/2 h-1/2">
        <h4 className="">{lineOne}</h4>
        <h4 className="">{lineTwo}</h4>
      </div>
    </div>
  );
}

export default CreationMobile;
