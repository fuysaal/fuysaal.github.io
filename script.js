// Menü linklerine tıklandığında yumuşak kaydırmayı garantiye al
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 70, // Header yüksekliğini çıkarır
                behavior: 'smooth'
            });
        }
    });
});

console.log("Fatih Uysal Portfolio: Sistem aktif.");
