var mins = 00;
var secs = 00;
var mSecs = 00;


var dMinutes = document.getElementById('mins');
var dSeconds = document.getElementById('secs');
var dMiliSeconds = document.getElementById('mSecs');

var interval;

function start() {
   interval =  setInterval(function () {
        mSecs++;
        dMiliSeconds.innerHTML = mSecs;
        if (mSecs >= 100) {
            secs++;
            dSeconds.innerHTML = secs;
            mSecs = 00;
        }
        
        else if (secs >=60) {
            secs = 00;
             dSeconds.innerHTML = secs;
            mins++;
            dMinutes.innerHTML = mins;
        }
    }, 10);
    document.getElementById('start').disabled = true;
}

function pause() {
        document.getElementById('start').disabled = false;

    clearInterval(interval)
}

function stop() {
    mins = 00;
    secs = 00;
    mSecs = 00;
    dMinutes.innerHTML = mins
    dSeconds.innerHTML = secs
    dMiliSeconds.innerHTML = mSecs

}