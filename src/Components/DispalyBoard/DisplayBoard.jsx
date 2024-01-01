import React from "react";
import "./DisplayBoard.css";

function DisplayBoard() {
  return (
    <>
      <div className="bg-white w-full">
        <div className="flex justify-between pt-10 ">
          <h1 className=" text-2xl font-bold ms-14">
            Choose a plan that's just right you !
          </h1>
          <div className="flex justify-between w-64 p-1 border rounded-3xl me-14">
            <div className="border rounded-3xl bg-cyan-200 ps-8 pe-8">Monthly</div>
            <div>Annually <sup className="text-green-300">-10%</sup></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DisplayBoard;
