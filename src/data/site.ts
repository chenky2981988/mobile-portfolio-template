/**
 * ALL public content for the portfolio lives in this file.
 * Replace the fictional sample values below with your own details before you deploy.
 *
 * Flags:
 *  - `verified: false`  -> proof-strip item is NOT rendered.
 *  - `show: false`      -> app card is NOT rendered.
 *  - `confirmed: false` -> store / profile URL is a candidate, not yet confirmed.
 *    Store links with confirmed:false render only when RENDER_UNCONFIRMED_STORE_LINKS is true.
 *  - Profile links (GitHub) with confirmed:false are hidden everywhere.
 */

/** Set to false before publishing if any store URL is still unconfirmed. */
export const RENDER_UNCONFIRMED_STORE_LINKS = false;

/**
 * Production origin, with https:// and no trailing slash.
 * Used for the canonical URL, og:url, og:image and the sitemap.
 * Also update the Sitemap line in public/robots.txt to match.
 */
export const SITE_URL = "https://mobile-portfolio-template.vercel.app";

/** Home page <title>, og:title and twitter:title. */
export const HOME_TITLE = "John Doe — Mobile Engineer & Tech Lead";

/** Identity, hero copy, contact details and social links. */
export const PERSON = {
  name: "John Doe",
  firstName: "John",
  initials: "JD",
  roles: ["Senior Mobile Engineer", "Tech Lead"],
  location: "Lisbon, Portugal",
  /** Big hero headline. The part in `accent` is set in the italic serif. */
  headline: { lead: "I build mobile apps and lead teams that", accent: "keep them reliable." },
  summary:
    "I'm a senior mobile engineer and tech lead with 15+ years on Android, iOS, Flutter and React Native. I take features from design to release, mentor other engineers, and focus on making apps fast, stable and easy to maintain.",
  availability: "Available for contract work",
  metaDescription:
    "John Doe is a senior mobile engineer and tech lead. Sample portfolio covering Android, iOS, Flutter and React Native, plus team leadership, testing and release work.",
  email: "hello@example.com",
  linkedin: { url: "https://www.linkedin.com/in/example", confirmed: true },
  x: { url: "https://x.com/example", handle: "@example" },
  github: { url: "https://github.com/example", confirmed: true },
};

/**
 * Headshot: drop a photo at public/images/avatar.webp (or .jpg / .png), ideally 4:5 portrait,
 * at least 800x1000. It is picked up at build time; until then a monogram card is shown.
 */
export const HEADSHOT = {
  candidates: ["/images/avatar.webp", "/images/avatar.jpg", "/images/avatar.png"],
  alt: "Portrait of John Doe",
};

/** Hero fact strip. Replace these sample figures with your own. */
export const FACTS = [
  { figure: "15+", label: "years building mobile apps" },
  { figure: "4+", label: "industries: finance, travel, health and retail" },
  { figure: "3×", label: "faster screen loads after a major rewrite" },
  { figure: "500k+", label: "downloads on a consumer app I helped ship" },
  { figure: "99.5%", label: "crash-free sessions in a recent quarter" },
];

/** Technologies that scroll in the ticker below the hero. */
export const TECH_TICKER = [
  "Kotlin", "Jetpack Compose", "Coroutines & Flow", "Hilt", "Swift / SwiftUI", "Kotlin Multiplatform", "Flutter",
  "React Native", "MVVM", "Clean Architecture", "Mobile CI/CD", "Firebase Crashlytics", "Bluetooth LE", "Fastlane", "XCUITest",
];

/** Résumé download. Buttons only render if public/resume.pdf exists at build time. */
export const RESUME = {
  path: "/resume.pdf",
  downloadName: "Sample-Resume.pdf",
  updated: "Nov 2026",
};

/** Optional proof strip. Set verified: false to hide an item. */
export type ProofItem = { figure: string; label: string; verified: boolean; note?: string };
export const PROOF: ProofItem[] = [
  { figure: "15+", label: "years in mobile", verified: true },
  { figure: "3×", label: "faster screen loads (PulseBoard)", verified: true },
  { figure: "99.5%", label: "crash-free sessions (PulseBoard)", verified: true },
  { figure: "5", label: "engineers I managed at PulseBoard", verified: true },
];

