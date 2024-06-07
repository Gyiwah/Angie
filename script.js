document.addEventListener('DOMContentLoaded', () => {
    // Countdown Timer
    const countdownElement = document.getElementById('countdown');
    const birthday = new Date('June 8, 2024 00:00:00').getTime();
    const countDownVideo = document.getElementById('count-down-video');

    const updateCountdown = () => {
        const now = new Date().getTime();
        const distance = birthday - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        if (distance < 0) {
            clearInterval(countdownInterval);
            countdownElement.innerHTML = 'Happy Birthday!';
            countDownVideo.style.display='block';
        }
    };

    const countdownInterval = setInterval(updateCountdown, 1000);

    // Balloons animation
    $(document).ready(function(){
        $('#balloon').click(function(){
            $(this).animate({top: '-=200px'}, 1000);
        });
    });
});
function display(){

}
