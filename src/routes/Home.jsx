import "../styles/home.css";

const Home = () => {
  return (
    <div className="container__home">
      <section className="container__home-text">
        <p>SO, YOU WANT TO TRAVEL TO</p>
        <h1>SPACE</h1>
        <p className="p-text">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </section>
      <div className="container__home-explorer">
        <button className="cirlce__explorer">
          <h2>EXPLORE</h2>
        </button>
      </div>
    </div>
  );
};

export default Home;
