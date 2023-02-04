

setInterval(()=> {

const days=["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]

const months=["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos",  "Eylül", "Ekim", "Kasım", "Aralık"]

  const a = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  const c = Math.floor(Math.random() * 255);
  const renk = `rgb(${a},${b},${c})`;
  const renk2 = `rgb(${a},${c},${b})`;
  const renk3 = `rgb(${c},${b},${a})`;
  const renk4 = `rgb(${c},${a},${b})`;

  const timeDiv= document.querySelector("#time");
  const dateDiv= document.querySelector("#date");
  const dayDiv= document.querySelector("#day");


const time = new Date();

let hours =time.getHours();
let minutes =time.getMinutes();
let seconds=time.getSeconds();


let day=time.getDay();
let date=time.getDate();
let month=time.getMonth();
let year=time.getFullYear();

const gun=days[day]
const ay=months[month]


hours= hours<10 ? "0" + hours : hours
minutes= minutes<10 ? "0" + minutes : minutes
seconds= seconds<10 ? "0" + seconds : seconds
date = date<10 ? "0" + date : date

dateDiv.innerText=date+ " / " +Number(month+1) + " / "+ year
timeDiv.innerText = hours+ " : " +minutes+ " : " +seconds
dayDiv.innerText=gun

timeDiv.style.color=`${renk2}`
dateDiv.style.color=`${renk3}`
dayDiv.style.color=`${renk}`


}, 1000);






