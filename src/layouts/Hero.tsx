import React from "react";
import Header from "./Header";

const Hero = () => {
   return (
      <div className="hero">
         <Header />
         <div className="hero__content">
            <h1 className="hero__title header-1">Honey thats Right For you</h1>
            <p className="hero__subtitle subtitle-3">Have honey your way</p>
         </div>
         <svg className="hero__icon">
            <use xlinkHref="svgs/symbol-defs.svg#icon-circle-down"></use>
         </svg>
      </div>
   );
};

export default Hero;
