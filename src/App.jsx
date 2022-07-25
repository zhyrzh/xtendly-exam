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
      <div className="form"></div>
    </div>
  );
}

export default App;
