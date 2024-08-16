# plasmo-nextjs-starter-template

## Introduction

This is a starter that combines [Plasmo](https://www.plasmo.com) and [Next.js](https://nextjs.org). The advantages of [Plasmo](https://www.plasmo.com) make it seamlessly compatible with [Next.js](https://nextjs.org), helping you develop browser plug-ins faster and better.

## Features

- **Next.js**: Support Next.js to develop your browser plug-ins.
- **Tailwind CSS**: Support Tailwind CSS to quickly build your UI.
- **Automatically publish to store**: Automatically publish to Chrome Web Store when a new release is created.

## Usage

1. Click on the Bookmarks Exporter icon in your Chrome toolbar.
2. Click the "Export Bookmarks" button.
3. Save the downloaded JSON file to your desired location.

## Development

To set up the development environment:

1. Install dependencies:
   ```sh
   pnpm install
   ```
2. Start the development server:
   ```sh
   pnpm dev
   ```
3. Open Chrome and navigate to `chrome://extensions/`.
4. Enable "Developer mode" by clicking the toggle switch in the top right corner.
5. Click "Load unpacked" and select the `build` folder inside your project directory.
6. Rename the `example.keys.json` file to `keys.json` and fill in the corresponding fields.
7. Make your changes and refresh the extension in Chrome to see the updates.

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=evanlong0803/plasmo-nextjs-starter-template&type=Date)](https://star-history.com/#evanlong0803/plasmo-nextjs-starter-template&Date)

## Acknowledgements

- [Plasmo Framework](https://www.plasmo.com) for providing a robust platform for Chrome extension development.
