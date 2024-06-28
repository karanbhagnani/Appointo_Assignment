import './Header.css';
function Header(){
    return(
        <div className="navBar">
        <img src="https://assets-global.website-files.com/602f6e4385f3c15b5ee4238a/607955a9d5e3528558cc00e1_side_panda-p-500.png" alt="Company logo"/>
        <div className="navItem">
            <div className="item">Menu</div>
            <div className="item">Contact Us</div>
            <div className="item share"><i className="fa-solid fa-arrow-up-right-from-square"></i> Share Link</div>
        </div>
        </div>
    )
}

export default Header;