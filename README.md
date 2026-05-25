# OLX No TOP Ads (Firefox Extension)

A lightweight Firefox extension designed to hide promoted ("TOP") advertisements on OLX.ua, providing a cleaner and more focused browsing experience.

## 🚀 Features
- **Precise Filtering**: Uses URL parameter analysis (`promoted` vs `organic`) to accurately identify and hide only paid ads without affecting normal listings.
- **Dynamic Loading Support**: Uses `MutationObserver` to ensure new ads are hidden instantly as you scroll (infinite scroll support).
- **Lightweight**: Zero dependencies, minimal performance impact.
- **Privacy Focused**: No data collection, no external requests.

## 🛠 Installation

### For Developers (Manual)
1. Download or clone this repository.
2. Open Firefox and type `about:debugging` in the address bar.
3. Click **"This Firefox"** in the left sidebar.
4. Click **"Load Temporary Add-on..."**.
5. Select the `manifest.json` file from the project folder.

## 📖 How it Works
The extension monitors the OLX search results and identifies ad containers (`css-ri9uxm`). It checks the internal links for the `search_reason=search|promoted` parameter, which is unique to TOP ads, and applies `display: none` to those containers.

## 🤝 Contributing
Contributions are welcome! If you find a bug or have a suggestion, please open an issue or submit a pull request.

## 📄 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
