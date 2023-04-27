let hr = document.querySelector("#hr");
let mn = document.querySelector("#mn");
let sc = document.querySelector("#sc");

let day = new Date();
let hh = day.getHours() * 30;
let mm = day.getMinutes() * 6;
let ss = day.getSeconds() * 6;
setTimeout(() => {}, 1000);
hr.style.transform = `rotateZ(${hh + mn / 12}deg)`;
mn.style.transform = `rotateZ(${mn}deg)`;
sc.style.transform = `rotateZ(${ss}deg)`;
