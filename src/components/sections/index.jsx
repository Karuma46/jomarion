import Video from "assets/jpg/video.jpg";
import Button, {Secondarybutton} from 'components/inputs/buttons'

function RightSection(){
    return(
        <>
            <div className="section d-flex">
                <div className="contentSection">
                    <div className="video">
                        <img src={Video} alt=""/>
                    </div>
                </div>
                <div className="infoSection p-4">
                    <div className="contentTag">
                        Videos
                    </div>

                    <div className="infotext">
                        <h2> Lorem Ipsum Dolor Si Amet</h2>
                        <p>
                            The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

function Section(){
    return(
        <>
            <div className="section d-flex">
                <div className="infoSection p-4">
                    <div className="contentTag">
                        Videos
                    </div>

                    <div className="infotext">
                        <h2>HOW TO MAKE A SHAKSHOUKA</h2>
                        <p>
                            The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz
                        </p>
                        <Secondarybutton></Secondarybutton>
                    </div>
                </div>
                <div className="contentSection">
                    <div className="video">
                        <img src={Video} alt=""/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section