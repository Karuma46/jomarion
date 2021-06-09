import pic from "assets/jpg/burger.jpg"

export const MenuComponent = () => {
    return (
        <>
            <div className="col-3">          
                <div className="jomMenu">
                    <div className="menuImg">
                        <img src={pic} alt="" />
                    </div>
                    <div className="mt-3">
                        <h3>Grilled Smokies</h3>
                        <p>Kshs. 500</p>
                    </div>
                    <button className="yellowBtn">
                        Add to Basket 
                        <span>
                            <i className="fas fa-shopping-basket"></i>
                        </span>
                    </button>
                </div>
            </div>
        </>
    )
}

const Menu = () => {
    return(
        <>
            <section>
                <div className="row m-0 py-5">
                    <div className="col-12 m-0 text-center">
                        <h2>Menu</h2>
                    </div>
                </div>
                <div className="row m-0">
                    <div className="col-lg-10 mx-auto d-flex">
                        <MenuComponent/>
                        <MenuComponent/>
                        <MenuComponent/>
                        <MenuComponent/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Menu