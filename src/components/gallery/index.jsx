import Drink from 'assets/jpg/drink.jpg'

function Pic(){
    return(
        <>
            <div className="pic">
                <div>
                    <img src={Drink} alt=""/>
                </div>
            </div>
        </>
    )
}

function Gallery(){
    return(
        <>
            <div id="gallery">
                <div className="titleSection p-4">
                   <p className="contentTag">Gallery</p>
                </div>

                <div className="photoWrap d-flex">
                   <Pic />
                   <Pic />
                   <Pic />                 
                   <Pic />
                </div>
            </div>
        </>
    )
}

export default Gallery