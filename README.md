# Czech Crypto Week
## May 26 - June 1, 2025 • Prague, Czech Republic

## What is Czech Crypto Week?
Czech Crypto Week is a week-long blockchain gathering in Prague that brings together developers, entrepreneurs, investors, and enthusiasts from across the world. The event leverages the Czech Republic's favorable regulatory environment and growing blockchain ecosystem to showcase regional innovation and facilitate international collaboration.

https://x.com/CzechCryptoWeek

## When is it?
**May 26 - June 1, 2025**

Czech Crypto Week will align with:
* [ETHPrague Conference](https://ethprague.com/) (27 - 29 May)
* [ETHGlobal hackathon](https://ethglobal.com/events/prague) (30 May - 1 June)

## Confirmed Events

| Event | Date | Type | Status |
|-------|------|------|---------|
| [ETHPrague & Czech Crypto Week Kick-off](/events/kickoff2025) | May 26 | Opening Event | ✅ Confirmed |
| [ETHPrague Conference](/events/ethprague2025) | May 27-29 | Conference | ✅ Confirmed |
| [ETHGlobal Hackathon](/events/ethglobal) | May 30 - June 1 | Hackathon | ✅ Confirmed |
| [ProtoLayers Conference](/events/protolayers) | May 31 | R&D Event | ✅ Confirmed |
| [Urbe Campus](/events/urbecampus) | May 28-31 | Bootcamp | ✅ Confirmed |
| [EthCzech Community Meetup](/events/meetup) | May 29 | Meetup | ✅ Confirmed |

## Potential Side Events

| Organization/Project | Event Type | Contact Person | Status |
|----------------------|------------|----------------|---------|
| How to DAO | Workshop | Jan Puncar & Kevin Owocki | 🟡 In Discussion |
| Funding the Commons | Meetup | Tereza Bizkova | 🟡 In Discussion |
| Running Club Prague | Community Activity | TBC | 🟡 In Discussion |
| Base | Base Developer Meetup | EthCzech | 🟡 In Discussion |
| Ackee | Happy Hour | TBC | 🟡 In Discussion |
| BeerFi | Developer Meetup | TBC | 🟡 In Discussion |
| Web3PrivacyNow | Privacy Meetup | TBC | 🟡 In Discussion |
| OnlyDust | Open Source Meetup | TBC | 🟡 In Discussion |
| Logos | Meetup | TBC | 🟡 In Discussion |
| Dabl.Club | Workshop/Bootcamp | TBC | 🟡 In Discussion |
| ZKHack | Meetup | TBC | 🟡 In Discussion |
| Longevity | Meetup | TBC | 🟡 In Discussion |
| Polkadot | Meetup | TBC | 🟡 In Discussion |

## Adding Events

To add a new event to Czech Crypto Week, follow these steps:

1. Create a new directory in `events/[event-id]/` with a unique ID
2. Add an `info.json` file with event details
3. Update `events/index.json` with the event information
4. Submit a pull request

### Event JSON Structure

```json
{
  "id": "unique-event-id",
  "name": "Event Name",
  "date": "Date",
  "dateISO": "YYYY-MM-DD",
  "short_description": "Brief description",
  "website": "Event website",
  "confirmed": true/false,
  "location": "Prague",
  "description": "Full description",
  "organizers": ["Organizer names"],
  "tags": ["Tag1", "Tag2"]
}
```

### Required Fields
- `id`: Unique identifier for the event
- `name`: Event name
- `date`: Human-readable date
- `dateISO`: Date in YYYY-MM-DD format
- `short_description`: Brief description (max 200 characters)
- `confirmed`: Boolean indicating if the event is confirmed
- `location`: Event location (default: "Prague")
- `description`: Full event description
- `organizers`: Array of organizer names
- `tags`: Array of relevant tags (e.g., ["Conference", "Workshop", "Meetup"])

### Optional Fields
- `website`: Event website URL
- `venue`: Object with venue details
- `prizes`: Prize information for hackathons/competitions

## Get Involved
Interested in organizing a side event? Contact us at ethczech@gmail.com

## Contact
* Twitter: [https://x.com/CzechCryptoWeek](https://x.com/CzechCryptoWeek)
* Mail: ethczech@gmail.com

---

