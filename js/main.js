let countDownDate = new Date("Nov 31, 2022 23:59:59").getTime();
// console.log(countDownDate);

let counter = setInterval(() => {

    // Get Date Now
    let dateNow = new Date().getTime();

    //Find The Date Difference Between Now And CountDown Date
    let dateDiff = countDownDate - dateNow;

    // Get Time Units
    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

    document.querySelector(".days").innerHTML = days;
    document.querySelector(".hours").innerHTML = hours;
    document.querySelector(".minutes").innerHTML = minutes;
    document.querySelector(".seconds").innerHTML = seconds;

    if (dateDiff < 0) {
        clearInterval(counter);
    }
}, 1000);
$(document).ready(function () {
    $("#cl").click(function () {
        $(".active").toggle(".1s");
    });
});
