export interface PressItem {
  publication: string
  title: string
  url: string
  date: string
  logo: string
}

// Shared by the homepage "As Featured In" strip and the /press page.
export const pressItems: PressItem[] = [
  {
    publication: 'The New York Times',
    title: "The All-Female Hacker House Trying to Break A.I.'s Glass Ceiling",
    url: 'https://www.nytimes.com/2025/08/23/business/ai-female-hackers-foundher-house.html',
    date: 'August 2025',
    logo: '/press-logos/nyt.svg',
  },
  {
    publication: 'USA Today',
    title: "In Silicon Valley's AI boom, women are building their own hacker houses",
    url: 'https://www.usatoday.com/story/money/2025/08/20/silicon-valley-tech-women-hacker-houses/85521246007/',
    date: 'August 2025',
    logo: '/press-logos/usatoday.svg',
  },
  {
    publication: 'GeekWire',
    title: "San Francisco had an all-female AI 'Hacker House' — is Seattle ready for its own?",
    url: 'https://www.geekwire.com/2025/san-francisco-had-an-all-female-ai-hacker-house-is-seattle-ready-for-its-own/',
    date: '2025',
    logo: '/press-logos/geekwire-nav.png',
  },
  {
    publication: 'KTVU FOX 2',
    title: '2 college students created an all-female hacker house in San Francisco to disrupt the startup landscape',
    url: 'https://www.ktvu.com/news/2-college-students-created-all-female-hacker-house-san-francisco-mission-take-up-more-space-start-up-world',
    date: '2025',
    logo: '/press-logos/ktvu.png',
  },
  {
    publication: 'USC Today',
    title: 'In the AI Boom, a Room of Their Own',
    url: 'https://today.usc.edu/in-the-ai-boom-a-room-of-their-own/',
    date: '2025',
    logo: '/press-logos/usc.svg',
  },
]
