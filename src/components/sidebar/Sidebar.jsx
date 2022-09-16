import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./styles/index.scss";

const sidebars = [
  { id: uuidv4(), title: "Home" },
  { id: uuidv4(), title: "Pricing" },
  { id: uuidv4(), title: "Reasources" },
  { id: uuidv4(), title: "Support" },
];

const Sidebar = React.forwardRef(({ showSidebar }, ref) => {
  const expandClass = "is-expand";

  useEffect(() => {
    const sideBar = document.querySelector(".menu");
    const overlay = document.createElement("div");
    overlay.setAttribute("id", "overlay");
    // overlay.classList.add("overlay");
    if (showSidebar) {
      sideBar?.classList.add(expandClass);
      console.log(sideBar?.classList.add(expandClass));
      // document.body.appendChild(overlay);
    } else {
      // const overlayWrapper = document.getElementById("overlay");
      // overlayWrapper?.parentNode?.removeChild(overlayWrapper);
      sideBar?.classList.remove(expandClass);
    }
  }, [showSidebar]);

  return (
    <ul className="menu" ref={ref}>
      {sidebars?.map((item) => (
        <li key={item.id} className="menu-item">
          <a href="#!" className="menu-link">
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );
});

export default Sidebar;
