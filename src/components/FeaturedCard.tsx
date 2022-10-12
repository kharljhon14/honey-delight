import { Link } from "react-router-dom";
import { featuredCards } from "../data";

const FeaturedCard = () => {
   const renderFeaturedCards = featuredCards.map((card) => {
      return (
         <div key={card.title} className="card">
            <div className="card__image">
               <img src={`/images/${card.image}`} alt={card.title} />
            </div>
            <div className="card__content">
               <h3 className="card__title header-5">{card.title}</h3>
               <p className="card__subtitle">{card.subtitle}</p>
               <Link to="#">Read More</Link>
            </div>
         </div>
      );
   });

   return <>{renderFeaturedCards}</>;
};

export default FeaturedCard;
