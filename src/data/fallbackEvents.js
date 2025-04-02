export const fallbackEvents = [
  {
    id: "kickoff2025",
    name: "ETHPrague & Czech Crypto Week Kick-off",
    date: "May 26, 2025",
    dateISO: "2025-05-26",
    short_description: "The official opening event of Czech Crypto Week and ETHPrague.",
    website: "https://ethprague.com",
    tickets: "https://tix.ducttape.events/dt/ethpragueconf25/",
    confirmed: true,
    location: "Prague",
    description: "Join us for the official kick-off of Czech Crypto Week and ETHPrague 2025. Meet fellow attendees, speakers, and organizers while getting an overview of the exciting week ahead.",
    organizers: ["ETHPrague Team", "EthCzech Community"],
    tags: ["Social", "Community", "Opening"]
  },
  {
    id: "pragma",
    name: "Pragma Prague",
    date: "May 29, 2025",
    dateISO: "2025-05-29",
    short_description: "The premier developer-focused conference for the Ethereum ecosystem and beyond.",
    website: "https://ethglobal.com/events/pragma-prague",
    tickets: "https://ethglobal.com/events/pragma-prague",
    confirmed: true,
    location: "Prague",
    description: "Pragma is a developer-focused conference showcasing the best of Ethereum and Web3 builder tools and infrastructure. Join leading developers and innovators for discussions on the future of blockchain development.",
    organizers: ["ETHGlobal"],
    venue: {
      name: "Holešovice Market - Hall 13",
      address: "Bubenské nábř. 306, 170 00 Praha 7-Holešovice, Czechia",
      maps: "https://maps.app.goo.gl/rZVoWVuGwQ4WeMEE7"
    },
    tags: ["Conference", "Developer", "Ethereum"]
  },
  {
    id: "ethprague2025",
    name: "ETHPrague 2025",
    date: "May 27-29, 2025",
    dateISO: "2025-05-27",
    short_description: "A conference focused on Ethereum development and innovation.",
    website: "https://ethprague.com",
    tickets: "https://tix.ducttape.events/dt/ethpragueconf25/",
    confirmed: true,
    location: "Prague",
    description: "ETHPrague is a leading Ethereum conference focusing on innovation, development, and the future of web3. Join developers, entrepreneurs, and enthusiasts for three days of talks, workshops, and networking in the heart of Prague.",
    organizers: ["ETHPrague Team"],
    tags: ["Conference", "Ethereum"]
  },
  {
    id: "ethglobal",
    name: "ETHGlobal Hackathon",
    date: "May 30 - June 1, 2025",
    dateISO: "2025-05-30",
    short_description: "A global hackathon bringing together Ethereum developers to build projects.",
    website: "https://ethglobal.com/events/prague",
    tickets: "https://ethglobal.com/events/prague#register",
    confirmed: true,
    location: "Prague",
    description: "Join the world's premier Ethereum hackathon where developers collaborate to build innovative decentralized applications. With over $175,000 in prizes and support from industry leaders, this is your chance to turn your ideas into reality. The event features technical mentorship, workshops, exclusive swag, curated content, and free food & drinks.",
    organizers: ["ETHGlobal"],
    venue: {
      name: "Cubex Centrum Praha",
      address: "Na Strži 2097/63, 140 00 Praha 4-Nusle, Czechia"
    },
    prizes: "$175,000 available in prizes from sponsors including Blockscout, 1inch, LayerZero, Flow, Pyth Network, Chainlink, and more",
    tags: ["Hackathon", "Ethereum"]
  },
  {
    id: "protolayers",
    name: "ProtoLayers Conference",
    date: "May 31, 2025",
    dateISO: "2025-05-31",
    short_description: "An Ethereum research and development focused event by ProtoLayers.",
    website: "https://protolayers.dev",
    tickets: "https://lu.ma/wt1a6o9m",
    confirmed: true,
    location: "Prague",
    description: "Join ProtoLayers for a deep dive into cutting-edge Ethereum research and development. This focused event brings together researchers and developers to discuss the latest advances in Ethereum protocol, layer-2 solutions, and scaling technologies.",
    organizers: ["Damsky", "ProtoLayers Team"],
    tags: ["Conference", "R&D", "Layer2"]
  },
  {
    id: "urbecampus",
    name: "Urbe Campus",
    date: "May 28-31, 2025",
    dateISO: "2025-05-28",
    short_description: "A 4-day bootcamp where students and beginner developers will be able to go from zero to hero with their Web3 development skills.",
    website: "https://urbe.build/",
    confirmed: true,
    location: "Prague",
    description: "Urbe Campus is a 4-day bootcamp where students and beginner developers will be able to go from zero to hero with their Web3 development skills. This hands-on learning experience is designed to help newcomers quickly build practical Web3 development competencies.",
    organizers: ["Urbe.eth Team"],
    tags: ["Bootcamp", "Education", "Developer"]
  },
  {
    id: "beerfi",
    name: "Beerfi Prague - Web3 on-chain dev Meetup #37",
    date: "May 27, 2025",
    dateISO: "2025-05-27",
    time: "7:00 PM - 10:00 PM CEST",
    short_description: "A monthly meetup for Web3 builders, smart contract programmers and auditors.",
    tickets: "https://www.meetup.com/web3-on-chain-dev-meetup-group/events/304723057/",
    confirmed: true,
    location: "Prague",
    description: "Once a month on the last Tuesday, we bring together Web3 builders - smart contract programmers and auditors. Whether you are a Web2 developer interested to learn more or a senior in the Web3 sphere, our meetup is for you! Enjoy a nice cold lager and get ready to blow your mind on what's possible in blockchain.",
    organizers: ["Radek Š.", "Ethan C."],
    venue: {
      name: "Cafe DECADA",
      address: "Vacínova 876/10, Hlavní město Praha",
      maps: "https://maps.app.goo.gl/oBhBZ4XXLe5HSpK16"
    },
    tags: ["Meetup", "Developer", "Smart Contracts"]
  },
  {
    id: "meetup",
    name: "EthCzech Community Meetup",
    date: "May 29, 2025",
    dateISO: "2025-05-29",
    short_description: "Join the local Ethereum community for networking and discussions.",
    website: "https://lu.ma/user/ethczech",
    confirmed: true,
    location: "Prague",
    description: "Join the local Ethereum community for an evening of networking, short presentations, and discussions. This is a great opportunity to meet like-minded enthusiasts, developers, and entrepreneurs who are building the future of Web3 in the Czech Republic and beyond.",
    organizers: ["EthCzech Community"],
    tags: ["Meetup", "Community", "Networking"]
  },
  {
    name: "Ackee Happy Hour",
    confirmed: false,
    tags: ["Social"]
  },
  {
    name: "BeerFi Developer Meetup",
    confirmed: false,
    tags: ["Meetup", "Developer"]
  },
  {
    id: "web3privacy",
    name: "Web3Privacy Now Meetup x ETHPrague 2025",
    date: "May 29, 2025",
    dateISO: "2025-05-29",
    time: "4:00 PM - 11:00 PM",
    short_description: "A meetup focused on privacy technologies in the Web3 space.",
    website: "https://web3privacy.info",
    tickets: "https://lu.ma/jhp1iapn",
    confirmed: true,
    location: "Prague",
    description: "Join the Web3PrivacyNow community for an evening dedicated to privacy technologies in the decentralized web. Learn about the latest advancements in zero-knowledge proofs, privacy-preserving protocols, and practical tools for enhancing privacy in blockchain applications.",
    organizers: ["Web3Privacy Now Team"],
    tags: ["Meetup", "Privacy"]
  },
  {
    name: "OnlyDust Open Source Meetup",
    confirmed: false,
    tags: ["Meetup", "Open Source"]
  },
  {
    name: "Logos Meetup",
    confirmed: false,
    tags: ["Meetup"]
  },
  {
    name: "Dabl.Club Workshop/Bootcamp",
    confirmed: false,
    tags: ["Workshop", "Bootcamp"]
  },
  {
    name: "ZKHack Meetup",
    confirmed: false,
    tags: ["Meetup", "ZKP"]
  },
  {
    name: "Longevity Meetup",
    confirmed: false,
    tags: ["Meetup", "Longevity"]
  },
  {
    name: "Polkadot Meetup",
    confirmed: false,
    tags: ["Meetup", "Polkadot"]
  }
]; 