import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      {/* Product, id, title, price, rating, image */}
      <div className="home__row">
        <Product
          id="12321341"
          title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
          price={521.0}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
        />
        <Product
          id="12321342"
          title="Samsung Galaxy S21 Ultra 5G (Phantom Black, 12GB, 256GB Storage)"
          price={95399.0}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/714BBBtuMiL._SL1000_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="12321343"
          title="Bajaj Rex Mixer Grinder, 500W, 3 Jars (White)"
          price={2176.0}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/7176dXpdwrL._SL1500_.jpg"
        />
        <Product
          id="12321344"
          title="New Apple iMac with Retina 5K Display (27-inch, 8GB RAM, 3.1GHz 6-core 10th-Generation Intel Core i5 Processor, 256GB SSD Storage)"
          price={169899.0}
          rating={5}
          image="https://m.media-amazon.com/images/I/71XyLsP7WjL._AC_UY218_.jpg"
        />
        <Product
          id="12321346"
          title="CLOD College and Laptop Bag Casual Backpack School Bag Laptop Bag Laptop Backpack"
          price={699.0}
          rating={5}
          image="https://m.media-amazon.com/images/I/711OiPrnxNL._AC_UL320_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="12321345"
          title="SheetKart Cotton 144 TC Bedsheet (Blue_Single)"
          price={595.0}
          rating={4}
          image="https://m.media-amazon.com/images/I/A1bD9ur6IvL._AC_UL320_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
