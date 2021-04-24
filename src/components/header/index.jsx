import Logo from "assets/svg/logo.svg"
import LogoAlt from "assets/svg/logo-white.svg"

function MobileNav(){
    return(
        <>
            <div id="navButton">
                <span><i className="fas fa-bars"></i></span>
            </div>

            <div id="mobileNav" className="p-3 border-box">
                <div id="mobileMenu" className="text-white d-flex flex-column">
                    <span className="my-2"><a href="">Recipes</a></span>
                    <span className="my-2"><a href="">Video</a></span>
                    <span className="my-2"><a href="">Gallery</a></span>
                    <span className="my-2"><a href="">Cookouts</a></span>
                    <span className="my-2"><a href="">Cookouts</a></span>
                    <span className="my-2"><a href="">Cookouts</a></span> 
                </div>

                <div id="navFooter" className="border-box">
                    <div id="logoFooter">
                        <img src={LogoAlt} alt="white logo" width="160"/>
                    </div>
                    
                    <div id="socialsFooter" className="text-white mb-5">
                        <span className="d-inline-block mx-2"><a href="#" ><i className="fab fa-md text-white fa-instagram"></i> </a></span>
                        <span className="d-inline-block mx-2"><a href="#" ><i className="fab fa-md text-white fa-twitter"></i> </a></span>
                        <span className="d-inline-block mx-2"><a href="#" ><i className="fab fa-md text-white fa-youtube"></i> </a></span>
                        <span className="d-inline-block mx-2"><a href="#" ><i className="fab fa-md text-white fa-facebook"></i> </a></span>
                    </div>

                    <div id="copyrightIcons" className="">
                        <span>
                            <p className="text-white text-sm">
                                © 2021
                            </p>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}


function Header(){
    return(
        <div className="header d-flex align-items-center justify-content-around px-5" id="header">
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

            {/* <MobileNav/> */}
        </div>
    )
}

export default Header