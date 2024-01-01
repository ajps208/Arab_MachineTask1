import React, { useState } from "react";
import Header from "../Components/Header/Header";
import Sidebar from "../Components/Sidebar/Sidebar";
import DisplayBoard from "../Components/DispalyBoard/DisplayBoard";
import bell from '../Assets/bell.png'
import plus from '../Assets/plus.png'

function LangingPage() {
  const [isSidebarVisible, setShowSidebar] = useState(false);

  return (
    <>
      <div className="bg-cyan-200 h-screen">
        <Header isSidebarVisible={isSidebarVisible} setShowSidebar={setShowSidebar}/>
        <div className="md:flex ">
        <div className={`${isSidebarVisible ? 'block' : 'hidden'} md:block  z-10`}><Sidebar isSidebarVisible={isSidebarVisible} /></div>

          <div class={`${isSidebarVisible && 'hidden'} md:grid grid-cols-12 w-full`}>
          <div className="col-span-12 md:col-span-11  mt-12 md:mt-0"><DisplayBoard /></div>
          <div className="col-span-12 md:col-span-1 ">
           <div className="hidden md:block">
              <div className="bg-white w-20 float-end  rounded-md p-5"><img src={bell} alt="" /></div>
              <div className="bg-white w-16 float-end mt-96  rounded-full p-5"><img src={plus} alt="" /></div>
           </div>
          </div>
          </div>
        </div>
        </div>
    </>
  );
}

export default LangingPage;
