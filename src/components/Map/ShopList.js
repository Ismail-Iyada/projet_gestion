import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faTrashAlt,
  faFilter,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

const ShopList = () => {
  return (
    <section className="shopList">
      <h2
        style={{
          fontWeight: "lighter",
          color: "#000000",
          borderBottom: "5px solid #497174",
          width: "fit-content",
        }}
      >
        assignment list
      </h2>

      <div className="filterBar">
        <span
          style={{
            flex: "1",
            color: "rgba(73, 113, 116, 0.5)",
            marginLeft: "1%",
          }}
        >
          <FontAwesomeIcon style={{ margin: "0 10%" }} icon={faFilter} />
          Filter
        </span>
        <section className="filters" style={{ flex: "5" }}>
          <span className="filter" /*onClick={() => setFilter("all")}*/>
            All
          </span>
          <span className="filter" /*onClick={() => setFilter("marchand")}*/>
            merchant{" "}
          </span>
          <span className="filter" /*onClick={() => setFilter("boutiques")}*/>
            Shops
          </span>
        </section>
        <div
          className="search-bar"
          style={{ flex: "4", backgroundColor: "#ffffff", marginRight: "2%" }}
        >
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input
            className="searchBoutique"
            id="shopSearcher"
            name="shopSearcher"
            type="search"
            placeholder="Search here..."
            /*onChange={(e) => setLastName(e.target.value)}*/
          />
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Shop</th>
            <th>Zone</th>
            <th>Floor</th>
            <th>Merchant</th>
            <th>Status</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 5 }).map((_, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>MB001265</td>
              <td>01</td>
              <td>02</td>
              <td>fm200021</td>
              <td>Valid</td>
              <td>
                <button
                  className="editIcon"
                  style={{
                    color: "#ffffff",
                    backgroundColor: "#1D72B8",
                    borderStyle: "none",
                    borderRadius: "5px",
                    width: "80%",
                  }}
                >
                  <FontAwesomeIcon
                    icon={faPenToSquare}
                    style={{ marginRight: "7.5px" }}
                  />
                  Edit
                </button>
              </td>
              <td>
                <button
                  className="deleteIcon"
                  style={{
                    color: "#ffffff",
                    backgroundColor: "#BE1622",
                    borderStyle: "none",
                    borderRadius: "5px",
                    width: "80%",
                  }}
                >
                  <FontAwesomeIcon
                    icon={faTrashAlt}
                    style={{ marginRight: "7.5px" }}
                  />
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default ShopList;
