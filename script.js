function startCounting() {
    let seconds = 0
    let secondsDisplay = document.querySelector("div.seconds")

    let minutes = 0
    let minutesDisplay = document.querySelector("div.minutes")

    let hours = 0
    let hoursDisplay = document.querySelector("div.hours")

    function increaseSeconds() {
        seconds += 1
        console.log(seconds)

        if (seconds <= 9) {
            secondsDisplay.innerText = `0${seconds}`
        } else if (seconds > 9 && seconds <60) {
            secondsDisplay.innerText = seconds
        } else {
            minutes += 1
            seconds = 0
            console.log("zerou")
            secondsDisplay.innerText = `0${seconds}`
        }
        console.log(`minutos ${minutes}`)

        if (minutes <= 9) {
            minutesDisplay.innerText = `0${minutes}`
        } else if (minutes > 9 && minutes <60) {
            minutesDisplay.innerText = minutes
        } else {
            hours += 1
            minutes = 0
            console.log("zerou minutos")
            minutesDisplay.innerText = `0${minutes}`
        }

        if (hours <= 9) {
            hoursDisplay.innerText = `0${hours}`
        } else if (hours > 9 && hours <60) {
            hoursDisplay.innerText = hours
        } else {
            window.alert("You have reached the max time!") 
        }
        console.log(`hours ${hours}`)
    }
    setInterval(increaseSeconds, 1000) 
}


//Stop button function
//Clear button function with SPA method (Do not refresh page)