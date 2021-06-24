import pic from "assets/jpg/burger.jpg"
import { Link } from "react-router-dom"

export const MenuComponent = () => {
    return (
        <>
            <div className="col-lg-3 col-md-6 col-6 mb-5">
                <Link to="/menu/1">
                    <div className="jomMenu">
                        <div className="menuImg">
                            <img src={pic} alt="" />
                        </div>
                        <div className="mt-3">
                            <h4>Kadogo Platter</h4>
                            <p>Kshs. 500</p>
                        </div>
                        <button className="yellowBtn">
                            View
                        </button>
                    </div>
                </Link>
            </div>
        </>
    )
}

const Menu = () => {
    return (
        <>
            <section className="py-5">
                <div className="row m-0 pt-5">
                    <div className="col-12 m-0 text-center">
                        <h2>Menu</h2>
                    </div>
                </div>
                <div className="row m-0">
                    <div className="col-lg-10 mx-auto d-flex flex-wrap justify-content-center">
                        <MenuComponent />
                        <MenuComponent />
                        <MenuComponent />
                        <MenuComponent />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Menu