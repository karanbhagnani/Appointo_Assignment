import { useEffect, useState } from 'react';
import Calendar from './calendar'
import Footer from './calendarFooter'
import './mainScreen.css'

function MainScreen(){
    const [dataFromCal, setdataFromCal] = useState("");
    function handleDataFromCal(visibility) {
    setdataFromCal(visibility);
    }

    return(
        <div className="mainScreen">
            <Calendar sendDataToMain = {handleDataFromCal} />
            <Footer visibility = {dataFromCal}/>
        </div>
    )
}

export default MainScreen