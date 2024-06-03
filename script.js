document.addEventListener('DOMContentLoaded', () => {
    // Countdown Timer
    const countdownElement = document.getElementById('countdown');
    const birthday = new Date('June 8, 2024 00:00:00').getTime();

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
        }
    };

    const countdownInterval = setInterval(updateCountdown, 1000);

    // Balloons animation
    $(document).ready(function(){
        $('#balloon').click(function(){
            $(this).animate({top: '-=200px'}, 1000);
        });
    });

    // Handle wish form submission
    const wishForm = document.getElementById('wish-form');
    const wishText = document.getElementById('wish-text');
    const wishesDisplay = document.getElementById('wishes-display');

    wishForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const wish = wishText.value.trim();
        if (wish) {
            const wishElement = document.createElement('div');
            wishElement.classList.add('wish');
            wishElement.textContent = wish;
            wishesDisplay.appendChild(wishElement);
            wishText.value = '';
        }
    });
});
