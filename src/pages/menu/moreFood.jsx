import { MenuComponent } from 'pages/homepage/menu'

const MoreFood = () => {
    return (
        <>
            <section>
                <div className="row m-0 py-5">
                    <div className="col-lg-10 mx-auto text-center">
                        <h2>More Food</h2>
                    </div>
                </div>

                <div className="row m-0 py-5">
                    <div className="col-lg-10 mx-auto d-flex flex-wrap justify-content-start">
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

export default MoreFood