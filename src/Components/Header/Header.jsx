import React from "react";
import "./Header.css";
import logo from "../../Assets/logo.png";
import disc from "../../Assets/dics.png";

function Header({ isSidebarVisible, setShowSidebar }) {
  // show and hide sidebar in small devices
  function btnclicked() {
    setShowSidebar(!isSidebarVisible);
  }

  return (
    <>
      <div className="h-12 md:h-24 relative flex justify-between items-center ">
        <div className="imgdiv flex justify-center items-center ">
          <div className="absolute top-4 flex justify-center items-center">
            <i
              onClick={btnclicked}
              className="fa-solid fa-bars md:hidden absolute right-24 text-4xl text-cyan-200 "
            ></i>
            {/* logo image */}
            <img width={"60px"} src={logo} alt="logo" />
          </div>
        </div>
        <div className="flex mt-16 md:mt-0 md:me-24 me-5">
          {/* company name */}
          <div className="bg-white h-9 flex rounded-md p-1 shadow">
            <img className="ms-1 " width={"30px"} src={disc} alt="" />
            <i class="md:hidden fa-solid fa-chevron-down p-2"></i>
            <p className="md:ms-2 md:me-2 hidden md:block font-sans">
              XYZ Enterprises pvt.Ltd
            </p>
          </div>
          <div className="bg-white h-9  justify-center items-center rounded-md  ms-2 shadow hidden md:flex">
            <i class="fa-solid fa-chevron-down p-2"></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
