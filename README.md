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

## How to Contribute

### Adding Your Event

Anyone can organize a side-event during Czech Crypto Week. Here's how to add your event:

1. **Fork the repository**
   * Click the "Fork" button at the top right of [this repository](https://github.com/EthCzech/czechcryptoweek)

2. **Clone your fork**
   ```
   git clone https://github.com/YOUR-USERNAME/czechcryptoweek.git
   cd czechcryptoweek
   ```

3. **Add your event information**
   * For a confirmed event:
     * Add your event to `events/index.json`
     * Create a folder for your event at `events/YOUR-EVENT-ID/`
     * Add an `info.json` file with your event details (see template below)
   
   * For a TBC event:
     * Simply add a minimal entry to `events/index.json` with just the name and `"confirmed": false`

4. **Create a pull request**
   * Commit your changes:
     ```
     git add .
     git commit -m "Add EVENT_NAME event"
     git push origin main
     ```
   * Go to your fork on GitHub and click "Pull request" to submit your event

### Event Template

Here's a template for your `info.json` file:

```json
{
  "id": "your-event-id",
  "name": "Your Event Name",
  "date": "May 26, 2025",
  "short_description": "A brief description of your event (1-2 sentences)",
  "website": "https://your-event-website.com",
  "confirmed": true,
  "location": "Venue Name, Prague, Czech Republic",
  "description": "A longer description of your event. Include details about the focus, target audience, and what attendees can expect.",
  "organizers": ["Your Name", "Your Organization"],
  "venue": {
    "name": "Venue Name",
    "address": "Full venue address"
  },
  "prizes": "Optional - if your event has prizes, list them here"
}
```

### Website Contributions

Want to improve the Czech Crypto Week website?

1. Fork and clone the repository as described above
2. Make your changes to the code
3. Test locally with `npm run dev`
4. Submit a pull request with your improvements

## Potential Side Events

| Organization/Project | Event Type | Contact Person |
|----------------------|------------|----------------|
| ProtoLayers | Builder Conference | Damsky |
| How to DAO | Workshop | Jan Puncar & Kevin Owocki |
| Funding the Commons | Meetup | Tereza Bizkova |
| Running Club Prague | Community Activity | TBC |
| Base | Base Developer Meetup | EthCzech |
| EthCzech | Community Meetup | TBC |
| Ackee | Happy Hour | TBC |
| BeerFi | Developer Meetup | TBC |
| Web3PrivacyNow | Privacy Meetup | TBC |
| OnlyDust | Open Source Meetup | TBC |
| Logos |  Meetup | TBC |
| Dabl.Club |  Workshop/Bootcamp | TBC |
| ZKHack |  Meetup | TBC |
| Longevity |  Meetup | TBC |
| Polkadot |  Meetup | TBC |

*TBC - To Be Confirmed

## Get Involved
Interested in organizing a side event? Contact us at ethczech@gmail.com

## Contact
* Twitter: [https://x.com/CzechCryptoWeek](https://x.com/CzechCryptoWeek)
* Mail: ethczech@gmail.com

---

