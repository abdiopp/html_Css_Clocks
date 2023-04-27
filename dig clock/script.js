 // digital clock
 let hours = document.getElementById('hour');
 let minutes = document.getElementById('minutes');
 let seconds = document.getElementById('seconds');
 let ampm = document.getElementById('ampm');

 let h = new Date().getHours();
 let m = new Date().getMinutes();
 let s = new Date().getSeconds();

 let am = h >= 12 ? "PM" : "AM";

 // 24 Hours to 12 Hours
 if (h > 12) {
     h = h - 12;
 }


 // zero before single digit number
 h = (h < 10) ? "0" + h : h
 m = (m < 10) ? "0" + m : m
 s = (s < 10) ? "0" + s : s

 hours.innerHTML = h;
 minutes.innerHTML = m;
 seconds.innerHTML = s;
 ampm.innerHTML = am;