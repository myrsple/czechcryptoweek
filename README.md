# Czech Crypto Week

Czech Crypto Week is a week-long blockchain gathering in Prague (May 26 - June 1, 2025) that brings together developers, entrepreneurs, investors, and enthusiasts from across the world.

## 🚀 Tech Stack

This website is built with:
- [Astro](https://astro.build/) - Fast, lightweight static site generator
- Vanilla JavaScript - No heavy frameworks
- JSON - For structured event data

## 🏗️ Repository Structure

```
/
├── events/                # Event data in JSON format
│   ├── index.json         # Main event listing
│   └── [event-id]/        # Individual event folders
│       └── info.json      # Individual event details
├── public/                # Static assets
│   └── images/            # Event & website images
├── src/
│   ├── data/              # Fallback event data
│   ├── layouts/           # Layout components
│   └── pages/             # Page components and routes
│       ├── index.astro    # Homepage
│       └── events/        # Event detail pages
└── package.json           # Project dependencies
```

## 📖 Adding an Event

To add a new event to Czech Crypto Week, follow these steps:

### 1. Create an event directory

Create a new directory in `events/` with a unique ID for your event:

```
events/your-event-id/
```

Use kebab-case for the directory name (lowercase with hyphens).

### 2. Add event information

Create an `info.json` file in your event directory with event details:

```json
{
  "name": "Your Event Name",
  "date": "May 30, 2025",
  "location": "Prague",
  "description": "Description of your event",
  "organizers": ["Your Organization"],
  "website": "https://your-event-website.com"
}
```

### 3. Update the main events index

Add your event to `events/index.json` following this format:

```json
{
  "id": "your-event-id",
  "name": "Your Event Name",
  "date": "May 30, 2025",
  "dateISO": "2025-05-30",
  "short_description": "Brief description of your event.",
  "website": "https://your-event-website.com",
  "confirmed": true,
  "location": "Prague",
  "description": "Full description of your event.",
  "organizers": ["Your Organization"],
  "tags": ["Conference", "Workshop", "Meetup"]
}
```

### 4. Add event image (optional)

You can add an event image in the `public/images/events/` directory:

```
public/images/events/your-event-id.jpg
```

Recommended image size: 800x600px, JPG or PNG format.

### 5. Submit a pull request

Push your changes to a fork and submit a pull request to the main repository.

## 🔄 Event JSON Structure

### Required Fields
- `id`: Unique identifier for the event (same as directory name)
- `name`: Event name
- `date`: Human-readable date (e.g., "May 30, 2025")
- `dateISO`: Date in YYYY-MM-DD format (for sorting and filtering)
- `short_description`: Brief description (max 200 characters)
- `confirmed`: Boolean indicating if the event is confirmed
- `location`: Event location (typically "Prague")
- `description`: Full event description
- `organizers`: Array of organizer names
- `tags`: Array of event categories

### Optional Fields
- `website`: Event website URL
- `venue`: Object with venue details (`name` and `address`)
- `prizes`: Prize information for hackathons/competitions
- `endDateISO`: End date for multi-day events

## 👨‍💻 Development

### Prerequisites
- Node.js 16 or higher
- npm or yarn

### Local Setup

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

### Building for Production

```bash
npm run build
```

The built site will be in the `dist/` directory.

## 📝 Contact

* Twitter: [https://x.com/CzechCryptoWeek](https://x.com/CzechCryptoWeek)
* Email: ethczech@gmail.com

---

