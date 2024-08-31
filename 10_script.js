// script.js
document.addEventListener('DOMContentLoaded', function() {
    const joinButton = document.querySelector('.hero button');
    if (joinButton) {
        joinButton.addEventListener('click', function() {
            alert('Thank you for your interest! Join our community by visiting our contact page.');
        });
    }
});