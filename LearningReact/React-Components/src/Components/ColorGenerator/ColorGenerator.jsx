import { use, useCallback, useEffect, useState } from "react";

function ColorGenerator() {
  const [hashColor, setHashColor] = useState(0);
  const [rgbColor, setRgbColor] = useState(0);
  const [colorStyle, setColorStyle] = useState("hash");

  useEffect(() => {
    hashColorChange();
  }, [setHashColor, setColorStyle]);

  useEffect(() => {
    RGBColorChanger();
  }, [setRgbColor, setColorStyle]);

  const hashColorChange = () => {
    let colorCode = "#";
    for (let i = 0; i < 6; i++) {
      let codeDigit = Math.floor(Math.random() * (9 + 1));
      colorCode += codeDigit;
    }
    setHashColor(colorCode);
  };

  const RGBColorChanger = () => {
    let colorCodeArray = [];
    for (let i = 0; i < 3; i++) {
      let colorDigit = Math.floor(Math.random() * (255 + 1));
      colorCodeArray.push(colorDigit);
    }
    let colorCode = `rgb(${colorCodeArray[0]},${colorCodeArray[1]},${colorCodeArray[2]})`;
    setRgbColor(colorCode);
  };

  const handleChange = (e) => setColorStyle(e.target.value);

//   return (
//     <>
//       <div
//         className="w-full h-screen"
//         style={{
//           backgroundColor: colorStyle === "hash" ? hashColor : rgbColor,
//         }}
//       >

//         <div className="flex justify-center">
//           <button
//             onClick={() =>
//               colorStyle === "hash" ? hashColorChange() : RGBColorChanger()
//             }
//             className="px-5 py-3 my-10 mx-3 text-xl cursor-pointer bg-white rounded-md"
//           >
//             Generate New Color
//           </button>

//           <label htmlFor="hashColor" className="text-white my-13 text-2xl">
//             HashCode
//             <input
//               type="radio"
//               id="hashColor"
//               name="colorChoose"
//               checked={colorStyle === "hash"}
//               className="w-5 h-5 mx-3"
//               value="hash"
//               onChange={handleChange}
//             />
//           </label>

//           <label htmlFor="rgbcolor" className="text-white my-13 text-2xl">
//             RGBColors
//             <input
//               type="radio"
//               id="rgbcolor"
//               name="colorChoose"
//               className="w-5 h-5 mx-3"
//               value="rgb"
//               checked={colorStyle === "rgb"}
//               onChange={handleChange}
//             />
//           </label>
//         </div>

//         <div className="flex justify-center my-25">
//           <h1 className="text-7xl text-center">
//             {colorStyle === "hash" ? hashColor : rgbColor}
//           </h1>
//         </div>
//       </div>
//     </>
//   );


return (
  <>
    <div
      className="w-full min-h-screen flex flex-col justify-between"
      style={{
        backgroundColor: colorStyle === "hash" ? hashColor : rgbColor,
      }}
    >
      <div className="flex flex-col md:flex-row justify-center items-center p-6 gap-6">
        <button
          onClick={() =>
            colorStyle === "hash" ? hashColorChange() : RGBColorChanger()
          }
          className="px-6 py-3 text-lg md:text-xl cursor-pointer bg-white rounded-md shadow-md"
        >
          Generate New Color
        </button>

        <label htmlFor="hashColor" className="text-white text-lg md:text-2xl flex items-center gap-2">
          <input
            type="radio"
            id="hashColor"
            name="colorChoose"
            checked={colorStyle === "hash"}
            className="w-5 h-5"
            value="hash"
            onChange={handleChange}
          />
          HashCode
        </label>

        <label htmlFor="rgbcolor" className="text-white text-lg md:text-2xl flex items-center gap-2">
          <input
            type="radio"
            id="rgbcolor"
            name="colorChoose"
            className="w-5 h-5"
            value="rgb"
            checked={colorStyle === "rgb"}
            onChange={handleChange}
          />
          RGBColors
        </label>
      </div>

      <div className="flex justify-center mb-10 px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center text-white break-words">
          {colorStyle === "hash" ? hashColor : rgbColor}
        </h1>
      </div>
    </div>
  </>
);

}


export default ColorGenerator;
