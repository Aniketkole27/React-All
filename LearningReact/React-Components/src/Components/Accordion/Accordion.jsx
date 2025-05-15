import React, { useState } from "react";
import data from "./data";

function ControlBtn({ option, setOption }) {
  return (
    <>
      <button
        onClick={() => setOption(!option)}
        className="text-black bg-white px-5 py-2 rounded-md grid mx-auto my-5 cursor-pointer text-center"
      >
        {option ? "Single" : "Multi"} Accoudion
      </button>
    </>
  );
}

function Accordion() {
  const [dataId, setDataId] = useState(null);
  const [multiSelector, setMultiSelector] = useState([]);
  const [option, setOption] = useState(true);

  // Single Selector Function
  function handleSingleSelecction(id) {
    setDataId(dataId === id ? null : id);
  }

  // Multiple Selector Function
  function handalMultiSelection(id) {
    let selectedArray = [...multiSelector];
    let indexofCurrentId = selectedArray.indexOf(id);
    if (indexofCurrentId === -1) selectedArray.push(id);
    else selectedArray.splice(indexofCurrentId, 1);

    setMultiSelector(selectedArray);
    // console.log(selectedArray);
  }
  return (
    <>
      <div className="w-full h-screen">
      <h1 className="text-center text-white text-3xl my-5">Accordion Components</h1>
      <ControlBtn option={option} setOption={setOption}/>
        <div className="grid place-content-center bg-blue-100 rounded-3xl w-150 mx-auto">
          {data.map((item) => (
            <div key={item.id} className="p-4 border-b">
              <div
                onClick={() =>
                  option
                    ? handleSingleSelecction(item.id)
                    : handalMultiSelection(item.id)
                }
                className="flex justify-between cursor-pointer"
              >
                <p className="font-bold">{item.tital}</p>
                <span className="text-2xl">
                  {dataId === item.id || multiSelector.indexOf(item.id) !== -1
                    ? "-"
                    : "+"}
                </span>
              </div>
              <div>
                {
                  //   dataId === item.id ?(
                  //    <p className="text-gray-800 mt-2">
                  //     {item.boby}
                  //    </p>)
                  //    : null

                  option
                    ? dataId === item.id && (
                        <p className="text-gray-800 mt-2"> {item.boby}</p>
                      )
                    : multiSelector.indexOf(item.id) !== -1 && (
                        <p className="text-gray-800 mt-2"> {item.boby}</p>
                      )
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Accordion;
