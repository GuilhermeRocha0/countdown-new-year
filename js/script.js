function countdown() {
    var showDays = document.querySelector('.days')
    var showHours = document.querySelector('.hours')
    var showMinutes = document.querySelector('.minutes')
    var showSeconds = document.querySelector('.seconds')

    var currentYear = new Date().getFullYear()
    var dateWanted = new Date(`Jan 1, ${currentYear + 1} 00:00:00`).getTime()

    var currentTime = new Date().getTime()

    var distanceToWantedDate = dateWanted - currentTime

    var days = Math.floor(distanceToWantedDate / (1000 * 60 * 60 * 24))
    var hours = Math.floor((distanceToWantedDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    var minutes = Math.floor((distanceToWantedDate % (1000 * 60 * 60)) / (1000 * 60))
    var seconds = Math.floor((distanceToWantedDate % (1000 * 60)) / 1000)

    showDays.innerText = days
    showHours.innerText = hours
    showMinutes.innerText = minutes
    showSeconds.innerText = seconds
}

function init() {
    countdown()
    var interval = window.setInterval(countdown, 1)
}

init()