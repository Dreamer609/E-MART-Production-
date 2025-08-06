import { Link } from "react-router-dom";
import styles from "./NavSearch.module.css"
import Icon from "@components/ui/Icon";
import InputBox from "./module/SearchBox";

const NavSearch = () => {
  return (
    <nav className={`${styles.navSearch} min-h-12 border-b-1`}>
      {/*Loacation Dropdown*/}
      <div className={`dropdown w-fit`}>Dropdown</div>

      {/*Search FC*/}
      <div className="SearchProduct">
        <InputBox
          buttonIcon={<Icon name="search" className="w-4 h-4" />}
          placeholder="Search..."
          aria-label="Search"
        />
      </div>

      {/*Search FC*/}
      <div className="product w-fit flex gap-6 mx-4">
        <Link to="/">
          <Icon name="wishlist" className="w-4 h-4" />
        </Link>
        <Link to="/">
          <Icon name="cart" className="w-4 h-4" />
        </Link>
      </div>
    </nav>
  );
}

export default NavSearch;
