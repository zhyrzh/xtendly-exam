import logo from "/logo.png";

function App() {
  return (
    <div className="home">
      <div className="home__content">
        <h1 className="home__text">
          <img src={logo} alt="" />
          <span className="home__small-font">The</span>
          <br />
          <span className="home__big-font">Fastest, Most Accurate</span>
          <br />
          <span className="home__small-font">Way to Close Your Books!</span>
        </h1>
      </div>
      {/* Form */}
      <div className="home__form">
        <div className="home__form-left-title">
          <h1 className="home__form-left-title-primary">Schedule A Demo</h1>
          <h3 className="home__form-left-title-secondary">
            Learn More About FloQast
          </h3>
        </div>
        <div className="home__form-content">
          <h1 className="home__form-content-title">
            Learn How FloQast Can Improve Your Month-End
          </h1>
          <div className="home__form-inputs">
            <input
              className="home__input"
              type="text"
              placeholder="First Name"
            />
            <input className="home__input" type="text" placeholder="Email" />
            <button className="home__input-submit">Schedule Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
