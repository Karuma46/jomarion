import Drink from "assets/jpg/drink.jpg"

function Slide(){
    return(
        <>
            <div className="slide">
                <div className="image">
                    <img src={Drink} alt=""/>
                </div>
                <div className="slideInfo py-2 px-3">
                    <div className="contentTag">
                        Recipe
                    </div>
                    <a href="">
                        <h2>
                            Lorem Ipsum Dolor Si Amet
                        </h2>

                        <p>
                            The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. 
                            Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz
                        </p>
                    </a>
                </div>
            </div>
        </>
    )
}

function Slider(){
    return(
        <>
            <div id="slider">
                <div id="slideWrap">
                    <Slide/>
                    <Slide/>
                    <Slide/>
                    <Slide/>
                </div>
            </div>
        </>
    )    
}

export default Slider