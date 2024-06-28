import axios from 'axios';

async function getSlots(presentDate){
    let URL = "https://app.appointo.me/scripttag/mock_timeslots?";
    let date = new Date(presentDate), y = date.getFullYear(), m = date.getMonth();
    let firstDay = new Date(y, m, 1).toLocaleDateString("en-CA");
    let lastDay = new Date(y, m + 1, 0).toLocaleDateString("en-CA");
    let start_date = firstDay;
    let end_date = lastDay;
    let res3 = await axios.get(URL+`start_date=${start_date}&end_date=${end_date}`);
    let availableSlotArr = res3.data;
    let arrLen= availableSlotArr.length;
    let selectedDate = new Date(presentDate).toLocaleDateString("en-CA");

    for (let i=0;i<=arrLen;i++){
    if(selectedDate != "" && availableSlotArr[i].date == selectedDate){
        let availableSlotsList = availableSlotArr[i].slots;
        return availableSlotsList; 
    }}
}


export {getSlots};