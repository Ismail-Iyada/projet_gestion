import React from 'react';
import './home.css';
import cafe from '../../assets/icons/cafe.png';
import gare from '../../assets/icons/gare.png';
import hotels from '../../assets/icons/hotels.png';
import parking from '../../assets/icons/parking.png';
import shop from '../../assets/icons/shop.png';

const data = [
    {
        "image": cafe,
        "title": "Card 1 Title",
        "subtitle": "Card 1 Subtitle",
        "description": "Card 1 Description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris maximus dui vel est finibus, ac dignissim mi ullamcorper."
    },
    {
        "image": gare,
        "title": "Card 2 Title",
        "subtitle": "Card 2 Subtitle",
        "description": "Card 2 Description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris maximus dui vel est finibus, ac dignissim mi ullamcorper."
    },
    {
        "image": hotels,
        "title": "Card 1 Title",
        "subtitle": "Card 1 Subtitle",
        "description": "Card 1 Description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris maximus dui vel est finibus, ac dignissim mi ullamcorper."
    },
    {
        "image": parking,
        "title": "Card 2 Title",
        "subtitle": "Card 2 Subtitle",
        "description": "Card 2 Description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris maximus dui vel est finibus, ac dignissim mi ullamcorper."
    },
    {
        "image": shop,
        "title": "Card 1 Title",
        "subtitle": "Card 1 Subtitle",
        "description": "Card 1 Description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris maximus dui vel est finibus, ac dignissim mi ullamcorper."
    },
    {
        "image": shop,
        "title": "Card 2 Title",
        "subtitle": "Card 2 Subtitle",
        "description": "Card 2 Description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris maximus dui vel est finibus, ac dignissim mi ullamcorper."
    },
    {
        "image": shop,
        "title": "Card 1 Title",
        "subtitle": "Card 1 Subtitle",
        "description": "Card 1 Description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris maximus dui vel est finibus, ac dignissim mi ullamcorper."
    },
    {
        "image": shop,
        "title": "Card 2 Title",
        "subtitle": "Card 2 Subtitle",
        "description": "Card 2 Description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris maximus dui vel est finibus, ac dignissim mi ullamcorper.eeeeeeeeeee eee eee ee ee"
    }
]


const Home = () => {
    return (
        <div className='main'>
            <section className='top'>
                <h2 className="left">All categories</h2>
                {/* <h2 className="left">Toutes les catégories</h2> */}
                <button className="addBtn" type="submit" style={{ padding: '10px' }}><pre>+    Add category</pre></button>
                {/* <button className="addBtn" type="submit" style={{ padding: '10px' }}><pre>+    Ajouter catégorie</pre></button> */}
            </section>

            <p className="disc">Deserunt laborum dolore et quis aliqua. Reprehenderit adipisicing irure ullamco quis sint in sint ullamco laborum. Do nostrud enim excepteur laboris proident velit nisi eu deserunt cupidatat cupidatat. Id eu dolor do esse.</p>

            <section className="botHome">
                {data.map((item) => (
                    <div className="category" key={item.title}>
                        <div className="cardTop">
                            <img className="catImg" src={item.image} alt={item.title} />
                            <div className="catTitle">
                                <h2 style={{ fontSize: 'medium' }}>{item.title}</h2>
                                <h3 style={{ fontSize: 'small', color: '#eb6440' }}>{item.subtitle}</h3>
                            </div>
                        </div>
                        <div className="cardBot" >
                            <p className='catDescription' style={{ fontSize: 'small', color: 'rgba(0, 0, 0, 0.0.1);' }}>{item.description}</p>
                        </div>
                    </div>
                ))}
            </section>

        </div>
    );
};

export default Home;


















// import React, { useState, useEffect } from 'react';
// import Card from './Card';

// function BotSection() {
//   const [cardsData, setCardsData] = useState([]);

//   useEffect(() => {
//     // Make API request to fetch card data and update state
//     // For example:
//     fetch('https://example.com/api/cards')
//       .then(response => response.json())
//       .then(data => setCardsData(data));
//   }, []);

//   return (
//     <section className='bot'>
//       {cardsData.map(cardData => (
//         <Card key={cardData.id} data={cardData} />
//       ))}
//     </section>
//   );
// }

// export default BotSection;
