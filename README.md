# Czech Crypto Week Website

This is the website for Czech Crypto Week, a blockchain gathering in Prague. The site uses Astro framework and is deployed on Netlify.

## 🚀 Getting Started

### Prerequisites
- Node.js 18 or higher

### Local Development

1. Clone the repository
   ```bash
   git clone https://github.com/EthCzech/czechcryptoweek.git
   cd czechcryptoweek
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```
   The site will be available at http://localhost:4321

## 🏗️ Project Structure

```
/
├── events/                  # Event data in JSON format
│   ├── index.json           # Main event listing
│   └── [event-id]/          # Individual event details
├── public/                  # Static assets
│   └── favicon.svg          # Site favicon
├── src/
│   ├── data/                # Fallback event data
│   ├── layouts/             # Layout components
│   └── pages/               # Page components and routes
│       ├── index.astro      # Homepage
│       └── events/          # Event detail pages
└── package.json             # Project dependencies
```

## 📚 Working with Event Data

Events are stored in two places:
- `events/index.json` - Main listing of all events
- `events/[event-id]/info.json` - Detailed information for each event

The site will attempt to fetch events from the GitHub repository's main branch. If that fails, it will use fallback data from `src/data/fallbackEvents.js`.

## 🚢 Deployment

This site is automatically deployed to Netlify when changes are pushed to the main branch.

### Manual Deployment

1. Build the site
   ```bash
   npm run build
   ```

2. The built site will be in the `dist/` directory, which can be deployed to any static hosting service.

### Environment Variables

No environment variables are required for basic functionality.

## 🧞 Commands

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:4321`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally before deploying      |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |

## 📝 Contributing

See the [GitHub repository](https://github.com/EthCzech/czechcryptoweek) for how to contribute to this project.

## 📞 Contact

For technical issues with the website, please open an issue on GitHub.

For general inquiries about Czech Crypto Week:
* Twitter: [https://x.com/CzechCryptoWeek](https://x.com/CzechCryptoWeek)
* Email: ethczech@gmail.com

---

