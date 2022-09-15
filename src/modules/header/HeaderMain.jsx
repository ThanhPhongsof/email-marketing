import { IconPlay } from "components/icon";

const HeaderMain = () => {
  return (
    <div className="header-main">
      <h1 className="header-heading text-primary">
        Online shoppers into loyal, lifetime customers with email & sms
        marketing
      </h1>
      <div className="header-buttons">
        <a href="#!" className="header-started button button--primary">
          Get Started
        </a>
        <a href="#!" className="header-works">
          <span>How it works</span>
          <span className="header-works-icon">
            <IconPlay />
          </span>
        </a>
      </div>
    </div>
  );
};

export default HeaderMain;
