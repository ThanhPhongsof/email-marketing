const Features = () => {
  return (
    <section className="features">
      <div className="main-container">
        <div className="features-image main-container-image">
          <img
            srcSet="/features-img.png 2x"
            alt="Create raving fans that keep buying over and over you get the point."
          />
        </div>
        <div className="features-content">
          <h4 className="heading heading--medium">
            Create raving fans that keep buying over and over you get the point.
          </h4>
          <p className="text text--first">
            Unlock customer insights to grow your business faster. Store all
            your customer data collected from storefront to marketing channels
            in one central hub far easy use in every strategy.
          </p>
          <p className="text text--secondary">
            Our open rate has tripled and our click rate on links is up at least
            15%.
          </p>
          <a href="#!" className="button button--primary" alt="">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;
