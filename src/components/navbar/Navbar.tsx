import "./navbar.scss"
import placeholder from "../../assets/TheHomeDepot.svg";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <img src={placeholder} alt=""/>
                <span>AlgoDepot</span>
            </div>
            <div className="icons">
                <img src={placeholder} alt="" className="icon"/>
                <img src={placeholder} alt="" className="icon"/>
                <img src={placeholder} alt="" className="icon"/>
                <div className="notification">
                    <img src={placeholder} alt=""/>
                    <span>1</span>
                </div>
                <div className="user">
                    <img src={placeholder} alt=""/>
                    <span>Admin</span>
                </div>
                <img src={placeholder} alt="" className="icon"/>
            </div>
        </div>
    )
}

export default Navbar