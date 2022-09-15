import { LayoutContainer } from "components/layout";
import { v4 } from "uuid";

const newsLetters = [
  {
    id: v4(),
    img: "/newsletter-logo-1.png 2x",
    title: "Marketing Automation",
    text: "From open rates to conversion performance, get access to tons of data.",
  },
  {
    id: v4(),
    img: "/newsletter-logo-2.png 2x",
    title: "Experiments",
    text: "From sign up to sale track your contacts every move.",
  },
];

const NewsLetter = () => {
  return (
    <section className="newsletter">
      <LayoutContainer>
        <div className="newsletter-header">
          <h2 className="heading heading--big">
            More than just drips and newsletters
          </h2>
          <p className="text">
            awareness through email became a must-have, and our ESP wasn't
            cutting
          </p>
        </div>
      </LayoutContainer>
      <div className="main-container">
          <div className="newsletter-content">
            <h2 className="heading heading--medium">
              Drive 30-40% of your revenue with email marekiting
            </h2>
            <p className="text">
              Unlock customer insights to grow your business faster. Store all
              your customer data collected from storefront to marketing channels
              in one central hub far easy use in every strategy.
            </p>
            <div className="newsletter-list">
              {newsLetters?.map((item) => (
                <div key={item.id} className="newsletter-item">
                  <img
                    srcSet={item.img}
                    alt={item.title}
                    className="newsletter-logo"
                  />
                  <h4 className="heading heading--normal">{item.title}</h4>
                  <p className="text">{item.text}</p>
                  <a href="#!" alt="">
                    Read More
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="newsletter-image main-container-image">
            <img srcSet="/newsletter-img.png 2x" alt="" />
          </div>
        </div>
    </section>
  );
};

export default NewsLetter;
