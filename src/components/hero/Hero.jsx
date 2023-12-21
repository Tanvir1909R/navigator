import Work from "../work/Work";
import "./hero.scss";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero_wrapper">
          <div className="hero_title">
            <p>
              Sannreyndar aðferðir til að byggja upp farsæla freelance starfsemi
            </p>
            <h1>
              Fyrir skapandi fagmenn sem vilja hefja <br /> og byggja upp freelance
              starfsemi
            </h1>
          </div>
          <Work/>
        </div>
      </div>
    </section>
  );
};

export default Hero;
