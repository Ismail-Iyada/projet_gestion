import shopIcon from "../../assets/icons/shop.png";

function Main(props) {
  const souks = [
    "Market Plaza 1",
    "Market Plaza 2",
    "Market Plaza 3",
    "Market Plaza 4",
    "Market Plaza 5",
    "Market Plaza 6",
    "Market Plaza 7",
    
  ];

  return (
    <div className="main Liste">
      <section className="top">
        <img className="shopIcon" src={shopIcon} alt="shopIcon" />
        <div className="left">
          <h2>Selected category</h2>
          <h5 className="shopCount">Count: 07</h5>
        </div>
        <button className="addBtn" type="submit">
          <pre>+ Add</pre>
        </button>
      </section>

      <p className="disc">
        Deserunt laborum dolore et quis aliqua. Reprehenderit adipisicing irure
        ullamco quis sint in sint ullamco laborum. Do nostrud enim excepteur
        laboris proident velit nisi eu deserunt cupidatat cupidatat. Id eu dolor
        do esse.
      </p>

      <section className="bot">
        {souks.map((souk, index) => (
          <h4 key={index} className="souk">
            {souk}
          </h4>
        ))}
      </section>
    </div>
  );
}

export default Main;
