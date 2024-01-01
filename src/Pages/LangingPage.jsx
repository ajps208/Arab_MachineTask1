import React, { useState } from "react";
import Header from "../Components/Header/Header";
import Sidebar from "../Components/Sidebar/Sidebar";
import DisplayBoard from "../Components/DispalyBoard/DisplayBoard";

function LangingPage() {
  const [isSidebarVisible, setShowSidebar] = useState(false);

  return (
    <>
      <div className="bg-cyan-200 h-screen">
        <Header isSidebarVisible={isSidebarVisible} setShowSidebar={setShowSidebar}/>
        <div className="md:flex ">
        <div className={`${isSidebarVisible ? 'block' : 'hidden'} md:block  z-10`}><Sidebar isSidebarVisible={isSidebarVisible} /></div>

          <div class={`${isSidebarVisible && 'hidden'} md:grid grid-cols-12 bg-red-600 w-full`}>
          <div className="col-span-12 md:col-span-11 bg-green-700 mt-12 md:mt-0"><DisplayBoard /></div>
          <div className="col-span-12 md:col-span-1 bg-green-300">ddddddd</div>
          </div>
        </div>
        </div>
    </>
  );
}

export default LangingPage;
