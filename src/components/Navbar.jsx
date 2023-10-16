import { useEffect, useState } from "react";
import "../styles/nabvar.css";
import icon from "../assets/shared/logo.svg";
import { Link } from "react-router-dom";
import { useBgStore } from "../store/useBgStore";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(null);
console.log(activeLink);
  const handleClick = (index) => {
    setActiveLink(index);
  };
  const changeBg = useBgStore((state) => state.changeBg);

  useEffect(() => {
    changeBg(activeLink);
  }, [activeLink]);

  return (
    <div className="main__container-navbar">
      <div className="container-navbar">
        <Link to="/" className="container__icon-nabvar">
          <img src={icon} alt="" />
        </Link>
        <div className="line__nabvar"></div>
        <div className="container__nabavar-list">
          <ul>
            {["HOME", "DESTINATION", "CREW", "TECHNOLOGY"].map(
              (link, index) => (
                <Link
                  to={link === "HOME" ? "/" : `/${link.toLowerCase()}`}
                  key={index}
                  onClick={() => handleClick(index)}
                  className={activeLink === index ? "active" : ""}
                >
                  <span>0{index}</span> {link}
                </Link>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
