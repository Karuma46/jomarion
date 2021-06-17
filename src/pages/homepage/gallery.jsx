import Meat from "assets/jpg/meat.jpg"

const Pic = () => {
    return(
        <>
            <div className="col-6 col-md-4 col-lg-3">
                <div className="galleryPic">
                    <div className="galleryImg">
                        <img src={Meat} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}


const Gallery = () => {
    return(
        <>
        <section className="my-5">
            <div className="row m-0">
                <div className="col-12 py-3 text-center">
                    <h2>Gallery</h2>
                </div>
            </div>
            <div className="row m-0 py-3 justify-content-center">
                <div className="col-12 col-md-11 mx-0" id="galleryContainer">
                    <Pic />
                    <Pic />
                    <Pic />
                    <Pic />
                    <Pic />
                    <Pic />
                    <Pic />
                    <Pic />
                </div>
            </div>
        </section>
        </>
    )
}

export default Gallery