let timing = 0

function startCounting() {
    let secondsText = document.querySelector("div.seconds").innerHTML
    let seconds = parseInt(secondsText, 10);
    let secondsDisplay = document.querySelector("div.seconds")

    let minutesText = document.querySelector("div.minutes").innerHTML
    let minutes = parseInt(minutesText, 10);
    let minutesDisplay = document.querySelector("div.minutes")

    let hoursText = document.querySelector("div.hours").innerHTML
    let hours = parseInt(hoursText, 10);
    let hoursDisplay = document.querySelector("div.hours")

    function increaseSeconds() {
        seconds += 1

        if (seconds <= 9) {
            secondsDisplay.innerText = `0${seconds}`
        } else if (seconds > 9 && seconds < 60) {
            secondsDisplay.innerText = seconds
        } else {
            minutes += 1
            seconds = 0
            secondsDisplay.innerText = `0${seconds}`
        }

        if (minutes <= 9) {
            minutesDisplay.innerText = `0${minutes}`
        } else if (minutes > 9 && minutes < 60) {
            minutesDisplay.innerText = minutes
        } else {
            hours += 1
            minutes = 0
            minutesDisplay.innerText = `0${minutes}`
        }

        if (hours <= 9) {
            hoursDisplay.innerText = `0${hours}`
        } else if (hours > 9 && hours < 60) {
            hoursDisplay.innerText = hours
        } else {
            window.alert("You have reached the max time!")
        }
    }
    timing = setInterval(increaseSeconds, 1000)

    document.querySelector("button.start").classList.add("buttonClicked")

}

function stopCounting() {
    let seconds = document.querySelector("div.seconds").innerHTML
    document.querySelector("div.seconds").innerHTML = seconds

    let minutes = document.querySelector("div.minutes").innerHTML
    document.querySelector("div.minutes").innerHTML = minutes

    let hours = document.querySelector("div.hours").innerHTML
    document.querySelector("div.hours").innerHTML = hours

    document.querySelector("button.start").classList.remove("buttonClicked")

    clearInterval(timing)
}

function clearCounting() {
    document.querySelector("div.seconds").innerHTML = '00'
    document.querySelector("div.hours").innerHTML = '00'
    document.querySelector("div.minutes").innerHTML = '00'

    document.querySelector("button.start").classList.remove("buttonClicked")

    clearInterval(timing)
} 