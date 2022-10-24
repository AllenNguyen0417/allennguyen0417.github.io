export function Project() {
  return (
    <div class="experience">
      <h1 className="experience-title">Projects</h1>
      <div className="experience-container">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Rate My Clubs</h3>
            <span>Ruby On Rails • HTML • CSS • Javascript</span>
            <p>
              Like Rate My Professors, but with clubs! This web service allows
              users to create and view clubs, add and view ratings, and search
              and filter clubs based on category or name. This application is
              for a semester-long group project at California State Polytechnic
              University, Pomona. <br />
              Demo:{" "}
              <a href="https://lit-savannah-91482.herokuapp.com">
                https://lit-savannah-91482.herokuapp.com
              </a>
            </p>
          </div>
        </div>

        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Self Music Mobile App</h3>
            <span>Flutter • Dart • Firebase</span>
            <p>
              Personal project in researching mobile app development using
              Flutter. <br />
              Demo:{" "}
              <a href="https://github.com/AllenNguyen0417/SelfMusic">
                https://github.com/AllenNguyen0417/SelfMusic
              </a>
            </p>
            <p></p>
          </div>
        </div>

        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>E-Commerce Website</h3>
            <span>Java • Spring Boot • ReactJS • MySQL </span>
            <p>
              Develop and deploy a grocery eCommerce web application composed:
              <br />
              • Inventory: Stores the information about every product
              <br />
              • Marketplace: The customer-facing part of the application, where
              users can browse, add items to their cart, and purchase them
              <br />
              • Warehouse Management: Creates and maintains orders from the
              Markeplace and provides them to Warehouse
              <br />
              • Order Management: Service that tracks pending orders, and
              analyzes the history of orders and products to generate insights
              <br />
              Design a REST APIs for back end that transferring data to MySQL
              using Spring Boot <br />
              Design and develop the entire front-end using ReactJS <br />
              Demo: <br />• Front end:{" "}
              <a href="https://github.com/AllenNguyen0417/eCommerce-Frontend">
                https://github.com/AllenNguyen0417/eCommerce-Frontend
              </a>
              <br />• Back end:{" "}
              <a href="https://github.com/AllenNguyen0417/eCommerce-Backend">
                https://github.com/AllenNguyen0417/eCommerce-Backend
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
