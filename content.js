// Function to hide ads based on selectors and content
const hideTopAds = () => {
    // 1. Find all ad cards
    const adCards = document.querySelectorAll('div[data-testid="l-card"]');
    
    adCards.forEach(card => {
        // Check for common markers of TOP ads inside the card
        const hasBadgeTestId = card.querySelector('[data-testid="ad-badge"]');
        const hasUserClass = card.querySelector('.css-3xiokn');
        
        // Text-based check: find any small element that says "ТОП"
        let hasTopText = false;
        const potentialBadges = card.querySelectorAll('div, span');
        for (const el of potentialBadges) {
            if (el.textContent.trim() === 'ТОП') {
                hasTopText = true;
                break;
            }
        }

        if (hasBadgeTestId || hasUserClass || hasTopText) {
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
