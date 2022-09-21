const homeScoreDisplay = document.getElementById("home-score")
let homeScore = 0;
const homeScoreUpdate = () => homeScoreDisplay.textContent = homeScore
const plus1home = () => {
    homeScore++
    homeScoreUpdate()
}
const plus2home = () => {
    homeScore+=2
    homeScoreUpdate()
}
const plus3home = () => {
    homeScore+=3
    homeScoreUpdate()
}
const guestScoreDisplay = document.getElementById("guest-score")
let guestScore = 0;
const guestScoreUpdate = () => guestScoreDisplay.textContent = guestScore
const plus1guest = () => {
    guestScore++
    guestScoreUpdate()
}
const plus2guest = () => {
    guestScore+=2
    guestScoreUpdate()
}
const plus3guest = () => {
    guestScore+=3
    guestScoreUpdate()
}

const reset = () => {
    homeScore = 0
    guestScore = 0
    homeScoreUpdate()
    guestScoreUpdate()
}
