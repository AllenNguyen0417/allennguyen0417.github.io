import "./Experience.css";

export function Experience() {
  return (
    <div class="experience">
      <h1 className="experience-title">Timeline</h1>
      <div className="experience-container">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>April 26, 2017</h3>
            <span>Very special day</span>
            <p>
              My first day came to the United States without anything. I have to
              start studying ESL (English as a Second Language) in adult school.
              I also have to work in a restaurant every weekends to help with my
              family's expense. Everything is new and difficult in the first
              year.
            </p>
          </div>
        </div>

        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>
              <bdi>2018 - 2020</bdi>
            </h3>
            <span>East Los Angeles College</span>
            <p>
              Starting community college after one year of staying in adult
              school. My life slowly getting better because now I can
              communicate with people in English and I also can drive myself. It
              was a great experience.
            </p>
            <p></p>
          </div>
        </div>

        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2020-2022</h3>
            <span>Cal Poly Pomona</span>
            <p>
              Transferring to a 4 years college after completing community
              college. While I was able to get through the first 2 years in
              community college fairly easily, 2 years later in university
              really asked me to put more effort to get good grades in classes
              and took more time on group projects. That was totally a new and
              great experience here.
            </p>
          </div>
        </div>
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>May 22, 2022</h3>
            <span>Graduate - Commencement date</span>
            <p>
              Finally, after 4 years of working hard, I can complete my
              Bachelor's Degree on time with a GPA of 3.85. I am not the best
              person, but I have tried my best to make the right decision, and I
              am really proud of myself.
            </p>
          </div>
        </div>
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>July 11, 2022</h3>
            <span>Nisum</span>
            <p>
              My first job ever in my life. <br /> Marriage to a person that I
              love and earn money from a job that I love. Those are the best
              things in my life
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
