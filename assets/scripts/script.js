// Set all variables

var slotArray = [
    {
        timeLabel : '9:00am',
        data : '',
        saveBox : saveBtn
    },
    {
        timeLabel : '10:00am',
        data : '',
        saveBox : saveBtn
    },
    {
        timeLabel : '11:00am',
        data : '',
        saveBox : saveBtn
    },
    {
        timeLabel : '12:00',
        data : '',
        saveBox : saveBtn
    },
    {
        timeLabel : '1:00pm',
        data : '',
        saveBox : saveBtn
    },
    {
        timeLabel : '2:00pm',
        data : '',
        saveBox : saveBtn
    },
    {
        timeLabel : '3:00pm',
        data : '',
        saveBox : saveBtn
    },
    {
        timeLabel : '4:00pm',
        data : '',
        saveBox : saveBtn
    },
    {
        timeLabel : '5:00pm',
        data : '',
        saveBox : saveBtn
    }
]



var saveBtn = $('<input class="btn btn-primary">').on('click', saveFunc());



// Make individual slots with individual buttons. Button click will stringify 'slot9 data' eg




// Make a For Loop that appends Hour rows to the timeSlotBox id; each row is one index in an array - id based on that

for (i = 0; i < SlotArray.length; i++) {

    slotArray.push(timeLabel, data, saveBtn)

    $('#timeSlotBox').append(slotArray[i]);
}


// Tie array index to name and time (moment?)




// Make a function that sends all data to Local Storage; each time slot is identified by array index/name; function called by saveBtn

function saveFunc() {
    
localStorage.setItem('timeLabel', timeLabel);
localStorage.setItem('data', data)

}