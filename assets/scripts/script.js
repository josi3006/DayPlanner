

// Listen for a click:

$(document).on("click", ".btn", saveToLocal);





// On any click, set data of that slot to Local Storage

function saveToLocal() {
    var btnNum = $(this).attr("data-num");              //  Gets the "number" of the clicked button
    var wire = ('#' + btnNum);                          //  Creates the element id for the text input from the button number
    txtData = $(wire).val();                            //  Fetches the text/data from the text input

    localStorage.setItem('TimeSlot' + btnNum, txtData); //  Sets the time slot and data in Local Storage

}





// This function renders data on the page at page load

function renderData() {
    var slot9 = localStorage.getItem("TimeSlot9");
    var slot10 = localStorage.getItem("TimeSlot10");
    var slot11 = localStorage.getItem("TimeSlot11");
    var slot12 = localStorage.getItem("TimeSlot12");
    var slot1 = localStorage.getItem("TimeSlot1");
    var slot2 = localStorage.getItem("TimeSlot2");
    var slot3 = localStorage.getItem("TimeSlot3");
    var slot4 = localStorage.getItem("TimeSlot4");
    var slot5 = localStorage.getItem("TimeSlot5");
   
    $('#9').val(slot9);
    $('#10').val(slot10);
    $('#11').val(slot11);
    $('#12').val(slot12);
    $('#1').val(slot1);
    $('#2').val(slot2);
    $('#3').val(slot3);
    $('#4').val(slot4);
    $('#5').val(slot5);

  }
  