/** Approach / strengths section. */
export const STRENGTHS: { title: string; body: string; tags: string[] }[] = [
  {
    title: "Native and cross-platform development",
    body: "I work on Android, iOS, Flutter and React Native, and I pick the stack that fits the product and the team. I care about clear module boundaries, tests that catch real bugs, and a codebase that a new engineer can learn in a reasonable time.",
    tags: ["Android", "iOS", "Flutter", "React Native", "Kotlin Multiplatform"],
  },
  {
    title: "Leading a mobile team",
    body: "I have led small mobile teams, planned work with Product and Backend, and coached engineers through design reviews and releases. I like leaving a team with clearer standards, better docs and a calmer release process than I found.",
    tags: ["Mentoring", "Sprint planning", "Code review", "Partnering with Product"],
  },
  {
    title: "Quality and release discipline",
    body: "I set up CI, automated tests and crash monitoring so we can release often without surprises. On a recent rewrite we cut the slowest screen loads by about two thirds and kept crash-free sessions above 99.5%.",
    tags: ["CI/CD", "Automated tests", "Crash monitoring", "Performance"],
  },
  {
    title: "Practical use of AI tools",
    body: "I use coding assistants for boilerplate, test generation and a first pass at reviews. Every change still goes through a person before it ships, and I keep secrets, licences and user data out of prompts.",
    tags: ["GitHub Copilot", "Claude Code", "Gemini", "Code review"],
  },
];

/** App Store / Google Play link on a work card. */
export type StoreLink = { store: "App Store" | "Google Play"; url: string; confirmed: boolean };

/**
 * A featured app card.
 * `shots` are phone-style store screenshots, fanned on the card.
 * `gallery` is an optional strip of wider marketing slides (used instead of the fan).
 * `personal: true` marks a side project, moves the card last and flips its media.
 */
export type App = {
  name: string;
  /** Name used in link aria-labels, e.g. "PulseBoard on Google Play (opens in a new tab)". */
  listingName: string;
  summary: string;
  attribution: string;
  personal?: boolean;
  /** Max 5 tags per card (the page also slices to 5). */
  tags: string[];
  links: StoreLink[];
  note?: string;
  noLinkText?: string;
  extLink?: { label: string; url: string; show: boolean };
  show: boolean;
  /** Short label above the card title, e.g. "2022–2026 · Android & iOS". */
  kicker: string;
  /** Visual theme for the card panel (see .theme-* in global.css). */
  theme: "sky" | "leaf" | "mint" | "violet";
  /** 64x64+ app icon in public/images/apps. */
  icon?: string;
  /** Store screenshots (self-hosted). */
  shots: { src: string; alt: string }[];
  shotsCaption?: string;
  /** Wide marketing slides shown as a scrollable gallery instead of fanned phone shots. */
  gallery?: { src: string; caption: string; alt: string }[];
  disclaimer?: string;
  placeholderText?: string;
};

