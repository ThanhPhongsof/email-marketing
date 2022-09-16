import { IconSideBar } from "components/icon";
import { Sidebar } from "components/sidebar";
import { useClickOutSide } from "services/hooks";

const HeaderTop = () => {
  const {
    value: showSidebar,
    setValue: setShowSidebar,
    nodeRef,
  } = useClickOutSide("span");

  return (
    <div className="header-top">
      <a href="#!" className="header-logo">
        <img srcSet="/logo-icon.png 2x" alt="type email" />
        <span className="text-primary">Type Email</span>
      </a>
      <Sidebar showSidebar={showSidebar} ref={nodeRef} />
      <a href="#!" className="header-login">
        Log in
      </a>
      <span
        className="header-toogle"
        onClick={() => setShowSidebar(!showSidebar)}
      >
        <IconSideBar />
      </span>
    </div>
  );
};

export default HeaderTop;
