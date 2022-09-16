import { FooterTop } from "modules/footer";
import "../../modules/footer/styles/index.scss";
import LayoutContainer from "./LayoutContainer";

const Footer = () => {
  return (
    <footer id="#footer" className="footer">
      <LayoutContainer>
        <FooterTop />
      </LayoutContainer>
    </footer>
  );
};

export default Footer;
