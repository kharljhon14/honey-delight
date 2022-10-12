import { Link } from "react-router-dom";

const Header = () => {
   return (
      <header className="header">
         <h1 className="header__logo header-3">
            <Link to="/">
               Honey <span>Delight</span>
            </Link>
         </h1>
         <nav className="header__navigation">
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
         <div className="header__burger">
            <div className="header__burger-line"></div>
            <div className="header__burger-line"></div>
            <div className="header__burger-line"></div>
         </div>
      </header>
   );
};

export default Header;
