import Burger from 'assets/jpg/burger.jpg'
import Logo from 'assets/svg/logo.svg'

const Hero = () => {
    return(
        <>
            <div className="row m-0">
                <div className="col-12 p-0 heroWrap">
                    <div className="hero" id="hero">
                        <div className="row justify-content-between flex-wrap-reverse">
                            <div className="col-lg-6 col-md-12">
                                <div id="logoContainer">
                                    <div id="jomSocials">
                                        <span>
                                            <a href="">
                                                <i className="fab fa-youtube"></i>
                                            </a>
                                        </span>

                                        <span>
                                            <a href="">
                                                <i className="fab fa-instagram"></i>
                                            </a>
                                        </span>

                                        <span>
                                            <a href="">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </span>

                                        <span>
                                            <a href="">
                                                <i className="fab fa-facebook"></i>
                                            </a>
                                        </span>
                                    </div>
                                    <div id="jmLogo">
                                        <div>
                                            <h4 className="text-center">
                                                Welcome to
                                            </h4>
                                        </div>
                                        <div id="logoWrap">
                                            <img src={Logo} alt="" />
                                        </div>
                                        <div id="jmNav">
                                            <nav>
                                                <span>
                                                    <a href="#">Menu</a>
                                                </span>

                                                <span>
                                                    <a href="#">Videos</a>
                                                </span>

                                                <span>
                                                    <a href="#">Gallery</a>
                                                </span>

                                                <span>
                                                    <a href="#">Cookouts</a>
                                                </span>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div id="jomCarousel">
                                    <div id="slider">
                                        <img src={Burger} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div id="scrollArrow">
                                <span>
                                    <a href="">
                                        <i className="fas fa-arrow-down"></i>
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero