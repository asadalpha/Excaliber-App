import React from "react";

const Navbar = () => {
  return (
    <div className="w-full px-20 py-8 font-['Neue Montreal'] flex items-center justify-between">
      <div className="logo">
        <img  src="https://img.icons8.com/?size=100&id=U58b026iaG3k&format=png&color=000000" alt="logo" className="w-10" />
      </div>
      <div className="links flex gap-10">
        {["Services", "Our Works", "About Us", "Insights","Contact"].map(
          (item, index) => (
            <a key={index} className={`text-lg font-light capitalize ${index === 4 && "ml-32"}`}>
              {item}
            </a>
          )
        )}
      </div>
    </div>
  );
};

export default Navbar;
