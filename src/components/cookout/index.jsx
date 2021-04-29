import Poster from 'assets/jpg/cookout.jpg'
import Button from 'components/inputs/buttons'

function Cookout() {
    return(
        <>
            <div className="section rightSection d-flex">
                <div className="contentSection">
                    <div className="video">
                        <img src={Poster} alt=""/>
                    </div>
                </div>
                <div className="infoSection p-4">
                    <div className="contentTag">
                        Cookouts
                    </div>

                    <div className="infotext">
                        <h2> Lorem Ipsum Dolor Si Amet</h2>
                        <p>
                            The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz
                        </p>

                        <Button></Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cookout