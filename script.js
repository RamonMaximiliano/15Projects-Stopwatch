function startCounting() {
    let seconds = 0
    let secondsDisplay = document.querySelector("div.seconds")

    let minutes = 0
    let minutesDisplay = document.querySelector("div.minutes")

    let hours = 0
    let hoursDisplay = document.querySelector("div.hours")

    function increaseSeconds() {
        seconds += 1
        if (seconds < 6) {
            secondsDisplay.innerText = seconds
            increaseMinutes()
            function increaseMinutes() {
                if (seconds == 5) {
                    minutes += 1
                    console.log(minutes)
                     if (minutes < 6) {
                        minutesDisplay.innerText = minutes
                        increaseHours()
                        function increaseHours() {
                            if (minutes == 5) {
                                hours += 1

                                if (hours < 6)
                                    hoursDisplay.innerText = hours
                            } else {
                                hours = 0
                                document.querySelector("div.hours").innerHTML = hours
                            }
                        }
                    } else {
                        minutes = 0
                        document.querySelector("div.minutes").innerHTML = minutes
                    }
                }
            }

        } else {
            seconds = 0
        }
    }
    let counting = setInterval(increaseSeconds, 1000)
}

//Debug:
//1:0:5
