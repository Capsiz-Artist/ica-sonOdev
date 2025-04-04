document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    
    // Form gönderildiğinde animasyon efekti
    const btn = document.querySelector('.submit-btn');
    btn.style.background = '#00cc6a';
    btn.textContent = 'Gönderildi!';
    
    setTimeout(() => {
        btn.style.background = '#00ff88';
        btn.textContent = 'Gönder';
        this.reset();
    }, 3000);
});

// Input ve textarea için smooth focus efekti
document.querySelectorAll('input, textarea').forEach(element => {
    element.addEventListener('focus', function() {
        this.parentElement.style.transform = 'translateY(-5px)';
    });
    
    element.addEventListener('blur', function() {
        this.parentElement.style.transform = 'translateY(0)';
    });
});
