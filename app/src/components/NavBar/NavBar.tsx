import React from "react"

interface NavBarProps {
    userPic: string;
}

const NavBar = ({ userPic }: NavBarProps) => {
    return (
        <nav className="navbar">
            <div className="navbar-wrapper">
                <img src="assets/logo.png" className="brand-img" alt="" />
                <input type="text" className="search-box" placeholder="search" />
                <div className="nav-items">
                    <img src="assets/home.png" className="icon" alt="" />
                    <img src="assets/messenger.png" className="icon" alt="" />
                    <img src="assets/add.png" className="icon" alt="" />
                    <img src="assets/explore.png" className="icon" alt="" />
                    <img src="assets/like.png" className="icon" alt="" />
                    <div className="icon user-profile" />
                </div>
            </div>
        </nav>
    )
}

export default NavBar