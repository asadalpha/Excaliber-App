import React from "react";

const Navbar = () => {
  return (
    <div className="w-full px-20 py-8 font-['Neue Montreal']">
      <div className="logo"></div>
      <div className="links">
        {['Services','Our Works','About Us','Insights'].map((item,index)=>(<a key={index} className="text-md font-regular">{item}</a>))}
      </div>
    </div>
  );
};

export default Navbar;
