import Header from 'components/header'
import { MenuComponent } from 'pages/homepage/menu'

const Menu = () => {
    return (
        <>
            <Header />
            <section className="py-5 mt-5">
                <div className="row m-0 pt-5">
                    <div className="col-lg-10 mx-auto text-center">
                        <h2>Menu</h2>
                    </div>
                </div>

                <div className="row m-0 py-5">
                    <div className="col-lg-10 mx-auto d-flex flex-wrap justify-content-start">
                        <MenuComponent />
                        <MenuComponent />
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