import React from "react";
import "./Sidebar.css";
import dash from "../../Assets/dashboard.png";
import perk from "../../Assets/plant.png";
import addons from "../../Assets/puzzle.png";
import faq from "../../Assets/question.png";
import support from "../../Assets/customer-service.png";
import logout from "../../Assets/power-off.png";

function Sidebar({ isSidebarVisible }) {
  return (
    <>
      <div
        className=' bg-white w-64 shadow-lg'
      >
        {/* Account Details */}
        <div className="flex justify-center items-center p-5 mt-8 md:mt-0 flex-col shadow-lg">
          <img
            className="rounded-full w-16 h-16"
            src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="profile"
          />
          <div className="flex justify-center items-center flex-col">
            <p className="text-base font-bold">
              Ram Mohan <i class="fa-solid fa-chevron-right text-blue-400"></i>
            </p>
            <span className="text-sm">rammohan2@gmail.com</span>
          </div>
        </div>
        {/* Menu Items */}
        <div className="">
          <div className="flex mt-5 border w-10/12 rounded p-2 shadow hover:bg-cyan-200">
            <img
              className="ms-2 me-2"
              width={"20px"}
              src={dash}
              alt="dashboard"
            />
            Dashboard
          </div>
          <div className="flex mt-3 border w-10/12 rounded p-2 shadow hover:bg-cyan-200">
            <img className="ms-2 me-2" width={"20px"} src={perk} alt="Perk" />
            Perk
          </div>
          <div className="flex mt-3 border w-10/12 rounded p-2 shadow hover:bg-cyan-200">
            <img
              className="ms-2 me-2"
              width={"20px"}
              src={addons}
              alt="Addons"
            />
            Addons
          </div>
          <div className="flex mt-3 border w-10/12 rounded p-2 shadow hover:bg-cyan-200">
            <img className="ms-2 me-2" width={"20px"} src={faq} alt="FAQ" />
            FAQ
          </div>
          <div className="flex mt-3 border w-10/12 rounded p-2 shadow hover:bg-cyan-200">
            <img
              className="ms-2 me-2"
              width={"20px"}
              src={support}
              alt="support"
            />
            Support
          </div>
        </div>
        {/* logout */}
        <div className="flex justify-center items-center bg-cyan-100 p-3 mt-[365px] md:mt-28">
          <p className="text-blue-600"> Logout</p>
          <img className="ms-2" width={"20px"} src={logout} alt="" />
        </div>
      </div>
    </>
  );
}

export default Sidebar;
