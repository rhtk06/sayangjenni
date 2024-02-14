// script.js

// Fungsi untuk mengubah teks "emot love" menjadi emoji hati
document.addEventListener('DOMContentLoaded', function() {
    var loveSpan = document.querySelector('.love');
    if (loveSpan) {
        loveSpan.innerHTML = '&#10084;'; // Emoji hati unicode
    }
});
