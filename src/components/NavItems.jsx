import { useState } from "react";
import { NavLink, Link } from "react-router";

function NavItems({ menu }) {
  const [activeTab, setActiveTab] = useState("Dashboard");

  return (
    <ul className="flex gap-x-8 text-black">
      {menu.map((item) => {
        return (
          <NavLink
            key={item.title}
            to={item.link}
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setActiveTab(item.title)}
          >
            {item.title}
          </NavLink>
        );
      })}
    </ul>
  );
}

export default NavItems;
