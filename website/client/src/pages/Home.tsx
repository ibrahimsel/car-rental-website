import React from "react";


function Home() {
  return (
    <div>
      <div className="home-info-container">
        <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit</h1>
        <p className="home-info-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          officia quod quasi libero sed qui ea vero accusamus, enim dolorum
          consequuntur ex nostrum laudantium. Sequi illo laboriosam soluta
          accusamus explicabo totam, natus rerum cupiditate reprehenderit
          mollitia est, similique id fugiat nostrum laborum ut nobis nesciunt
          nisi quo! Necessitatibus ea libero aspernatur ipsum alias voluptate
          debitis voluptatem inventore!
        </p>
      </div>
      <div className="brands">
        {/* <img className="brand-icon" src={require("../assets/icons/audi-icon.png")} alt="Audi" />
        <img className="brand-icon" src={require("../assets/icons/tesla-icon.png")} alt="Tesla" />
        <img className="brand-icon" src={require("../assets/icons/mercedes-icon.png")} alt="Mercedes" /> */}
      </div>
    </div>
  );
}

export default Home;