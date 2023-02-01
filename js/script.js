setInterval(function () {
    let time = new Date();
    //     let year = time.getFullYear();
    //     let month = time.getMonth();
    //     let date = time.getDate();
    let sec_no = time.getSeconds();
    let min_no = time.getMinutes();
    let hour_no = time.getHours();
    //     document.getElementById('date').innerHTML = date + " / " + (month + 1) + " / " + year;
    //     document.getElementById('hour').innerHTML = hour;
    //     document.getElementById('min').innerHTML = min;
    //     document.getElementById('sec').innerHTML = sec;
    let sec = document.getElementById('sec');
    sec.style.transform = "rotate(" + 6 * sec_no + "deg)";

    let min = document.getElementById('min');
    min.style.transform = "rotate(" + 0.1 * (min_no * 60) + "deg)";

    // if (hour_no > 12) {
    //     hour_no -= 12;
    // }

    let hour = document.getElementById('hour');
    hour.style.transform = "rotate(" + 0.001 * (hour_no * 60 * 60) + "deg)";

}, 500);