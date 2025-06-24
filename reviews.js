document.addEventListener('DOMContentLoaded', function() {
    const reviewForm = document.getElementById('reviewForm');
    const reviewsContainer = document.getElementById('reviewsContainer');
    
    function loadReviews() {
        const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
        reviewsContainer.innerHTML = '';
        
        if (reviews.length === 0) {
            reviewsContainer.innerHTML = '<p>Пока нет отзывов. Будьте первым!</p>';
            return;
        }
        
        reviews.forEach(review => {
            const reviewElement = document.createElement('div');
            reviewElement.className = 'review animate-on-scroll';
            reviewElement.innerHTML = `
                <div class="review-header">
                    <span class="review-author">${review.name}</span>
                    <span class="review-date">${new Date(review.date).toLocaleDateString()}</span>
                </div>
                <div class="review-text">${review.text}</div>
            `;
            reviewsContainer.appendChild(reviewElement);
        });
        
        setTimeout(() => {
            const event = new Event('scroll');
            window.dispatchEvent(event);
        }, 100);
    }
    
    reviewForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('reviewName').value;
        const text = document.getElementById('reviewText').value;
        
        if (!name || !text) return;
        
        const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
        
        reviews.push({
            name: name,
            text: text,
            date: new Date().toISOString()
        });
        
        localStorage.setItem('reviews', JSON.stringify(reviews));
        
        loadReviews();
        
        reviewForm.reset();
    });
    
    loadReviews();
});