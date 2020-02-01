let countdown;
//get an array of all button elements
const buttons = document.querySelectorAll('[data-time]');

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60)
    const remainderSeconds = seconds % 60 
    const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
    document.getElementById('timeLeft').textContent = display;
}

function timer(seconds) {
    //clear any existing timer
    clearInterval(countdown);
    const now = Date.now()
    const then = now + (seconds*1000)
    displayTimeLeft(seconds)

    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now())/1000);
        if (secondsLeft < 0) {
            clearInterval(countdown);
            return;
        }
        // Displaying
        displayTimeLeft(secondsLeft);
    }, 1000);
}

//Start timer when button is clicked
function startTimer() {
    const seconds = parseInt(this.dataset.time);
    timer(seconds);
}

//Create a click event for each button
buttons.forEach(button => button.addEventListener('click', startTimer));

document.customForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const mins = this.minutes.value;
    timer(mins*60)
    this.reset();
})