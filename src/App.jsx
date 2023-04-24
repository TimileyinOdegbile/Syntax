import React from "react";
import {
  Header,
  AboutUs,
  Mission,
  Pricing,
  Drivers,
  Gallery,
  Testimonials,
  ContactUs,
  Footer
} from "./containers";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="syntax__home">
        <Header />
        </div>
        <AboutUs />
        <Mission />
        <Pricing />
        <Drivers />
        <Gallery />
        <Testimonials />
        <ContactUs />
        <Footer />
      </div>
    );
  }
}

export default App;