/** Featured work. These four apps are fictional sample data — replace them with yours. */
export const APPS: App[] = [
  {
    name: "PulseBoard: Markets & Community",
    listingName: "PulseBoard",
    kicker: "PulseBoard · 2022–2026 · Android & iOS",
    summary: "A markets app where people follow prices and talk about trades, on Android and iOS.",
    attribution: "Tech lead at PulseBoard · ran the mobile rewrite that made the slowest screens about three times faster",
    tags: ["Android", "iOS", "Performance", "Tech lead", "Rewrite"],
    links: [
      { store: "App Store", url: "https://example.com/app-store/pulseboard", confirmed: true },
      { store: "Google Play", url: "https://example.com/play/pulseboard", confirmed: true },
    ],
    theme: "sky",
    icon: "/images/apps/pulseboard-icon.webp",
    shots: [
      { src: "/images/apps/pulseboard-1.webp", alt: "PulseBoard screen: market overview and watchlists" },
      { src: "/images/apps/pulseboard-2.webp", alt: "PulseBoard screen: live prices and community discussion" },
      { src: "/images/apps/pulseboard-3.webp", alt: "PulseBoard screen: a real-time discussion feed" },
    ],
    shotsCaption: "Screens from the PulseBoard store listing",
    show: true,
  },
  {
    name: "Harbor",
    listingName: "Harbor",
    kicker: "Ember Labs · 2020–2022 · Android",
    summary: "A regional super-app for rides, deliveries and payments inside the same account.",
    attribution: "Senior Android engineer at Ember Labs · led a three-person team that shipped in-app payments",
    tags: ["Android", "Payments", "Tech lead"],
    links: [
      { store: "App Store", url: "https://example.com/app-store/harbor", confirmed: true },
      { store: "Google Play", url: "https://example.com/play/harbor", confirmed: true },
    ],
    note: "Opens the Harbor app listing (payments live inside Harbor)",
    extLink: { label: "About Harbor Pay", url: "https://example.com/harbor/pay", show: true },
    theme: "leaf",
    icon: "/images/apps/harbor-icon.webp",
    shots: [
      { src: "/images/apps/harbor-1.webp", alt: "Harbor app screen: book a ride in a few taps" },
      { src: "/images/apps/harbor-2.webp", alt: "Harbor app screen: choose from several ride options" },
      { src: "/images/apps/harbor-3.webp", alt: "Harbor app screen from the store listing" },
    ],
    shotsCaption: "Screens from the Harbor store listing",
    show: true,
  },
  {
    name: "Ember Wallet",
    listingName: "Ember Wallet",
    kicker: "Ember Labs · 2020–2022 · Flutter",
    summary: "A wallet app for transfers, bill pay and QR checkout, written in Flutter.",
    attribution: "Senior engineer at Ember Labs · wrote the first version of Ember Wallet in Flutter and took it to the stores",
    tags: ["Flutter", "Cross-platform", "Payments"],
    links: [
      { store: "App Store", url: "https://example.com/app-store/ember-wallet", confirmed: true },
      { store: "Google Play", url: "https://example.com/play/ember-wallet", confirmed: true },
    ],
    theme: "mint",
    icon: "/images/apps/ember-icon.webp",
    shots: [
      { src: "/images/apps/ember-1.webp", alt: "Ember Wallet screen: home with balance and payment shortcuts" },
      { src: "/images/apps/ember-2.webp", alt: "Ember Wallet screen: free transfers between accounts" },
      { src: "/images/apps/ember-3.webp", alt: "Ember Wallet screen: purchase protection" },
    ],
    shotsCaption: "Screens from the Ember Wallet store listing",
    show: true,
  },
  {
    name: "Lumen",
    listingName: "Lumen",
    kicker: "Personal product · Sep 2026 – present",
    summary: "A savings helper that asks a few questions, suggests a simple plan and lists a short set of options, on web and mobile.",
    attribution: "Side project · I designed the app, wrote the React Native client and added checks so suggestions stay within the plan the user chose",
    personal: true,
    tags: ["React Native", "Gemini", "Open finance APIs", "Side project"],
    links: [],
    noLinkText: "App link coming soon",
    theme: "violet",
    icon: "/images/apps/lumen-icon.webp",
    shots: [],
    gallery: [
      { src: "/images/apps/lumen-1.webp", caption: "Welcome", alt: "Lumen welcome screen in dark and light themes" },
      { src: "/images/apps/lumen-2.webp", caption: "Onboarding", alt: "Lumen onboarding: building a risk profile" },
      { src: "/images/apps/lumen-3.webp", caption: "Explore & rank", alt: "Lumen explore screen ranking savings options" },
      { src: "/images/apps/lumen-4.webp", caption: "Your plan", alt: "Lumen plan screen with a risk-aligned allocation" },
      { src: "/images/apps/lumen-5.webp", caption: "My portfolio", alt: "Lumen portfolio screen" },
      { src: "/images/apps/lumen-6.webp", caption: "Compare options", alt: "Lumen comparison of two savings options" },
    ],
    disclaimer: "Illustrative screens · not financial advice",
    placeholderText: "Screens coming soon",
    show: true,
  },
];

