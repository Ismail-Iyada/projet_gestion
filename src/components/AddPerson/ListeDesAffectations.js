import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faTrashAlt,
  faFilter,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

const ListeDesAffectations = () => {
  // const filters = [
  //     { label: "All", value: "all" },
  //     { label: "Marchand", value: "marchand" },
  //     { label: "Boutiques", value: "boutiques" },
  // ]

  return (
    // <section className="assigneeList">

    // </section>

    <section className="assigneeList" style={{ width: "100%" }}>
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
            Merchant
          </span>
          <span className="filter" /*onClick={() => setFilter("boutiques")}*/>
            Shop
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
            <th>Last Name</th>
            <th>First Name</th>
            <th>Date of Birth</th>
            <th>Phone</th>
            <th>ID Card</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 5 }).map((_, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>Doe</td>
              <td>John</td>
              <td>ABC123456</td>
              <td>555-555-5555</td>
              <td>ID123</td>

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

export default ListeDesAffectations;
