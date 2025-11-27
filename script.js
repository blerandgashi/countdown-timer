let minutesInputEl = document.querySelector("#minutes");
let secondsInputEl = document.querySelector("#seconds");

const displayTimer = document.querySelector("#display");
let messageEl = document.querySelector("#message");

const startBtn = document.querySelector("#start");
const pauseBtn = document.querySelector("#pause");
const resetBtn = document.querySelector("#reset");

let count = 10;
let timer = null;

startBtn.addEventListener("click", function(){
  if (timer) {
    clearInterval(timer)
  }    
  pauseBtn.disabled = false;  
  let secondsValues = parseInt(secondsInputEl.value);
  let minsValues = parseInt(minutesInputEl.value);
  let totalSeconds = (minsValues * 60) + secondsValues;
  console.log(totalSeconds);
  
  
  timer = setInterval(() => { 
    let mins = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;    

    if (mins < 10) mins = "0" + mins;
    if (seconds < 10) seconds = "0" + seconds;
     
    displayTimer.textContent = `${mins}:${seconds}`

    totalSeconds--

    if (seconds <= 0) {
      if (mins > 0) {
        seconds = 59;
        mins--
      }else{
        clearInterval(timer)
        messageEl.classList.add("show")
      }
    }
  }, 1000);
})

pauseBtn.addEventListener("click", function(){
  clearInterval(timer)
  startBtn.disabled = false;
  pauseBtn.disabled = true;
})

resetBtn.addEventListener("click", function(){
  minutesInputEl.value = 0;
  secondsInputEl.value = 0;

  displayTimer.textContent = "00:00"
  clearInterval(timer)

  startBtn.disabled = false;
  pauseBtnBtn.disabled = true;
})