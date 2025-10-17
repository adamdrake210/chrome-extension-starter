# Chrome Extension Boilerplate

A Chrome extension boilerplate with Vite, TypeScript, and React.

## Prerequisites

- Node.js v22 or higher
- pnpm v10 or higher

## Installation

```bash
# Install dependencies
pnpm install
```

## Development

```bash
# Start the dev server
pnpm run dev
```

The dev server will run at `http://localhost:5173/`

- View the popup at: `http://localhost:5173/src/popup/`

## Build

```bash
# Build the extension
pnpm run build
```

This creates a production-ready extension in the `dist/` folder.

## Load in Chrome

1. Run `pnpm run build` to create the `dist` folder
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" (toggle in top-right corner)
4. Click "Load unpacked"
5. Select the `dist` folder from this project

## Project Structure

```
├── src/
│   ├── assets/          # Icons and static assets
│   ├── popup/           # Extension popup UI
│   │   ├── index.html
│   │   └── popup.tsx
│   ├── background.ts    # Background service worker
│   ├── content.ts       # Content script
│   └── manifest.json    # Extension manifest
├── dist/                # Build output (generated)
├── vite.config.ts       # Vite configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Project dependencies
```

## License

ISC
