import { LayoutContainer } from "components/layout";
import { v4 } from "uuid";

const countDowns = [
  { id: v4(), title: "1700+", text: "Companies using Sendlance" },
  { id: v4(), title: "40 million+", text: "Emails sent daily" },
  { id: v4(), title: "20.000+", text: "Users on sendlance" },
];

const CountDown = () => {
  return (
    <section className="countdown mb-40">
      <LayoutContainer>
        <div className="countdown-list">
          {countDowns?.map((item) => (
            <div key={item.id} className="countdown-item">
              <h3 className="countdown-title">{item.title}</h3>
              <p className="countdown-text">{item.text}</p>
            </div>
          ))}
        </div>
      </LayoutContainer>
    </section>
  );
};

export default CountDown;
