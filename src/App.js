import { Article, Brand, Cta, Feature, Navbar } from "./components/index";
import {
  Blog,
  Features,
  Footer,
  Header,
  Possibility,
  WhatGPT3,
} from "./containers/index";

function App() {
  return (
    <div className="App">
      <div className="gradiant__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
