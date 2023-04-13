var date=new Date(); //date
var month;
//container for months
switch(date.getMonth()){// for change monts name after 30/30/28/29 days
    case 0:
        month="Jan";
        break;
    case 1:
        month="Feb";
        break;
    case 2:
        month="Mar";
        break;
    case 3:
        month="Apr";
        break;
    case 4:
        month="May";
        break;
    case 5:
        month="Jun";
        break;
    case 6:
        month="Jul";
        break;
    case 7:
        month="Aug";
        break;
    case 8:
        month="Sept";
        break;
    case 9:
        month="Oct";
        break;
    case 10:
        month="Nov";
        break;
    case 11:
        month="Dec";
        break;
}

// time fuction to get the time
function time(){
    var d=new Date();
    if(d.getHours()<10){
        document.getElementById("hr").innerHTML='0'+d.getHours();
    }
    else{
        document.getElementById("hr").innerHTML=d.getHours();
    }
    if(d.getMinutes()<10){
        document.getElementById("min").innerHTML='0'+d.getMinutes();
    }
    else{
        document.getElementById("min").innerHTML=d.getMinutes();
    }
    if(d.getSeconds()<10){
        document.getElementById("sec").innerHTML='0'+d.getSeconds();
    }
    else{
        document.getElementById("sec").innerHTML=d.getSeconds();
    }

    document.getElementById("date").innerHTML=d.getDate()+" "+month+" "+d.getFullYear();
    
    // calling time function in every 1 seconds
    setTimeout(time,1000);
}

time();
//visibility of setTime panel after clicking setAlarm button
function settime(){
    document.getElementById("settime").style.visibility="visible";
}

//function for set the alarm timing(hr:min:sec)
function saveAlarm(){
    var hour = document.getElementById("setHr").value;
    var minute=document.getElementById("setMin").value;
    var second=document.getElementById("setSec").value;
    document.getElementById("setBtn").setAttribute("onclick","cancelBtn()");

    function x(){

        // when alarm is set then it return this line for confirmation
        document.getElementById("settime").innerHTML="Your Alarm is set for "+hour+":"+minute+":"+second;

        //styling the above line
        document.getElementById("settime").style.fontSize="xxx-large";
        document.getElementById("settime").style.fontWeight="bold";
        document.getElementById("settime").style.paddingLeft="20px";
        document.getElementById("settime").style.paddingTop="45px";
        document.getElementById("settime").style.color="rgb(233, 146, 16)";
        document.getElementById("setBtn").innerHTML="Cancel Alarm";


        //when alarm's time is equal to clock's time then audio play after 1 second.
        if(document.getElementById("hr").innerHTML==hour && document.getElementById("min").innerHTML==minute && document.getElementById("sec").innerHTML==second){
            var audio=new Audio("Alarm Clock Alarm.mp3");
            setInterval(() => {
                audio.play()
            }, 1000);
        }
        else{
            setTimeout(x,100);
        }
   
    }
    x();
}

// for cancling the alarm
function cancelBtn(){
    window.location.reload();
}