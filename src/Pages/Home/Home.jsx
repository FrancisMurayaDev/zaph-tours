import Video from "../../../public/cheetah-video.mp4";
import "./Home.css";
import { Fragment } from "react";
import SectionHeader from "../../Components/SectionHeader/SectionHeader";

function Home() {
  return (
    <Fragment>
      <HeroSection />
      <SectionHeader h2="About Us" text="A Community of Luxury Travelers" />
      <AboutUsDescription />
    </Fragment>
  );
}

function HeroSection() {
  return (
    <section className="hero-section">
      <video autoPlay muted loop playsInline className="background-video">
        <source src={Video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="overlay"></div>
      <div className="hero-text">
        <h2>
          Travel <span> * </span> Discover <span> * </span> Belong
        </h2>
      </div>
    </section>
  );
}

function AboutUsDescription() {
  return (
    <div className="about-us-text-container">
      <p className="about-us-text">
        Zaph Tours is a trusted Community of modern luxury travelers. Find
        Inspiration, book unique journeys, connect with like minded members.
      </p>
      <div className="about-us-ctn">
        <img src="../../src/assets/about-us-img.jpg" alt="safari-photo" />
        <a href="#">join us</a>
      </div>
    </div>
  );
}

export default Home;
