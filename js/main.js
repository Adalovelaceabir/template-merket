document.addEventListener('DOMContentLoaded', function() {
    // Load templates dynamically
    fetchTemplates();
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Fetch templates from backend API
async function fetchTemplates() {
    try {
        const response = await fetch('/api/templates');
        const templates = await response.json();
        
        const templateGrid = document.getElementById('templateGrid');
        templateGrid.innerHTML = '';
        
        templates.forEach(template => {
            const templateCard = document.createElement('div');
            templateCard.className = 'template-card';
            templateCard.innerHTML = `
                <div class="template-img">
                    <img src="${template.imageUrl}" alt="${template.name}">
                </div>
                <div class="template-info">
                    <h3>${template.name}</h3>
                    <p>${template.description}</p>
                    <div class="template-price">
                        <span class="price">$${template.price}</span>
                        <button class="btn primary">View Details</button>
                    </div>
                </div>
            `;
            
            templateGrid.appendChild(templateCard);
        });
    } catch (error) {
        console.error('Error fetching templates:', error);
    }
}
