# OLX No TOP Ads Firefox Extension

## Project Overview
This project is a Firefox WebExtension (Manifest V3) designed to improve the browsing experience on `olx.ua` by hiding promoted ("ТОП") advertisements. It uses a combination of CSS injection and a JavaScript content script with a `MutationObserver` to ensure ads are hidden even when the page content loads dynamically (e.g., infinite scrolling).

## Architecture
- **`manifest.json`**: Defines the extension metadata, permissions, and script injection rules.
- **`style.css`**: Provides immediate, declarative hiding of TOP ads using CSS selectors like `:has()`.
- **`content.js`**: Implements a JavaScript fallback and dynamic observer to hide ads that might bypass CSS rules or load asynchronously.
- **`README.md`**: Contains installation and usage instructions for the end-user.

## Technical Details
### Key Selectors
The extension targets the following selectors identified through manual inspection and user feedback:
- `.css-3xiokn`: A specific dynamic class often assigned to "ТОП" badges.
- `[data-testid="ad-badge"]`: A stable data attribute for ad badges.
- `div[data-testid="l-card"]`: The main container for an advertisement card.

### Dynamic Content Handling
A `MutationObserver` is initialized in `content.js` to monitor the `document.body` for added nodes. When new elements are detected, the `hideTopAds()` function is re-executed to ensure new promoted ads are hidden.

## Development & Testing
### Installation (Development Mode)
1. Open Firefox and navigate to `about:debugging`.
2. Click on **"This Firefox"**.
3. Click **"Load Temporary Add-on..."**.
4. Select the `manifest.json` file in the project root.

### Testing
- Navigate to `olx.ua` and search for any item.
- Verify that ads marked with "ТОП" (typically at the top of the results or interspersed) are no longer visible.
- Scroll down to trigger infinite loading and ensure new "ТОП" ads are also hidden.

## Conventions
- **Surgical Edits**: When modifying the extension, prefer surgical updates to specific selectors or logic blocks to maintain stability.
- **CSS First**: Prefer hiding elements via `style.css` for performance (immediate render) and use `content.js` as a robust fallback for complex or dynamic cases.
- **Text-Based Detection**: `content.js` includes a text-based search for "ТОП" as a fail-safe against class name changes.
