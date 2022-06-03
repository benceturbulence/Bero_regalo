

function countDown(){

    const days = document.getElementById('days');
    const hours = document.getElementById('hours');
    const minutes = document.getElementById('minutes');
    const seconds = document.getElementById('seconds');
    
    const wishedDate = new Date('July 24 2022 00:00:00').getTime();
    console.log(wishedDate);
    
    const now = new Date().getTime();
    console.log(now);
    
    // get the year
    
    const gap = wishedDate - now;
    
    console.log(gap + ' miliseconds left');
    const sec= 1000;
    const min = sec *60;
    const hour = min *60;
    const day = hour*24;
    
    
    
    
    const remDays = Math.floor(gap/day);
    const remHour = Math.floor((gap%day)/hour);
    const remMin = Math.floor((gap%hour)/min);
    const remSec = Math.floor((gap%min)/sec);
    
    console.log('Time until Argentina')
    
    console.log(remDays)
    console.log(remHour)
    console.log(remMin)
    console.log(remSec)
    
    days.innerHTML = remDays;
    hours.innerHTML = remHour;
    minutes.innerHTML=remMin;
    seconds.innerHTML=remSec;
}
    
    
setInterval(countDown, 1000)