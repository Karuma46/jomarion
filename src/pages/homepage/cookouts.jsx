import cookout from "assets/jpg/cookout.jpg"

const Cookouts = () => {
    return(
        <>
            <section className="py-5 mx-0">
                <div className="row m-0 py-2">
                    <div className="col-12 m-0 text-center">
                        <h2>Cookouts</h2>
                    </div>
                </div>

                <div className="row m-0 justify-content-center">
                    <div className="col-md-5 col-sm-9">
                        <div className="videoImg">
                            <img src={cookout} alt="" />
                        </div>
                    </div>
                    <div className="col-md-5 col-sm-9 d-flex">
                        <div className="align-self-center my-4">
                            <h3>Jomarion's Kitchen Cookout Series Edition #9</h3>
                            <p>
                                The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz
                            </p>
                            <button className="yellowBtn">
                                Get Tickets
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cookouts 