// Main application script
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Initialize tooltips for all elements with data-tooltip attribute
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    tooltipElements.forEach(el => {
        el.addEventListener('mouseenter', showTooltip);
        el.addEventListener('mouseleave', hideTooltip);
    });

    // Track workout button click (example)
    const trackButtons = document.querySelectorAll('.track-workout');
    trackButtons.forEach(button => {
        button.addEventListener('click', () => {
            console.log('Track workout clicked');
            // In a real app, this would open the workout tracking modal
        });
    });

    // Mobile menu toggle (handled in navbar component)
});

function showTooltip(e) {
    const tooltipText = this.getAttribute('data-tooltip');
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip absolute bg-gray-800 text-white px-2 py-1 rounded text-sm z-50';
    tooltip.textContent = tooltipText;
    document.body.appendChild(tooltip);
    
    const rect = this.getBoundingClientRect();
    tooltip.style.top = `${rect.top - tooltip.offsetHeight - 5}px`;
    tooltip.style.left = `${rect.left + rect.width / 2 - tooltip.offsetWidth / 2}px`;
    
    this.tooltip = tooltip;
}

function hideTooltip() {
    if (this.tooltip) {
        this.tooltip.remove();
    }
}
