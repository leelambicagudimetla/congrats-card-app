const element = (
  <div className="back-ground-container">
    <h1 className="congratulations-heading">Congratulations</h1>

    <div className="mini-container">
      <img
        className="img-photo"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
      />
      <h1 className="name-heading">Kiran V</h1>
      <p className="paragraph">
        Vishnu Institute of Computer Education and Technology, Bhimavaram.{" "}
      </p>
      <img
        className="img-photo"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
