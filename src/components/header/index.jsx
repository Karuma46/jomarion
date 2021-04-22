import Logo from "assets/svg/logo.svg"

function Header(){
    return(
        <div className="header" id="header">
            <div className="logo">
                
                <img src={Logo} alt="logo"/>
            </div>
        </div>
    )
}

export default Header