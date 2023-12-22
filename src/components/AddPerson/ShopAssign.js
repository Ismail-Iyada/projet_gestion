import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function ShopAssign() {
  return (
    <section className="shopAssign">
      <h2
        style={{
          color: "#497174",
          textAlign: "center",
          fontSize: "125%",
          marginBottom: "1vh",
        }}
      >
        Shop Assignment
      </h2>

      <section
        className="marchand"
        style={{ marginBottom: "0", paddingBottom: "0" }}
      >
        <h3 style={{ marginLeft: "8.5%" }}>Merchant</h3>

        <div className="flexContainer">
          <div className="search-bar">
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
          <div className="marchandItem flexItem">
            <img className="merchantPfp" alt=""></img>
            <div className="merchantId">
              <h4 className="merchantName">John Doe</h4>
              <h4 className="merchantCni">ID123</h4>
            </div>
            <h5 className="editIcon">
              <FontAwesomeIcon
                style={{ paddingRight: "5%" }}
                icon={faPenToSquare}
              />
              Edit
            </h5>
            <h5 className="deleteIcon">
              <FontAwesomeIcon
                style={{ paddingRight: "5%" }}
                icon={faTrashAlt}
              />
              Delete
            </h5>
          </div>
          <div className="marchandItem flexItem">
            <img className="merchantPfp" alt=""></img>
            <div className="merchantId">
              <h4 className="merchantName">John Doe</h4>
              <h4 className="merchantCni">ID123</h4>
            </div>
            <h5 className="editIcon">
              <FontAwesomeIcon
                style={{ marginRight: "5%" }}
                icon={faPenToSquare}
              />
              Edit
            </h5>
            <h5 className="deleteIcon">
              <FontAwesomeIcon
                style={{ marginRight: "5%" }}
                icon={faTrashAlt}
              />
              Delete
            </h5>
          </div>
        </div>
      </section>

      <section className="boutique" style={{ marginTop: "0", paddingTop: "0" }}>
        <h3 style={{ marginLeft: "8.5%" }}>Shops</h3>
        <div className="flexContainer">
          <div className="search-bar">
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
          <div className="boutiqueItems">
            <div className="boutiqueItem flexItem">
              <h4 className="boutiquetName">Market Plaza</h4>
              <h4 className="BoutiqueZone">Zone 02</h4>
              <h4 className="BoutiqueFloor">Floor 01</h4>
              <h4 className="BoutiqueId">No. 2136</h4>
            </div>
            <div className="boutiqueItem flexItem">
              <h4 className="boutiquetName">Market Plaza</h4>
              <h4 className="BoutiqueZone">Zone 02</h4>
              <h4 className="BoutiqueFloor">Floor 01</h4>
              <h4 className="BoutiqueId">No. 2136</h4>
            </div>
          </div>
        </div>
      </section>

      <section className="smFf">
        <button className="smBtn" type="submit">
          Assign
        </button>
        <button className="ffBtn" type="submit">
          Cancel
        </button>
      </section>
    </section>
  );
}

export default ShopAssign;
