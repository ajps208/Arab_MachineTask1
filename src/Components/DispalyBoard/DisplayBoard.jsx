import React from "react";
import "./DisplayBoard.css";

function DisplayBoard() {
  return (
    <>
      <div className="bg-white w-full ">
        {/* title secton */}
        <div className="p-5  pt-10 flex justify-between md:pt-6 ">
          <h1 className=" font-semibold md:text-2xl md:font-bold md:ms-14">
            Choose a plan that's just right you !
          </h1>
          <div className="flex w-56 p-2 justify-between md:w-64  border rounded-3xl md:me-14">
            <div className="border rounded-3xl bg-cyan-200 md:ps-8 md:pe-8">Monthly</div>
            <div>Annually <sup className="text-green-300">-10%</sup></div>
          </div>
        </div>
        {/*first cards section */}
        <div class="grid   grid-cols-12 gap-4 md:ps-14 justify-center ms-14 md:ms-0 ">
          {/* first card */}
          <div className="col-span-12 md:col-span-4 flex flex-col shadow-xl w-72 pt-5 rounded-lg">
          <div className="ps-5">
            <p className=" text-2xl font-semibold">Basic</p>
            <p className=" text-sm mt-1"><s className="text-red-800"><span className="text-black">$89.99/mo</span></s></p>
            <p className=" text-xl">$9.99/mo</p>
            <button className="bg-yellow-300 w-32 rounded p-1 mt-1">Get started <i class="fa-solid fa-arrow-right-long"></i></button>
          </div>
          <div className="ps-5 pe-5 pt-2 pb-2"><hr /></div>
          <div className=" text-xs font-serif ps-5">
            <p>What you'll get</p>
            <p className="p-1"><i class="fa-regular fa-user"></i> Upto 25 users</p>
            <p className="p-1"><i class="fa-solid fa-cloud-arrow-up"></i> Upto 25gb storage</p>
            <p className="p-1"><i class="fa-regular fa-envelope"></i> Email support</p>
            <p className="ps-10 pt-2 pb-5 font-semibold"><u>EXPLORE FEATURES <i class="fa-solid fa-caret-right text-yellow-300"></i></u></p>
            </div>
          </div>
          {/* second card */}
          <div className="col-span-12 md:col-span-4 flex flex-col shadow-xl w-72  pt-5 rounded-lg">
          <div className="ps-5">
            <p className=" text-2xl font-semibold">Standard</p>
            <p className=" text-sm mt-1"><s className="text-red-800"><span className="text-black">$89.99/mo</span></s></p>
            <p className=" text-xl">$9.99/mo</p>
            <button className="bg-red-300 w-32 rounded p-1 mt-1">Get started <i class="fa-solid fa-arrow-right-long"></i></button>
          </div>
          <div className="ps-5 pe-5 pt-2 pb-2"><hr /></div>
          <div className=" text-xs font-serif ps-5">
            <p>What you'll get</p>
            <p className="p-1"><i class="fa-regular fa-user"></i> Upto 25 users</p>
            <p className="p-1"><i class="fa-solid fa-cloud-arrow-up"></i> Upto 25gb storage</p>
            <p className="p-1"><i class="fa-regular fa-envelope"></i> Email support</p>
            <p className="ps-10 pt-2 pb-5  font-semibold"><u>EXPLORE FEATURES <i class="fa-solid fa-caret-right text-red-300"></i></u></p>
            </div>
          </div>
          {/* third card */}
          <div className="col-span-12 md:col-span-4 flex flex-col shadow-xl w-72  pt-5 rounded-lg">
          <div className="ps-5">
            <p className=" text-2xl font-semibold">Premium</p>
            <p className=" text-sm mt-1"><s className="text-red-800"><span className="text-black">$89.99/mo</span></s></p>
            <p className=" text-xl">$9.99/mo</p>
            <button className="bg-purple-300 w-32 rounded p-1 mt-1">Get started <i class="fa-solid fa-arrow-right-long"></i></button>
          </div>
          <div className="ps-5 pe-5 pt-2 pb-2"><hr /></div>
          <div className=" text-xs font-serif ps-5">
            <p>What you'll get</p>
            <p className="p-1"><i class="fa-regular fa-user"></i> Upto 25 users</p>
            <p className="p-1"><i class="fa-solid fa-cloud-arrow-up"></i> Upto 25gb storage</p>
            <p className="p-1"><i class="fa-regular fa-envelope"></i> Email support</p>
            <p className="ps-10 pt-2 pb-5 font-semibold"><u>EXPLORE FEATURES <i class="fa-solid fa-caret-right text-purple-300"></i></u></p>
            </div>
          </div>
        </div>

        {/* second card section */}
        <div class="grid grid-cols-12 md:w-full  gap-3 md:ps-14 md:pe-16 w-80  ms-14 md:ms-0 mt-3 ">
          {/* first card */}
        <div className="col-span-12 md:col-span-6 ps-3 pe-1 flex flex-col md:flex-row shadow-xl w-80 md:w-full  pt-5 rounded-lg">
          <div className="md:w-60%">
            <div className="bg-green-300 rounded-full w-24 text-xs flex justify-center mt-4 md:mt-0">Free forever</div>
            <h1 className=" text-2xl pt-2">Free Starter</h1>
            <p className=" text-sm">The quickest and easiest way to try protocols with basic functionalities</p>
            <button className="bg-green-300 w-32 rounded p-1 mt-2 text-sm">Get started <i class="fa-solid fa-arrow-right-long"></i></button>

          </div>
          <div className="md:w-40% text-sm mt-2 md:mt-0">
          <p>What you'll get</p>
            <p className="p-1"><i class="fa-regular fa-user"></i> Upto 25 users</p>
            <p className="p-1"><i class="fa-solid fa-cloud-arrow-up"></i> Upto 25gb storage</p>
            <p className="p-1"><i class="fa-regular fa-envelope"></i> Email support</p>
            <p className="p-1"><i class="fa-solid fa-check-double"></i> Basic Task flow,voting,Accounting and Team Included</p>
          </div>
        </div>
        {/* second card */}
        <div className="col-span-12 md:col-span-6 ps-3 flex flex-col md:flex-row shadow-xl w-80 md:w-full  pt-5 rounded-lg">
          <div className=" md:w-60%">
            <div className="bg-blue-300 rounded-full w-24 text-xs flex justify-center mt-4 md:mt-0"> Let's Connect</div>
            <h1 className=" text-2xl pt-2">Enterprise Plan</h1>
            <p className=" text-sm">Effortlessy customize and fine-tune services as your need shift, ensuring the perfect tools</p>
            <button className="bg-blue-300 w-32 rounded p-1 mt-2 text-sm">Get started <i class="fa-solid fa-arrow-right-long"></i></button>

          </div>
          <div className="md:w-40% text-sm mt-2 md:mt-0">
          <p>What you'll get</p>
            <p className="p-1"><i class="fa-regular fa-user"></i> More than 75 users</p>
            <p className="p-1"><i class="fa-solid fa-cloud-arrow-up"></i> Customization of all features</p>
            
          </div>
        </div>

        </div>
        <p className="text-cyan-600 text-sm flex justify-end ps-3 pt-3 md:pt-0 pe-3">*some unique features are provided as add-ons with individual plans</p>
      </div>
    </>
  );
}

export default DisplayBoard;
