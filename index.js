let homeScore = 0
let guestScore = 0

document.getElementById("home-score").textContent = homeScore
document.getElementById("guest-score").textContent = guestScore


let add1 = 1
let add2 = 2
let add3 = 3

let scoreHome = document.getElementById("home-score")
let scoreGuest = document.getElementById("guest-score")
function add1btnHome() {
    homeScore += 1
    scoreHome.textContent = homeScore
}


function add2btnHome() {
    homeScore += 2
    scoreHome.textContent = homeScore
}


function add3btnHome() {
    homeScore += 3
    scoreHome.textContent = homeScore
}


function add1btnGuest() {
    guestScore += 1
    scoreGuest.textContent = guestScore
}


function add2btnGuest() {
    guestScore += 2
    scoreGuest.textContent = guestScore
}


function add3btnGuest() {
    guestScore += 3
    scoreGuest.textContent = guestScore
}


function newGame() {
    scoreGuest.textContent = 0
    scoreHome.textContent = 0
    homeScore = 0
    guestScore = 0
}
