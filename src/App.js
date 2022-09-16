import { Layout } from "components/layout";
import {
  BusinessTools,
  CountDown,
  Features,
  Laibrary,
  NewsLetter,
  Service,
  TestMonials,
} from "modules/main";

import "./modules/main/styles/index.scss";

function App() {
  return (
    <div className="app">
      <Layout>
        <main>
          <CountDown />
          <NewsLetter />
          <Features />
          <Service />
          <BusinessTools />
          <TestMonials />
        </main>
      </Layout>
    </div>
  );
}

export default App;
