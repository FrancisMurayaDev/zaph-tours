import Video from "../../../public/cheetah-video.mp4";
import "./Home.css"
import { Fragment } from "react";
function Home() {
  return (
    <Fragment>
      <HeroSection />
    </Fragment>
  );
}

function HeroSection () {
  return (
    <section className="hero-section">
      <video autoPlay muted loop playsInline className="background-video">
  <source src={Video} type="video/mp4" />
  Your browser does not support the video tag.
</video>

      <div className="overlay"></div>
      <div className="hero-text">
        <h2>Travel <span> * </span> Discover <span> * </span> Belong</h2>
      </div>
    </section>
  )
}

export default Home;
