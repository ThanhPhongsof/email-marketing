import { Sidebar } from "components/sidebar";

const HeaderTop = () => {
  return (
    <div className="header-top">
      <a href="#!" className="header-logo">
        <img srcSet="/logo-icon.png 2x" alt="type email" />
        <span className="text-primary">Type Email</span>
      </a>
      <Sidebar />
      <a href="#!" className="header-login">
        Log in
      </a>
    </div>
  );
};

export default HeaderTop;
