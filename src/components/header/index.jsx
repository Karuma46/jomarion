import Logo from "assets/svg/logo.svg"

function MobileNav(){
    return(
        <>
            <div id="navButton">
                <span><i className="fas fa-bars"></i></span>
            </div>

            <div id="mobileNav">
                
            </div>
        </>
    )
}


function Header(){
    return(
        <div className="header d-flex align-items-center justify-content-between border-box px-5" id="header">
            <div className="logo">
                <div id="logoWrapper">
                    <img src= {Logo} alt="logo" />
                </div>
            </div>

            <nav className="nav d-flex justify-content-between" id="nav">
                <span className="mx-4"><a href="">Recipes</a></span>
                <span className="mx-4"><a href="">Video</a></span>
                <span className="mx-4"><a href="">Gallery</a></span>
                <span className="mx-4"><a href="">Cookouts</a></span>
                <span className="mx-4"><a href="">Cookouts</a></span>
                <span className="mx-4"><a href="">Cookouts</a></span>
            </nav>

            <div id="topbarSocials" className="d-flex justify-content-between">
                <span className="d-inline-block mx-2"><a href="#" ><i className="fab fa-md fa-instagram"></i> </a></span>
                <span className="d-inline-block mx-2"><a href="#" ><i className="fab fa-md fa-twitter"></i> </a></span>
                <span className="d-inline-block mx-2"><a href="#" ><i className="fab fa-md fa-youtube"></i> </a></span>
                <span className="d-inline-block mx-2"><a href="#" ><i className="fab fa-md fa-facebook"></i> </a></span>
            </div>

            <MobileNav/>
        </div>
    )
}

export default Header