/** Case-study accordion items (context, work, team, results). */
export type CaseStudy = {
  title: string;
  role: string;
  dates: string;
  items: { label: string; body: string[] }[];
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    title: "PulseBoard: making the app feel fast again",
    role: "Mobile tech lead · Android & iOS",
    dates: "Aug 2022 – Aug 2026",
    items: [
      { label: "Context", body: ["PulseBoard is a markets app used by a large audience. I was the mobile tech lead for the Android and iOS apps, and I worked with product and backend on what we built next."] },
      {
        label: "What I did",
        body: [
          "Planned and carried out a rewrite of the slowest parts of the Android app, moving them to Kotlin Coroutines, Hilt and Jetpack Compose. The same release work landed on iOS with the iOS engineers on the team.",
          "Set up CI, automated tests, staged rollouts and crash monitoring so we could ship weekly with fewer late surprises.",
          "Introduced a nightly UI test run that filed a ticket when something broke, so the team could fix issues before users hit them.",
        ],
      },
      { label: "Team", body: ["I managed five mobile and QA engineers in two time zones, ran reviews, and helped people work through tricky bugs."] },
      { label: "Results", body: ["The slowest screens loaded about three times faster.", "Crash-free sessions stayed above 99.5% in the following quarter."] },
    ],
  },
  {
    title: "Harbor Pay and Ember Wallet: payments in one product family",
    role: "Senior Android engineer / tech lead",
    dates: "Sep 2020 – Aug 2022",
    items: [
      { label: "Context", body: ["At Ember Labs I worked on payments inside Harbor, which meant sharing modules with other product teams."] },
      {
        label: "What I did",
        body: [
          "Wrote the Android designs for Harbor Pay, reviewed the team's work and helped finish the harder integrations.",
          "Broke product requests into tickets, estimates and a sequence we could actually ship.",
        ],
      },
      { label: "Team", body: ["I led three Android engineers and worked with Product, Backend and QA to get payment features into production."] },
      { label: "Ember Wallet (Flutter)", body: ["In the same period I built the first version of Ember Wallet in Flutter and released it on both stores."] },
    ],
  },
  {
    title: "Connected devices: Bluetooth and IoT on Android",
    role: "Tech lead · senior engineer",
    dates: "2013 – 2020",
    items: [
      { label: "Wayline · FleetLink", body: ["I led the Android work for an app that talks to vehicle devices over Bluetooth Classic and BLE, and I helped the team through integration testing and the first production release."] },
      { label: "Meridian · Device Guard", body: ["I built a laptop security feature that locked the machine when a phone moved out of Bluetooth range and sent a simple alert."] },
      { label: "Northshore · Retail", body: ["I added indoor wayfinding to a mall app using BLE beacons and a floor map, so shoppers could find a store from where they were standing."] },
      { label: "Brightline · Retail", body: ["I connected Android apps to barcode scanners and Bluetooth printers for in-store checkout."] },
    ],
  },
  {
    title: "Lumen: a small savings helper",
    role: "Personal product",
    dates: "Sep 2026 – present",
    items: [
      { label: "Idea", body: ["A simple web and mobile app that helps someone sketch a savings plan without turning into a full advisor."] },
      { label: "How it works", body: ["A set of rules builds a plan from the answers the user gives. A language model may then shorten a list of already-approved options, but it cannot invent new ones."] },
      { label: "Checks", body: ["Suggestions have to stay inside the plan the user picked. The model is not allowed to invent numbers or promise returns."] },
      { label: "Stack", body: ["React Native (web and mobile), Gemini, open finance APIs."] },
    ],
  },
];

/** Chronological roles in the experience list. */
export type Role = { company: string; role: string; dates: string; years: string; location: string; points: string[] };
export const EXPERIENCE: Role[] = [
  {
    company: "PulseBoard Inc.", role: "Mobile Tech Lead (Android & iOS)", dates: "Aug 2022 – Aug 2026", years: "2022–2026", location: "Lisbon, Portugal",
    points: [
      "Led Android and iOS work on a markets app used by a large audience.",
      "Ran a rewrite that made the slowest screens about three times faster, and kept crash-free sessions above 99.5%.",
      "Set up CI, tests and crash monitoring, and introduced a nightly UI test run.",
      "Managed five mobile and QA engineers in two time zones.",
    ],
  },
  {
    company: "Ember Labs", role: "Senior Android Engineer, Harbor Pay", dates: "Sep 2020 – Aug 2022", years: "2020–2022", location: "Lisbon, Portugal",
    points: [
      "Led three Android engineers shipping payments inside the Harbor app.",
      "Wrote technical designs, estimates and the implementation plan for Harbor Pay.",
      "Worked with Product, Backend and QA to get those features into production.",
      "Built the first version of Ember Wallet in Flutter and released it on both stores.",
    ],
  },
  {
    company: "Wayline Technologies", role: "Tech Lead, FleetLink", dates: "Jul 2019 – Sep 2020", years: "2019–2020", location: "Lisbon, Portugal",
    points: [
      "Led Android work on an app that connects to vehicle devices over Bluetooth Classic and BLE.",
      "Helped the team through integration testing and the first production release.",
    ],
  },
  {
    company: "Meridian Consulting", role: "Senior Consultant", dates: "Dec 2016 – Jun 2019", years: "2016–2019", location: "Lisbon, Portugal",
    points: [
      "Built a health-insurance app feature that read documents with OCR.",
      "Added a Bluetooth proximity lock and alerts to a laptop security app.",
    ],
  },
  {
    company: "Northshore Digital", role: "Senior Android Developer", dates: "Apr 2015 – Dec 2016", years: "2015–2016", location: "Lisbon, Portugal",
    points: [
      "Shipped Android work on client apps in retail, travel, health and media.",
      "Added BLE-beacon wayfinding to a shopping-mall app.",
    ],
  },
  {
    company: "Brightline Software", role: "Software Engineer", dates: "May 2013 – Mar 2015", years: "2013–2015", location: "Lisbon, Portugal",
    points: [
      "Wrote Android features for wellness, ticketing, shop and media apps.",
      "Connected apps to barcode scanners and Bluetooth printers.",
    ],
  },
  {
    company: "Calliope", role: "Software Developer", dates: "May 2010 – Apr 2013", years: "2010–2013", location: "Porto, Portugal",
    points: [
      "Built messaging and internet-calling (VoIP) apps.",
      "Added SMS fallback for people who were not yet on the service.",
    ],
  },
];

