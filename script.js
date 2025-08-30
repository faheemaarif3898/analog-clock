let hours = document.getElementsByClassName("hours")[0]
let mins = document.getElementsByClassName("mins")[0]
let sec = document.getElementsByClassName("sec")[0]

let time = new Date()
let curr_hours = time.getHours()
let curr_mins = time.getMinutes()
let curr_sec = time.getSeconds()

function analog_clock(){
    let sec_angle = curr_sec*6 + 0;
    let min_angle = curr_mins*6 + curr_sec * 0.1;
    let hour_angle = (curr_hours % 12) * 30 + curr_mins * 0.5 + curr_sec * (1/120);
    setInterval(() => {
        sec.style.transform = `rotate(${sec_angle}deg)`;
        sec_angle += 6;
        mins.style.transform = `rotate(${min_angle}deg)`;
        min_angle += 0.1;
        hours.style.transform = `rotate(${hour_angle}deg)`;
        hour_angle += (1/120);
        
    }, 1000);
}

analog_clock()