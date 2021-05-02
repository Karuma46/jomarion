import Drink from "assets/jpg/drink.jpg"
import Icecream from "assets/jpg/icecream.jpg"
import Burger from "assets/jpg/burger.jpg"
import Meat from "assets/jpg/meat.jpg"

import {Link} from "react-router-dom"

function Slide({img}){
    return(
        <>
            <div className="slide">
                <div className="image">
                    <img src={img} alt=""/>
                </div>
                <div className="slideInfo py-2 px-3">
                    <div className="contentTag">
                        Recipe
                    </div>
                    <Link to="recipes">
                        <h2>
                            Lorem Ipsum Dolor Si Amet
                        </h2>

                        <p>
                            The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. 
                            Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz
                        </p>
                    </Link>
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
                    <Slide img={Drink}/>
                    <Slide img={Meat}/>
                    <Slide img={Burger}/>
                    <Slide img={Icecream}/>
                </div>
            </div>
        </>
    )    
}

export default Slider