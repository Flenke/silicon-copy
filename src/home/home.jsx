import React from "react";
import Join from "./sections/join/join";
import Faq from "./sections/faq/faq";
import Reviews from "./sections/reviews/reviews";
import About from "./sections/about/about";
import Partners from "./sections/partners/partners";
import Features from "./sections/features/features";
import Intro from "./sections/intro/intro";
import How from "./sections/how/how";

export default function Home() {
  return (
    <>
      <Intro />
      <Partners />
      <div className="anchor" id="features"></div>
      <Features />
      <How />
      <About />
      <Reviews />
      <Faq />
      <Join />
    </>
  );
}
