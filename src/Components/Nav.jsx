function Nav(props) {
    const toggleMenu = (e) =>{
        e.target.classList.toggle('active');
        document.querySelector('nav .right').classList.toggle('active');
    }

    return(
        <nav>
            <a href="#1" className="logo">the best social media ever</a>
            <div className="right">
                <a href="#1" className="username">@giorgi0932</a>
                <a className="dot">·</a>
                <a href="#1" className="log_out">log out</a>
            </div>
            <button className="burger" onClick={toggleMenu}>≡</button>
        </nav>
    )
}

export default Nav;