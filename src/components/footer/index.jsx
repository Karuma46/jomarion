import Logo from "assets/svg/logo.svg"

function Footer(){
    return(
        <>
            <footer>
                <div id="logoFooter">
                    <img src={Logo} alt="white logo" width="260"/>
                </div>
                
                <div id="socialsFooter" className="text-white mb-5">
                    <span className="d-inline-block mx-2"><a href="#" ><i className="fab fa-md text-black fa-instagram"></i> </a></span>
                    <span className="d-inline-block mx-2"><a href="#" ><i className="fab fa-md text-black fa-twitter"></i> </a></span>
                    <span className="d-inline-block mx-2"><a href="#" ><i className="fab fa-md text-black fa-youtube"></i> </a></span>
                    <span className="d-inline-block mx-2"><a href="#" ><i className="fab fa-md text-black fa-facebook"></i> </a></span>
                </div>

                <div id="copyrightIcons" className="">
                    <span>
                        <p className="text-black text-sm">
                            © 2021
                        </p>
                    </span>
                </div>
            </footer>
        </>
    )
}

export default Footer