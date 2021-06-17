import Video from "assets/jpg/video.jpg"

const Videos = () => {
    return(
        <>
            <section className="py-5 mx-0">
                <div className="row m-0 py-2">
                    <div className="col-12 m-0 text-center">
                        <h2>Videos</h2>
                    </div>
                </div>

                <div className="row m-0 justify-content-center">
                    <div className="col-md-5 col-sm-9">
                        <div className="videoImg">
                            <img src={Video} alt="" />
                        </div>
                    </div>
                    <div className="col-md-5 col-sm-9 d-flex">
                        <div className="align-self-center">
                            <h3>Let's Story Cook with Chef JO</h3>
                            <p>
                                The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz
                            </p>
                            <button className="blackBtn">
                                Watch Video
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Videos