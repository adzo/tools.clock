const secondsHandle = document.getElementById('secondsHandle')
const minutesHandle = document.getElementById('minutesHandle')
const hoursHandle = document.getElementById('hoursHandle')

const day = document.getElementById('day')
const month = document.getElementById('month')
const year = document.getElementById('year')
const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')

refreshTime = () => {
    let currentDate = new Date();

    let currentSecondAngle = (currentDate.getSeconds() * (360 / 60)) + 180 ;
    let currentMinuteAngle = (currentDate.getMinutes() * (360 / 60) + (360/60 /60 * currentDate.getSeconds()) ) + 180 ;
    let currentHourAngle = (currentDate.getHours() * (360 / 12) + (30 / 60 * currentDate.getMinutes())) + 180 
    
    secondsHandle.style.transform  = 'rotate('+currentSecondAngle+'deg)';
    minutesHandle.style.transform  = 'rotate('+currentMinuteAngle+'deg)';
    hoursHandle.style.transform  = 'rotate('+currentHourAngle+'deg)';

    hours.innerText = currentDate.getHours().toString().padStart(2, '0');
    minutes.innerText = currentDate.getMinutes().toString().padStart(2, '0');
    seconds.innerText = currentDate.getSeconds().toString().padStart(2, '0');

    day.innerText = currentDate.getDate().toString().padStart(2, '0');
    month.innerText = (currentDate.getMonth() +1).toString().padStart(2, '0');
    year.innerText = currentDate.getFullYear();
}

setInterval(() =>{
    this.refreshTime();
}, 1000)

function htmlToElement(html) {
    var template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
}

function getMainParts(angle) {
    return `<div class="w-full h-full flex justify-center absolute" style="transform: rotate(${angle}deg)">
        <div class="bg-gray-300 w-2 h-12 rounded-full"></div>
    </div>`
}

function getsecondsParts(angle) {
    return `<div class="w-full h-full flex justify-center absolute" style="transform: rotate(${angle}deg)">
        <div class="bg-gray-500 w-1 h-6 rounded-full"></div>
    </div>`
}

functionDrawPlaces = () => {
    const clock = document.getElementById('clockContainer')
    const rotationDegrees = 360 / 60;
    for (let index = 0; index < 60; index++) {
        if(index % 5 === 0){
            clock.appendChild(htmlToElement(getMainParts(index * rotationDegrees)))
        }else{
            clock.appendChild(htmlToElement(getsecondsParts(index * rotationDegrees)))
        }
        
    }
}

functionDrawPlaces();
this.refreshTime();

