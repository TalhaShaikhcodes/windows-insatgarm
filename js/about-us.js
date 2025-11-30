// JavaScript for dynamic page loading
document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', (event) => {
        const target = event.target.closest('a[data-page]');
        if (target) {
            event.preventDefault();
            const pageName = target.dataset.page;
            // In a real multi-page setup, you would load content dynamically or redirect
            // For this simulated environment, we now use an alert for demonstration.
            alert(`ATTEMPTING TO ACCESS: ${pageName.toUpperCase()} SYSTEM...`);
            console.log(`Navigating to page: ${pageName}`);
        }
    });
});