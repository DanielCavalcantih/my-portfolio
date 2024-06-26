import "../styles/softskills.css";

function SoftSkills() {
  return (
    <section className="soft-skills" id="soft-skills">
      <div className="container-gif-skills">
        <div className="container-list-title">
          <div className="container-img-title">
            <h2
              data-aos="fade-right"
              ata-aos-delay="300"
              data-aos-duration="800"
            >
              {"<Soft Skills/>"}
            </h2>
            <img
              data-aos="zoom-in"
              data-aos-duration="800"
              data-aos-delay="500"
              src="https://miro.medium.com/max/1000/0*6HsfF93BrufIIiSX"
              alt=""
            />
          </div>
          <ul className="soft-list">
            <li
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-delay="500"
            >
              <h3>Communication</h3>
              <p>
                Communication is extremely important in the workplace, I tend to
                be communicative with my development team.
              </p>
            </li>
            <li
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-delay="700"
            >
              <h3>Self-management</h3>
              <p>
                Effectively control my behaviors in the face of emotional
                triggers.
              </p>
            </li>
            <li
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-delay="900"
            >
              <h3>Leadership</h3>
              <p>
                I always seek to influence and lead my team in the fight for a
                same objective, always counting on the participation of everyone
                and opening doors so that the team can participate in the
                process.
              </p>
            </li>
            <li
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-delay="1100"
            >
              <h3>Empathy</h3>
              <p>
                I always try to feel what someone else would feel if they were
                in the same situation she experienced.
              </p>
            </li>
            <li
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-delay="1300"
            >
              <h3>Flexibility and Resilience</h3>
              <p>
                I have a high ability to adapt to changes that occur. occur in
                my life.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default SoftSkills;
