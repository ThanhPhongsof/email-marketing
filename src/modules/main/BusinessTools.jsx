import { LayoutContainer } from "components/layout";

const BusinessTools = () => {
  return (
    <section className="business">
      <LayoutContainer>
        <div className="business-main">
          <div className="business-content">
            <h2 className="heading heading--big">
              Join forces with your favorite business tools
            </h2>
            <p className="text">
              awareness through email became a must-have, and our ESP wasn't
              cutting
            </p>
            <a href="#!" className="button button--primary" alt="">
              <span>See imagradtions</span>
            </a>
          </div>
          <div className="business-image">
            <img
              srcSet="/business-img.png 2x"
              alt="Join forces with your favorite business tools"
            />
          </div>
        </div>
      </LayoutContainer>
    </section>
  );
};

export default BusinessTools;
