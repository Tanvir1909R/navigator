import "./about.scss";

const About = () => {
  return (
    <section>
      <div className="container">
        <div className="about_wrapper">
          <div>
            <p>Hver er í rauninni að halda þetta?</p>
            <h2>Ég heiti Eyþór Jónsson</h2>{" "}
            <p>
              Mig langar að hjálpa þér að komast yfir múrinn sem gæti verið að
              halda þér aftur frá því að komast yfir milljón á mánuði sem
              sjálfstætt starfandi skapandi fagmaður.
            </p>
            <p>
              Undanfarin sjö ár, hef ég fengið tækifæri til að vinna með hátt í
              100 fyrirtækjum og einstaklingum. Hvort sem það eru fyrirtæki í
              kauphöllinni eða lítil fjölskyldufyrirtæki &nbsp;bæði hérlendis og
              erlendis
            </p>
            <p>
              Frá því að byrja sem sjálfstætt starfandi tökumaður yfir í að opna
              og reka mína eigin markaðsstofu og að byggja upp önnur fyrirtæki
              kemur reynslan mín gagnvart sjálfstætt starfandi skapandi
              fagmönnum frá ólíkum áttum.
            </p>
            <p>Ef þig langar til að skoða verkefnin mín ➔&nbsp;</p>{" "}
          </div>

          <div>
            <img src="./me.png" alt="my photo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
