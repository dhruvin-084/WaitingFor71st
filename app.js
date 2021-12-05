let dateOfLastCentury = new Date("Nov 23, 2019 14:29:00").getTime();

let countDown = setInterval(() => {
    let now = new Date().getTime();
    let timeSince = now - dateOfLastCentury;

    let days = Math.floor(timeSince / (1000*60*60*24));
    let hours = Math.floor((timeSince % (1000*60*60*24))/(1000*60*60));
    let minutes = Math.floor((timeSince % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeSince % (1000 * 60)) / 1000);
    console.log(dateOfLastCentury)
    document.getElementById("d").innerHTML = days + " Days";
    document.getElementById("h").innerHTML = hours + " Hours";
    document.getElementById("m").innerHTML = minutes + " Minutes";
    document.getElementById("s").innerHTML = seconds + " Seconds";
}, 1000);