import { HeaderImage, HeaderMain, HeaderTop } from "modules/header";
import "../../modules/header/styles/index.scss";
import LayoutContainer from "./LayoutContainer";

const Header = () => {
  return (
    <header id="#header" className="header mb-40">
      <LayoutContainer>
        <HeaderTop />
        <HeaderMain />
        <HeaderImage />
      </LayoutContainer>
    </header>
  );
};

export default Header;
