// Validasi form kontak
document.getElementById('contact-form').onsubmit = function(e) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === "" || email === "" || message === "") {
        alert("Semua bidang harus diisi!");
        e.preventDefault();
    } else {
        alert("Pesan Anda telah dikirim. Terima kasih!");
    }
};
