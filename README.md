# OLX No TOP Ads (Firefox Extension)

[![Firefox Add-ons](https://img.shields.io/badge/Firefox-Add--ons-orange.svg)](https://addons.mozilla.org/uk/firefox/addon/olx-no-top-ads/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A lightweight Firefox extension designed to hide promoted ("TOP") advertisements on OLX.ua, providing a cleaner and more focused browsing experience.

## 🚀 Installation
**The easiest way to install the extension is via the official Firefox Add-ons store:**

### [👉 Install from Firefox Add-ons (AMO)](https://addons.mozilla.org/uk/firefox/addon/olx-no-top-ads/)

## ✨ Features
- **Precise Filtering**: Uses URL parameter analysis (`promoted` vs `organic`) to accurately identify and hide only paid ads without affecting normal listings.
- **Cross-Browser Support**: Separate versions for Firefox and Chromium (Chrome, Edge, Brave).
- **Dynamic Loading Support**: Uses `MutationObserver` to ensure new ads are hidden instantly as you scroll (infinite scroll support).
- **Lightweight**: Zero dependencies, minimal performance impact.
- **Privacy Focused**: No data collection, no external requests.

## 🛠 Installation

### For Firefox (Official)
Install via the [Firefox Add-ons store](https://addons.mozilla.org/uk/firefox/addon/olx-no-top-ads/).

### For Chromium (Chrome, Edge, Brave)
1. Go to the **Releases** page of this repository.
2. Click to "Source code(zip)" to Download the `OLX-No-TOP-Ads-releases.zip`.
3. Extract the ZIP archive to a folder on your computer.
4. Open your browser and go to `chrome://extensions/`.
5. Enable **"Developer mode"** (usually a toggle in the top right).
6. Click **"Load unpacked"** and select the folder you just extracted.

### For Firefox (Manual/Developer)
1. Go to the **Releases** page of this repository.
2. Click to "Source code(zip)" to Download the `OLX-No-TOP-Ads-releases.zip`.
3. Extract the ZIP archive to a folder on your computer.
4. Open Firefox and type `about:debugging` in the address bar.
5. Click **"This Firefox"** in the left sidebar.
6. Click **"Load Temporary Add-on..."**.
7. Select the `manifest.json` file inside the folder you extracted.

## 📖 How it Works
The extension monitors the OLX search results and identifies ad containers (`css-ri9uxm`). It checks the internal links for the `search_reason=search|promoted` parameter, which is unique to TOP ads, and applies `display: none` to those containers.

## 🤝 Contributing
Contributions are welcome! If you find a bug or have a suggestion, please open an issue or submit a pull request.

## 📄 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
