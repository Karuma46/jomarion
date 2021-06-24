import Header from 'components/header'
import pic from "assets/jpg/burger.jpg"
import MoreFood from "./moreFood"

const MenuDetail = () => {
    return (
        <>
            <Header />
            <section className="py-5 mt-5 mainSection">
                <div className="row m-0">
                    <div className="col-12 col-md-10 col-lg-8 py-5 mx-auto menuDetails">
                        <div className="menuPics">
                            <div className="picSlider">
                                <img src={pic} alt="" />
                            </div>
                        </div>

                        <div className="menuInfo pt-5">
                            <h2>Kadogo Platter</h2>
                            <ul>
                                <li>1/4 Grilled Chicken</li>
                                <li>(Small) Seasoned Potato Wedges</li>
                                <li>1 Beef Taco and a sample of our barbecue sauce</li>
                            </ul>

                            <div className="">
                                <h4>
                                    Quantity:
                                </h4>

                                <div className="menuQty">
                                    <span> - </span>
                                    <span><p> 1 </p></span>
                                    <span> + </span>
                                </div>

                            </div>

                            <div className="total mt-3">
                                <p>
                                    Ksh. 550
                                </p>
                            </div>
                            <button className="yellowBtn">
                                Add to Basket
                                &nbsp;
                                <span>
                                    <i className="fas fa-shopping-basket"></i>
                                </span>
                            </button>

                        </div>
                    </div>
                </div>
            </section>
            <MoreFood />
        </>
    )
}

export default MenuDetail