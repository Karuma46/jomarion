import pic from "assets/jpg/burger.jpg"

export const MenuComponent = () => {
    return (
        <>
            <div className="col-lg-3 col-md-6 col-11">          
                <div className="jomMenu">
                    <div className="menuImg">
                        <img src={pic} alt="" />
                    </div>
                    <div className="mt-3">
                        <h3>Grilled Smokies</h3>
                        <h4>Kshs. 500</h4>
                    </div>
                    <button className="yellowBtn">
                        View 
                    </button>
                </div>
            </div>
        </>
    )
}

const Menu = () => {
    return(
        <>
            <section className="py-5">
                <div className="row m-0 py-5">
                    <div className="col-12 m-0 text-center">
                        <h2>Menu</h2> 
                    </div>
                </div>
                <div className="row m-0">
                    <div className="col-lg-10 mx-auto d-flex flex-wrap justify-content-center">
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