import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
   const [burgerActive, setBurgerActive] = useState<boolean>(false);
   const burgerElement = useRef<HTMLDivElement>(null);
   const navigationElement = useRef<HTMLElement>(null);

   useEffect(() => {
      if (burgerElement.current !== null && navigationElement.current !== null) {
         burgerElement.current.onclick = () => {
            navigationElement.current?.classList.toggle("active");
            setBurgerActive(!burgerActive);
         };
      }
   }, [burgerActive]);

   return (
      <header className="header">
         <h1 className="header__logo header-3">
            <Link to="/">
               Honey <span>Delight</span>
            </Link>
         </h1>
         <nav ref={navigationElement} className="header__navigation">
            <ul className="header__navigation-list">
               <li className="header__navigation-item">
                  <Link to="/">Home</Link>
               </li>
               <li className="header__navigation-item">
                  <Link to="#">Products</Link>
               </li>
               <li className="header__navigation-item">
                  <Link to="#">About us</Link>
               </li>
               <li className="header__navigation-item">
                  <Link to="#">Contact</Link>
               </li>
            </ul>
         </nav>
         <div ref={burgerElement} className="header__burger">
            <div className="header__burger-line"></div>
            <div className="header__burger-line"></div>
            <div className="header__burger-line"></div>
         </div>
      </header>
   );
};

export default Header;
