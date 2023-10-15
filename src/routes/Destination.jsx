import "../styles/destination.css";
import data from "../data/data.json"
import moon from "../images/destination/image-moon.png"

const Destination = () => {

  const handleClick = (link) => {
    setActiveLink(link);
  };

  return (
    <section className="container_destination">
    
      <section className="destination__title">
        <p>0</p>
        <h2>Pick your destination</h2>
      </section>

      <section className="info_of_planet">
        <img src={moon} alt="" />
        <div className="info">
          <ul>
            {data.destinations.map((planet) => (
              <li  
              key={planet.name}>{planet.name}</li>
            ))}
          </ul>
        </div>
      </section>
      
    </section>
  );
};

export default Destination;
