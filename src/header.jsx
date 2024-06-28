import './Header.css';
function Header(){
    return(
        <div className="navBar">
        <img src="public/companyLogo.png" alt="Company logo"/>
        <div className="navItem">
            <div className="item">Menu</div>
            <div className="item">Contact Us</div>
            <div className="item share"><i className="fa-solid fa-arrow-up-right-from-square"></i> Share Link</div>
        </div>
        </div>
    )
}

export default Header;