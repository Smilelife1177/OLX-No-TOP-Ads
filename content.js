// Function to hide ads based on URL parameters
const hideTopAds = () => {
    // 1. Find all potential ad containers
    // Based on the provided HTML, ads are wrapped in div.css-ri9uxm
    const adContainers = document.querySelectorAll('div.css-ri9uxm, div[data-testid="l-card"]');
    
    adContainers.forEach(container => {
        // Check if the container has a link that points to a promoted ad
        // Promoted ads have "promoted" in their search_reason parameter
        const promotedLink = container.querySelector('a[href*="promoted"]');
        
        if (promotedLink) {
            container.style.display = 'none';
        }
    });
};

// Initial run
hideTopAds();

// Observe changes in the document body to catch dynamically loaded content
const observer = new MutationObserver((mutations) => {
    hideTopAds();
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});

console.log('OLX No TOP Ads extension active (URL-based filtering).');
