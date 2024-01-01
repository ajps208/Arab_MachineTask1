import React from "react";
import "./Header.css";
import logo from "../../Assets/logo.png";
import disc from "../../Assets/dics.png";

function Header() {
  return (
    <>
      <div className="h-24 relative flex justify-between items-center ">
        <div className="imgdiv flex justify-center items-center ">
          <img
            className="absolute top-4"
            width={"60px"}
            src={logo}
            alt="logo"
          />
        </div>
        <div className="flex md:me-24 me-5">
          <div className="bg-white h-9 flex rounded-md p-1 shadow">
            <img className="ms-1 " width={"30px"} src={disc} alt="" />
            <i class="md:hidden fa-solid fa-chevron-down p-2"></i>
            <p className="md:ms-2 md:me-2 hidden md:block">XYZ Enterprises pvt.Ltd</p>
          </div>
          <div className="bg-white h-9 flex justify-center items-center rounded-md  ms-2 shadow hidden md:block">
            <i class="fa-solid fa-chevron-down p-2"></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
