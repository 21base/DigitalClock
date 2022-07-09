const hours = document.querySelector(".hours"),
minutes = document.querySelector(".minutes"),
seconds = document.querySelector(".seconds"),
dateInFull = document.querySelector(".date"),
ampm = document.querySelector(".ampm"),
btn = document.querySelector(".mTime"),
btn2 = document.querySelector(".normTime")

let nTime = setInterval(() => {
    let newDate = new Date()
    let newHours = newDate.getHours()
    let newMinutes = newDate.getMinutes()
    let newSeconds = newDate.getSeconds()
    let date = newDate.getDate()
    let year = newDate.getFullYear()
    let newMonth = newDate.toLocaleString('default', {month: 'long'})
    let day = newDate.getDay()
    let dayInString


    switch (day) {
        case 0:
            dayInString = 'Sunday'
            break;
        case 1:
            dayInString = 'Monday'
            break;
        case 2:
            dayInString = 'Tuesday'
            break;
        case 3:
            dayInString = 'Wednesday'
            break;
        case 4:
            dayInString = 'Thursday'
            break;
        case 5:
            dayInString = 'Friday'
            break;
        case 6:
            dayInString = 'Saturday'
            break;
        default:
            break;
    }

    let realHours

    switch (newHours) {
        case 13:
            realHours = 01
            break;
        case 14:
            realHours = 02
            break;
        case 15:
            realHours = 03
            break;
        case 16:
            realHours = 04
            break;
        case 17:
            realHours = 05
            break;
        case 18:
            realHours = 06
            break;
        case 19:
            realHours = 07
            break;
        case 20:
            realHours = 08
            break;
        case 21:
            realHours = 09
            break;
        case 22:
            realHours = 10
            break;
        case 23:
            realHours = 11
            break;
        default:
            break;
    }

    hours.innerHTML = newHours < 10 ? `0${newHours}` : newHours > 12 ? realHours : newHours
    minutes.innerHTML = newMinutes < 10 ? `0${newMinutes}` : newMinutes
    seconds.innerHTML = newSeconds < 10 ? `0${newSeconds}` : newSeconds
    ampm.innerHTML = newHours < 12 ? "AM" : "PM"
    dateInFull.innerHTML = `${dayInString}, ${newMonth} ${date}, ${year}`
}, 1000)

btn.onclick = () => {
    ampm.style.display ="none"
    clearInterval(nTime)
    btn.style.display ="none"
    btn2.style.display = "block"
    setInterval(() => {
        let newDate = new Date()
        let newHours = newDate.getHours()
        let newMinutes = newDate.getMinutes()
        let newSeconds = newDate.getSeconds()
   
        hours.innerHTML = newHours < 10 ? `0${newHours}` : newHours
        minutes.innerHTML = newMinutes < 10 ? `0${newMinutes}` : newMinutes
        seconds.innerHTML = newSeconds
    }, 1000);
}

btn2.onclick = () => {
    location.href = "index.html"
}

// Copyright 2022 21base 

