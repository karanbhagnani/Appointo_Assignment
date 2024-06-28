import VanillaCalendar from 'vanilla-calendar-pro';
import './vanilla-calendar.min.css';
import { getSlots } from './helper';
import './calendar.css'
import './RightCalendar.css'
import { useEffect, useState } from 'react';
import Timeslots from './RightCalendar';


function Calendar({sendDataToMain}){
  const [dataFromChild, setDataFromChild] = useState("");
  function handleDataFromChild(visibility) {
    setDataFromChild(visibility);
  }
  useEffect(function handleVisibility() {
    sendDataToMain(dataFromChild);
  }) 
  let timezone = (Intl.DateTimeFormat().resolvedOptions().timeZone)
  let todaysDate = new Date().toDateString();
  let [presetDate, setPresentDate] = useState(todaysDate);
  let [slotList, setSlotList] = useState();
  useEffect( function VCalendar(){
    const calendar = new VanillaCalendar('#calendar', {
      type: 'default',
      actions: {
        clickDay(event, self) {
          let date = new Date (self.selectedDates);
          let presetDate = date.toDateString();
          setPresentDate(presetDate);
        },
      },
      settings: {
        visibility: {
            weekend: false,
            today: true,
          },
      },
    });
    calendar.init();
  }, [])
  useEffect(() => {
    handleClick();
  }, []);
async function handleClick(){
  setSlotList("");
  let availableSlotsList =  await getSlots(presetDate);
  let availableSlots = availableSlotsList;
  setSlotList(availableSlots)
  }
  return(
    <div className="rightSide">
    <div className='leftCalendar'>
    <div className='productName'>
                <h3>Test Product</h3>
                </div>
                <div className="timeZone">
                <span>TimeZone : {timezone} </span>
    </div>
    <div id='calendar' className="calendar" onClickCapture={handleClick}></div>
    </div>
    <Timeslots availableSlots = {slotList} presetDate = {presetDate} sendDataToParent={handleDataFromChild}/>
    </div>
  )
}


export default Calendar