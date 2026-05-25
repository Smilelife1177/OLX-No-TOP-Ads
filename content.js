// Function to hide ads based on selectors and content
const hideTopAds = () => {
    // 1. Hide by the specific class provided by the user
    const topBadges = document.querySelectorAll('.css-3xiokn, [data-testid="ad-badge"]');
    topBadges.forEach(badge => {
        // Try to find the closest card container to hide the whole ad
        const card = badge.closest('[data-testid="l-card"]') || badge.parentElement;
        if (card) {
            card.style.display = 'none';
        }
    });

    // 2. Text-based detection as a backup (searching for "ТОП")
    const allDivs = document.querySelectorAll('div, span');
    allDivs.forEach(el => {
        if (el.textContent === 'ТОП' && el.offsetParent !== null) {
            const card = el.closest('[data-testid="l-card"]');
            if (card) {
                card.style.display = 'none';
            }
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
