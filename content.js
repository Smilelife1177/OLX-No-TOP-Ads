// MutationObserver to handle dynamically loaded ads (infinite scroll)
const hideTopAds = () => {
    // Find all ad cards that contain a badge with "ТОП" or have the ad-badge testid
    const adCards = document.querySelectorAll('div[data-testid="l-card"]');
    
    adCards.forEach(card => {
        const badge = card.querySelector('[data-testid="ad-badge"]');
        if (badge) {
            card.style.display = 'none';
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

console.log('OLX No TOP Ads extension active.');
