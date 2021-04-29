function button(){
    return(
        <>
            <button className="yellowBtn">
                <span>
                    Get Tickets
                </span>
                
                <span className="d-inline-block ml-2">
                    <i className="fas fa-arrow-right"></i>
                </span>
            </button>
        </>
    )
}

export function Secondarybutton(){
    return(
        <>
            <button className="blackBtn">
                <span>
                    See More
                </span>
                
                <span className="d-inline-block ml-2">
                    <i className="fas fa-arrow-right"></i>
                </span>
            </button>
        </>
    )
}


export default button