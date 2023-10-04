import { Link } from "react-router-dom";
import "./menu.scss";
import placeholder from "../../assets/TheHomeDepot.svg"
import { menu } from "../../data.ts";

const Menu = () => {
  return (
  <div className="container">
    <div className="menu">
      <div className="logo">
        <img src={placeholder} alt=""/>
        <span>AlgoDepot</span>
      </div>
      {menu.map((item) => (
        <div className="item" key={item.id}>
          <span className="title">{item.title}</span>
          {item.listItems.map((listItem) => (
            <Link to={listItem.url} className="listItem" key={listItem.id}>
              <img src={placeholder} alt="" />
              <span className="listItemTitle">{listItem.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  </div>
  );
};
export default Menu;
