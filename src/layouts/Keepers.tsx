import { useRef } from "react";
import { scrollAnimation } from "../helpers";

const Keepers = () => {
   const headerElement = useRef<HTMLDivElement>(null);
   const imageElement = useRef<HTMLDivElement>(null);

   window.addEventListener("scroll", () => {
      if (headerElement.current !== null && imageElement.current !== null) scrollAnimation([headerElement.current, imageElement.current], "moveIn");
   });

   return (
      <div className="keepers">
         <div ref={headerElement} className="keepers__header">
            <h2 className="keepers__title header-3">Our Keepers</h2>
            <p className="keepers__subtitle subtitle-3">
               Our beekeepers are responsible for the health of their bees and the honey they produce. They have to make sure that the hive is healthy, that there is enough food, and that there is no
               disease.
            </p>
         </div>
         <div className="keepers__images">
            <div ref={imageElement} className="keepers__image">
               <img src="/images/keeper-1.jpg" alt="keeper1" />
            </div>
         </div>
      </div>
   );
};

export default Keepers;
