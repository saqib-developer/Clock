// setInterval(function () {
//     let time = new Date();
//     let year = time.getFullYear();
//     let month = time.getMonth();
//     let date = time.getDate();
//     let hour = time.getHours();
//     let min = time.getMinutes();
//     let sec = time.getSeconds();
//     document.getElementById('date').innerHTML = date + " / " + (month + 1) + " / " + year;
//     document.getElementById('hour').innerHTML = hour;
//     document.getElementById('min').innerHTML = min;
//     document.getElementById('sec').innerHTML = sec;
// }, 500);

let secAngle = 0;
let minAngle = 0;
let hourAngle = 0;
setInterval(() => {
    let sec = document.getElementById('sec');
    sec.style.transform = "rotate(" + secAngle + "deg)";
    secAngle += 6;

    let min = document.getElementById('min');
    min.style.transform = "rotate(" + minAngle + "deg)";
    minAngle += 0.1;

    let hour = document.getElementById('hour');
    hour.style.transform = "rotate(" + hourAngle + "deg)";
    hourAngle += 0.001;
}, 1 * 1000);

