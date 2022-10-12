import { useRef } from "react";
import FeaturedCard from "../components/FeaturedCard";
import { scrollAnimation } from "../helpers";

const Featured = () => {
   const headerElement = useRef<HTMLDivElement>(null);
   const cardsElement = useRef<HTMLDivElement>(null);

   window.addEventListener("scroll", () => {
      if (headerElement.current !== null && cardsElement.current !== null) scrollAnimation([headerElement.current, cardsElement.current], "fadeIn");
   });

   return (
      <div className="featured">
         <div ref={headerElement} className="featured__header">
            <h2 className="featured__title header-3">Our Honey</h2>
            <p className="featured__subtitle subtitle-3">
               We are proud to say that we have never used any pesticides or herbicides on our bees and plants, and we have never taken any shortcuts when it comes to harvesting our honey products. We
               also pride ourselves on being a family-owned operation, and all of our employees work side by side with their families, so they know the importance of quality control.
            </p>
         </div>
         <div ref={cardsElement} className="featured__cards">
            <FeaturedCard />
         </div>
      </div>
   );
};

export default Featured;
