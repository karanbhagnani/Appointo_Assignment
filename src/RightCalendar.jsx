import { useEffect, useState } from 'react'
import './RightCalendar.css'
import './mainScreen.css'
import { TailSpin } from 'react-loader-spinner'

function Timeslots({availableSlots, presetDate, sendDataToParent}){
    const [visibility, setVisibility] = useState(true);
    function handleTimeslotClick() {
        sendDataToParent(visibility);
      }
    let slotList = availableSlots;
    const [style, setStyle] = useState("light");
 
    const changeStyle = (id) => {
        if (style !== "light") setStyle("light");
        else setStyle("dark");
    };
    const [isSelected, setIsSelected] = useState(false);
    const handleToggle = (i) => {
        setIsSelected(i);
    };
return(
    <div className="rightSide">
    <div className="timeSlots">
            <div className="variantSelector">
                <span className="variantLabel">Select From Variants</span>
                <select className="variantDropdown">
                    <option value="30">30 Mins</option>
                    <option value="60">60 Mins</option>
                </select>
            </div>
            <div className="timeSlotsList">
                <span className="displayDate">{presetDate} - Available Slots </span>
                {!slotList ? <TailSpin
                visible={true}
                position="absolute"
                top= "10rem"
                left= "2rem"
                height="80"
                width="80"
                color="#378760"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperClass="loader"
                /> 
                : <div></div>}
                <ul className="availableSlots">
                        {slotList && slotList.map(({start_time,end_time}, idx) => 
                          <li key={idx} className={isSelected === idx ? "dark" : "light"} onClick={() => {changeStyle(idx); handleToggle(idx); handleTimeslotClick();}}>
                            {
                            start_time = new Date(start_time).toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'})} - 
                            {end_time = new Date(end_time).toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'})}
                          </li>

                        )}
                </ul>
            </div>
        </div>
    </div>
    
)
}

export default Timeslots