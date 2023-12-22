import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faChartSimple } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function SideMenu(props) {
  const setLogedState = props.setLogedState;

  return (
    <div className="SideMenu">
      <nav className="navBar">
        <Link to="/home" className="navItem">
          <FontAwesomeIcon className="navIcons" icon={faHouse} />
          <span className="hiddenText">Home</span>
        </Link>
        <Link to="/list" className="navItem">
          <FontAwesomeIcon className="navIcons" icon={faChartSimple} />
          <span className="hiddenText"> Market List</span>
        </Link>
        <Link to="/addperson" className="navItem">
          <FontAwesomeIcon className="navIcons" icon={faChartSimple} />
          <span className="hiddenText">Shop Assignment</span>
        </Link>
        <Link to="/map" className="navItem">
          <FontAwesomeIcon className="navIcons" icon={faChartSimple} />
          <span className="hiddenText">Map</span>
        </Link>
      </nav>

      <Link
        onClick={() => {
          setLogedState((prevState) => !prevState);
        }}
        to="/"
        className="dcBtn"
      >
        <FontAwesomeIcon
          className="navIcons"
          style={{ paddingLeft: "0" }}
          icon={faPowerOff}
        />
        <span className="hiddenText">Log out</span>
      </Link>
    </div>
  );
}

export default SideMenu;
