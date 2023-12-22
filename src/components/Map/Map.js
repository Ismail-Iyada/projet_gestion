import React from "react";
import ShopList from "./ShopList";
import "./map.css";
import picture from "../../assets/images/graphPic.jpg";

const Map = () => {
  return (
    <div className="main">
      <section className="soukMap">
        <article className="soukInfos">
          <h1 className="soukName">Market Plaza</h1>
          <h6 className="shopCount">
            Total number of shops:{" "}
            <span
              style={{
                fontSize: "xx-large",
                color: "#eb6440",
                marginLeft: "10px",
                fontWeight: "bolder",
              }}
            >
              206
            </span>
          </h6>
        </article>
        <p className="soukDescription">
          Ut irure id in eu mollit do eiusmod aute exercitation officia nostrud
          ex. Dolore eiusmod labore ex ea adipisicing non deserunt elit non
          incididunt eu ea. Aute dolor consequat aliquip veniam aliqua fugiat
          veniam ad velit dolore elit tempor. Aute Lorem anim voluptate in
          cupidatat est eu proident incididunt. Lorem ut nostrud irure et nulla
          laborum. Aute laboris voluptate minim anim magna officia ullamco id
          consequat.
        </p>
        <img className="mapPic" src={picture} alt="Souk Map"></img>
      </section>
      <ShopList />
    </div>
  );
};

export default Map;
