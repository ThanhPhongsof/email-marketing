import { IconMail, IconPopups, IconSMS } from "components/icon";
import { LayoutContainer } from "components/layout";
import { v4 } from "uuid";

const services = [
  {
    id: v4(),
    icon: <IconMail />,
    title: "Email Marketing",
    desc: "Set up standing order in-app, and send money to any other bank account instantly",
  },
  {
    id: v4(),
    icon: <IconSMS />,
    title: "SMS Marketing",
    desc: "Manage your account from your phone or computer. Do everything you need from the app.",
  },
  {
    id: v4(),
    icon: <IconPopups />,
    title: "Intellegent pop ups",
    desc: "Your bank account lets you easily lock your card in the app, and later reorder it witha tap of a button",
  },
];

const Service = () => {
  return (
    <section className="service mb-40">
      <LayoutContainer>
        <div className="service-header">
          <h2 className="heading heading--big">Our some service</h2>
        </div>
        <div className="service-main">
          <div className="service-list">
            {services?.map((item) => (
              <div key={item.id} className="service-item">
                <div className="service-icon">{item.icon}</div>
                <h3 className="heading heading--normal">{item.title}</h3>
                <p className="text">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </LayoutContainer>
    </section>
  );
};

export default Service;