/** Every mobile skill to list, grouped. Items are arrays so they may contain commas. */
export const SKILLS: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["Kotlin", "Swift"] },
  { group: "Android", items: ["Jetpack Compose", "Kotlin Coroutines", "Flow", "LiveData", "Hilt", "Android Profiling"] },
  { group: "iOS", items: ["SwiftUI"] },
  { group: "Cross-platform", items: ["Kotlin Multiplatform (KMP)", "Flutter", "React Native"] },
  { group: "Architecture", items: ["MVVM", "MVI", "Clean Architecture", "Modular apps", "Design reviews", "Code reviews"] },
  { group: "Testing & quality", items: ["JUnit", "MockK", "Espresso", "XCTest", "XCUITest", "Automated Testing", "UI Test Automation", "Mobile QA"] },
  { group: "CI/CD & release", items: ["Mobile CI/CD", "Fastlane", "Build automation", "Staged rollouts"] },
  { group: "Monitoring & reliability", items: ["Firebase Crashlytics", "Performance monitoring", "Incident response"] },
  { group: "Networking & integration", items: ["REST APIs", "Firebase", "Open finance APIs", "VoIP & real-time messaging", "OCR document processing"] },
  { group: "Connectivity & IoT", items: ["Bluetooth Classic", "Bluetooth Low Energy (BLE)", "Beacon Technology", "Barcode scanners & Bluetooth printers"] },
  { group: "Payments & fintech", items: ["In-app payments", "Digital wallet in Flutter", "Markets app", "Savings helper"] },
  { group: "Analytics & privacy", items: ["Mixpanel", "Google Analytics", "mParticle", "OneTrust CMP"] },
  { group: "AI developer tools", items: ["Claude Code", "GitHub Copilot", "Gemini", "CodeRabbit"] },
  { group: "Leadership", items: ["Mentoring", "Sprint planning", "Estimating work", "Working with Product and QA"] },
];

/** Education, programmes, awards and languages. */
export const EDUCATION = [
  { title: "B.Sc. in Computer Science", detail: "Riverside University", years: "2006–2010" },
  { title: "Engineering Leadership programme", detail: "Meridian Academy", years: "2018" },
  { title: "Outstanding Engineer", detail: "Meridian Consulting", years: "2017" },
  { title: "Team Excellence Award", detail: "Brightline Software", years: "2014" },
  { title: "Languages", detail: "English, Portuguese, Spanish", years: "" },
];

/**
 * Optional note rendered once, after the last employer app and before personal projects.
 * Leave as an empty string to hide it.
 */
export const OWNERSHIP_NOTE = "Sample apps, logos and screenshots are placeholders for demonstration. Replace them with your own work.";

/** Contact section copy. */
export const CONTACT = {
  heading: "Need a mobile engineer or a tech lead?",
  body: "I take on contract and full-time work: new features, a rewrite, or a short spell leading a mobile team. I'm based in Lisbon and work happily with remote teammates. If that sounds useful, please get in touch.",
};

/** Primary section navigation (header). */
export const SECTIONS = [
  { id: "apps", label: "Work" },
  { id: "about", label: "Approach" },
  { id: "work", label: "Case studies" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
];
