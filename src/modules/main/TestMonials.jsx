import { IconStar } from "components/icon";
import { LayoutContainer } from "components/layout";
import { v4 } from "uuid";

const TestMonials = () => {
  return (
    <section className="testmonials">
      <LayoutContainer>
        <div className="testmonials-header">
          <h2 className="heading heading--big">
            See what our customer have to say
          </h2>
        </div>
        <div className="testmonials-main">
          <div className="testmonials-image">
            <img
              srcSet="/testmonials-img.png 2x"
              alt="See what our customer have to say"
            />
          </div>
          <div className="testmonials-content">
            <p className="testmonials-text">
              "
              <span>
                New 2022, we sent a few email blasts with MailChimp here and
                there, but it wasn't a focus. Once we shiftedaway from
                retail-only sales to eCornmerce soles, driving customer
                awareness through email became a must-have, and our ESP wasn't
                cutting
              </span>
              "
            </p>
            <h4 className="testmonials-author">
              Lello Mhoury. Crecter of Marketing
            </h4>
            <div className="testmonials-stars">
              {new Array(5).fill(0).map(() => (
                <IconStar key={v4()}></IconStar>
              ))}
            </div>
            <p className="testmonials-rating">4.5 Rating Capture</p>
          </div>
        </div>
      </LayoutContainer>
    </section>
  );
};

export default TestMonials;
