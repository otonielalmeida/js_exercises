function getSec(sec){
    const date = new Date(sec * 1000);
    return date.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    });
}

const clock = document.querySelector('.clock');
const start = document.querySelector('.start');
const pause = document.querySelector('.pause');
const clear = document.querySelector('.clear');
let sec = 0;
let timer;
function startClock() {
    timer = setInterval(function() {
        sec++;
        clock.innerHTML = getSec(sec);
    }, 1000);
}

start.addEventListener('click', function(event){
    clock.classList.remove('paused');
    clearInterval(timer);
    startClock();
});

pause.addEventListener('click', function(event){
    clearInterval(timer);
    clock.classList.add('paused');
});

clear.addEventListener('click', function(event){
    clock.classList.remove('paused');
    clearInterval(timer);
    sec = 0;
    clock.innerHTML = '00:00:00';
});

document.addEventListener('click', function(e){
    const el = e.target;

    if(el.classList.contains('clear')) {
        console.log('You clicked in clear');
        clearInterval(timer);
        sec = 0;
        clock.innerHTML = '00:00:00';
    }
    if(el.classList.contains('start')) {
        clock.classList.remove('paused');
        clearInterval(timer);
        startClock();
    }
    if(el.classList.contains('pause')) {
        clearInterval(timer);
        clock.classList.add('paused');
    }

});
