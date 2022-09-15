import { v4 as uuidv4 } from "uuid";
import "./styles/index.scss";

const sidebars = [
  { id: uuidv4(), title: "Home" },
  { id: uuidv4(), title: "Pricing" },
  { id: uuidv4(), title: "Reasources" },
  { id: uuidv4(), title: "Support" },
];

const Sidebar = () => {
  return (
    <ul className="menu">
      {sidebars?.map((item) => (
        <li key={item.id} className="menu-item">
          <a href="#!" className="menu-link">
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Sidebar;
