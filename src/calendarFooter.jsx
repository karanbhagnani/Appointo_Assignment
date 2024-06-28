import './calendarFooter.css'

function Footer({visibility}){
    console.log(visibility)
    let visibilityOfNext = visibility;
    return(
        <>
        <div className="footer">
            <div className="appointoBranding">
                <p>Made with<i className="fa-solid fa-heart"></i>by <a href='https://apps.shopify.com/appointo-appointments-and-bookings' target='blank'>Appointo</a></p>
            </div>
            {
                visibilityOfNext ? 
                <div className="buttonsNext">
                <button className="buttons">Next  &nbsp; <i className="fa-solid fa-chevron-right"></i></button>
            </div>
            :
            <div className="hideButtons">
                <button className="hideButtons">Confirm</button>
            </div>
            }
        </div>
        </>
    )
}
export default Footer