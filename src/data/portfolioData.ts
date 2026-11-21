export interface ShowcaseWorkItem {
  id: string;
  block: 'academic' | 'events';
  title: string;
  subtitle: string;
  caption: string;
  imageUrl: string;
  imageAlt: string;
  year: string;
  role: string;
  institution: string;
  summary: string;
  highlights: string[];
  tiltClass: string;
  tapeVariant: 'stripes' | 'plain';
}

export interface AchievementItem {
  id: string;
  title: string;
  category: 'STEM' | 'Oratory & Arts' | 'Tahfidz';
  description: string;
  badgeText: string;
  year: string;
  iconType: 'book' | 'medal-silver' | 'medal-bronze' | 'mic' | 'pen';
  tiltClass: string;
  tapeVariant: 'stripes' | 'plain' | 'polka';
  tapeSide: 'left' | 'right';
}

export interface ServicePackage {
  id: string;
  code: string;
  title: string;
  description: string;
  engagementType: string;
  badgeColorClass: string;
  deliverables: string[];
}

export interface StrengthPillar {
  id: string;
  title: string;
  description: string;
  leftMeta: string;
  rightMeta: string;
  tapeVariant: 'stripes' | 'plain';
  tapeSide: 'left' | 'right';
  tapeTilt: string;
}

export interface TocItem {
  number: string;
  label: string;
  href: string;
}

export interface ContactChannel {
  id: string;
  label: string;
  value: string;
  actionLabel: string;
  href?: string;
  copyable: boolean;
  bgClass: string;
}

export const HERO_POLAROID = {
  imageUrl:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBPR-9paf2NupVHwkgsx8fNwFpY8c-Ijmz22D2SaKkaPs6Q3v5YEmLd8Xc6klO8hYl2YvZ-OlTJ3Q6SN6YKcXEZi4u2_cRkU2eTKpziT1eYQDfp240LEOpTbULPLuJSpkmtbOyZ6Zlc_O8TWKGRIeTeBXE8Q9dVomIt03yQ_WNX1bNHrdFdf_r_bWdm8V76b-dwL3uj61SsGNJXQTolGOcrOV3x2FmBxD3oBgMi7qFoX_Ki_lKMy59f',
  alt: 'Portrait of Veiga Mumtaza El Rahma',
  caption: 'VEIGA · 2024',
  subtitle: 'Informatics & Public Speaking Showcase',
};

export const ABOUT_POLAROID = {
  imageUrl:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCvfkzi4u883KxgCG7ZO3WcMgVH65um3n7PBF8KnZEMhqeWELEBtWT49GkrVQVC4Dkxnj4j35wjgy2fflkYBVUeF-SqS8cy01RE-Dizthpppz0kdzsNiow4tvHim_RlnFva-gofNxUhjcDVMMAIlDa5EDiqTKRrs15rZ7LUpl4KzBM284kMmzQABFxzwoQ6jisCOV9XM3xTRVjuigt1TimD4KnFXPDk5rLWu83LDCo',
  alt: 'Veiga Mumtaza El Rahma holding flower bouquet',
  caption: 'Veiga M. El Rahma',
  subtitle: 'Bandung · Jakarta Barat',
};

export const CONTACT_POLAROID = {
  imageUrl:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCxCgEOPwcnf0FEaF8CtOfzDzMegxIvkruoGSRfVy4OjKsp0VOVSmhSJwtLYVOkBgkBgF26a8ORX6Gt_8iLrwZlR8WNPi-5Luq-KRAIbXSIzqTVOIaEGRrvNqQ15N5GJg37c6xvb5q40SoD1-ufOhfkeyK7Q27hXeQS6u2GI9RDoJ-FJVsKJ71Go-XJOVeb74M1LmMOR5V_rFx0j9RhknaUwouTjh4KSTGnnDVZ8BU',
  alt: 'Veiga Mumtaza El Rahma smiling',
  caption: 'Veiga Mumtaza',
  subtitle: 'ready for your next project',
};

export const TOC_LEFT: TocItem[] = [
  { number: '01', label: 'ABOUT ME & ORIGIN', href: '#about' },
  { number: '02', label: 'WHAT I CREATE', href: '#expertise' },
  { number: '03', label: 'COLLABORATION & SERVICES', href: '#collaboration' },
];

export const TOC_RIGHT: TocItem[] = [
  { number: '04', label: 'SELECTED WORKS & RESEARCH', href: '#works' },
  { number: '05', label: 'WHAT I BRING · STRENGTHS', href: '#strengths' },
  { number: '06', label: 'HONORS & CONTACT', href: '#achievements' },
];

export const CORE_COMPETENCIES: string[] = [
  'Public Speaking & MC',
  'Event Coordination',
  'Secretariat & Docs',
  'Canva & MS Office',
  'Biantara Sundanese Speech',
  'Python & Web Basics',
];

export const STRENGTH_PILLARS: StrengthPillar[] = [
  {
    id: 'speaker',
    title: 'ARTICULATE PUBLIC SPEAKER',
    description:
      'Confidence on the microphone in formal Indonesian, Arabic, English, and Sundanese. Experienced Master of Ceremonies (MC) for graduation ceremonies, academic talkshows, and youth competitions with pristine pacing and crowd command.',
    leftMeta: 'Formal & Semi-Formal Events',
    rightMeta: 'Biantara Finalist',
    tapeVariant: 'stripes',
    tapeSide: 'left',
    tapeTilt: '-rotate-1',
  },
  {
    id: 'leader',
    title: 'STRUCTURED EVENT LEADER',
    description:
      'Proven track record in 12+ committee roles across pesantren and regional youth organizations. Proven expertise in rundown coordination, administrative correspondence, speaker liaisons, and crisis mitigation in real-time execution.',
    leftMeta: '12+ Major Events Managed',
    rightMeta: 'Secretariat & Logistics',
    tapeVariant: 'plain',
    tapeSide: 'right',
    tapeTilt: 'rotate-2',
  },
  {
    id: 'analytical',
    title: 'ANALYTICAL & TECH-DRIVEN',
    description:
      'Informatics Engineering foundation backed by 4x National Science Olympiad medals in Chemistry, Biology, and Mathematics. Combines logical problem solving, data structuring, and rapid technical adaptability for future digital systems.',
    leftMeta: '4x Science Olympiad Medals',
    rightMeta: 'Algorithmic Thinking',
    tapeVariant: 'plain',
    tapeSide: 'left',
    tapeTilt: 'rotate-1',
  },
  {
    id: 'diligent',
    title: 'AUTHENTIC & DILIGENT',
    description:
      'Nurtured in Islamic boarding school disciplines (hafizhah 9 juz) with strong moral integrity, empathy, and collaborative spirit. Capable of bridging technical programmers, creative teams, and executive stakeholders effortlessly.',
    leftMeta: 'Cross-Functional Synergy',
    rightMeta: 'Growth Mindset',
    tapeVariant: 'stripes',
    tapeSide: 'right',
    tapeTilt: '-rotate-2',
  },
];

export const EXPERTISE_ROWS = [
  {
    id: 'stage-mc',
    label: 'STAGE & MC',
    description:
      'Hosting formal assemblies, graduation processions, national webinar series, and debate tournaments with articulate bilingual cue sheets and stage composure.',
  },
  {
    id: 'event-ops',
    label: 'EVENT & OPS',
    description:
      'Comprehensive rundown scheduling, protocol flow mapping, guest coordination, and committee operational governance for institutional events.',
  },
  {
    id: 'research-docs',
    label: 'RESEARCH & DOCS',
    description:
      'Rigorous Hadith methodology research (Takhrij), academic writing, and publication-ready slide decks designed in Canva and structured in MS Word.',
  },
];

export const SELECTED_WORKS_ITEMS: ShowcaseWorkItem[] = [
  {
    id: 'takhrij-research',
    block: 'academic',
    title: "Takhrij Hadits Research: Konsep 'Yusr' (Kemudahan) dalam Syariat",
    subtitle: 'Takhrij Paper Documentation',
    caption: 'RESEARCH MANUSCRIPT',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDTZrg-CqWFqET1kx0DSKizL3rihbbvML-vHoPifkjEmkdGzc2HmiIUZzxtw0n012zrpE1LXrmCaMSaijdUvDd0gGFwDlxYGReOTvWqbGzq2g6YaCPiEeDyqHM8qAlD4TD50xygord65GpKMINjAFYegISdaQ2oJQRI7Fn7xvp5pV8ytmmydJMmwnkzCoGU3sb8duA6MAcuBWAoV47vSrfFcNdY07mpHAEgjB7svFA',
    imageAlt: 'Hadith research documents and methodology notebooks',
    year: '2024',
    role: 'Lead Researcher & Author',
    institution: 'PPI 67 Benda Tasikmalaya',
    summary:
      'An exhaustive academic paper examining the Sanad and Matan of the prophetic narration on facilitation in Islamic law. Conducted utilizing primary classical hadith encyclopedias, cross-referencing narrator credibility (Ilm al-Rijal), and thematic contemporary applications.',
    highlights: [
      'Methodology: Takhrij al-Hadith bi al-Lafz',
      'Defense Result: Munaqasyah A (Distinction)',
      'Cross-referenced classical Ilm al-Rijal compilations',
    ],
    tiltClass: '-rotate-1',
    tapeVariant: 'stripes',
  },
  {
    id: 'stage-oratory',
    block: 'academic',
    title: 'Stage Oratory & Biantara Sunda Mentorship',
    subtitle: 'Stage Oratory & Mentorship',
    caption: 'ORATORY REPERTOIRE',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBlyqqgCSy0b_dL6p8BlQKz6_NJulOg_6wYDI4dMe8gKqJSSfMBqWtBKby0h8YHTRnDZf81IbhB4-Vc9XyUYSDSqfcdQDbwtsgnJfAPM03Gp8WdkOM4ISb2tsdhcH1LhzOKaYUsC9KOdwSKNCbExYBdeOozzuHIwn5j7JlE0AsfcvJ9rnrEehnyhhccBMq6k-5FqKyxICHssU5EUiCWzaWxv8kd9JO0v4e8hiTLyJw',
    imageAlt: 'Public speaking and podium presentation',
    year: '2024',
    role: 'Master of Ceremonies & Oratory Finalist',
    institution: 'Regional Youth & Campus Forums',
    summary:
      'Curated repertoire of bilingual MC cue sheets, formal graduation protocol scripts, and Sundanese Biantara cultural speeches crafted with precise undak-usuk basa and vocal pacing.',
    highlights: [
      'Biantara Sunda Regional Finalist 2024',
      'Multilingual MC hosting (ID / EN / AR / SU)',
      'Peer coaching for student council public speakers',
    ],
    tiltClass: 'rotate-1',
    tapeVariant: 'plain',
  },
  {
    id: 'musybar-committee',
    block: 'events',
    title: 'Musybar & Candidate Assemblies',
    subtitle: 'Musybar & Candidate Assemblies',
    caption: 'PPI 67 BENDA COMMITTEES',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDvTDZbGyS0wlzEQiLF8lCmmqcJgUt7wJRCEGqlq5bA4cVz3Fc-Fy-WVya17q_yrw7VTeaj2yUBkMuz12ERlXTUZBEnJz_uW4GgkGYzvqGcLOHRtAFFNwRXgbWOJ8ikjqUj2r6-z8toR_mQBoyZaZj1hxkjqPQ65i_fNsX7UYRvTA-YSDN-7R7Dg3FEm1A5Nab6XSiIAPDXtTOFqu_HsJiM_SVIKWCEAsKDSEy6q9o',
    imageAlt: 'Student council candidate assembly and election',
    year: '2023 – 2024',
    role: 'Sekretaris Acara & Koor. Keamanan',
    institution: 'Ummahatul Ghad · PPI 67 Benda',
    summary:
      'Directed secretarial decrees, ballot verification workflows, and live vote recaps for Kandidatan PPI 67 Benda, followed by crowd protocol governance for 500+ attendees during Musyawarah Besar 2024.',
    highlights: [
      'Sekretaris Acara — Kandidatan PPI 67 Benda (2023)',
      'Koor. Keamanan — Musyawarah Besar (500+ attendees, 2024)',
      'Sie. Pendidikan — Khidmat Jam’iyyah curriculum design (2024)',
    ],
    tiltClass: 'rotate-1',
    tapeVariant: 'stripes',
  },
  {
    id: 'musyda-ippi',
    block: 'events',
    title: 'Musyda IPPI & Regional Conferences',
    subtitle: 'Musyda IPPI & Regional Conferences',
    caption: 'IPPI PERSIS SQUAD',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCLa6KXFg5d9-dg3tngND-280ZJSwxKzZGnHQZp3w7O0GIxAcmEb393a3BENCKXoilJC_Ud8DHRlvbzMmpMpfwTNV_eX0RFf6IPaKfcRjxlmJU5ZQ2JwJoUvDic4urIFNukui7pGdQCxuTZ1h7NbhCI1bA9EoWVqYwTPve31fsScJZYtGarDI1WOzZDzWBlrHv4xkPxXMwuIoEyA3S3hBNXCNDTU9K0HdDQuL-6ZeE',
    imageAlt: 'Youth delegation conference and coordination meeting',
    year: '2024',
    role: 'Sie. Dekorasi, Logistik & Koordinator Bidang',
    institution: 'IPPI PERSIS Kota Tasikmalaya',
    summary:
      'Managed spatial visual setup, stage aesthetics, and cross-chapter delegation logistics for Musyawarah Daerah IPPI Kota Tasikmalaya while serving as Coordinator of Education & Cadre Development.',
    highlights: [
      'Sie. Dekorasi & Logistik — Musyda IPPI Kota Tasikmalaya (2024)',
      'Koordinator Bidang Pendidikan & Kaderisasi',
      'Cross-chapter conference liaison & rundown supervision',
    ],
    tiltClass: '-rotate-1',
    tapeVariant: 'plain',
  },
];

export const COMMITTEE_ROLES = [
  {
    role: 'Sekretaris Acara',
    detail:
      'Kandidatan PPI 67 Benda (2023) — Responsible for general secretarial decree, voting ballots, and live count recaps.',
  },
  {
    role: 'Koor. Keamanan',
    detail:
      'Musyawarah Besar PPI 67 Benda (2024) — Coordinated crowd control and protocol compliance for 500+ attendees.',
  },
  {
    role: 'Sie. Pendidikan',
    detail:
      "Khidmat Jam'iyyah PPI 67 Benda (2024) — Designed community education curriculum and field teaching modules.",
  },
  {
    role: 'Sie. Dekorasi & Logistik',
    detail:
      'Musyawarah Daerah IPPI Kota Tasikmalaya (2024) — Managed visual spatial setup and stage aesthetics.',
  },
];

export const SERVICE_PACKAGES: ServicePackage[] = [
  {
    id: 'mc-moderation',
    code: 'PACKAGE 01',
    title: 'Master of Ceremony & Moderation',
    description:
      'Leading formal ceremonies, academic symposiums, guest speaker talk shows, and youth festivals with custom cue card scripting and punctuality.',
    engagementType: 'Event-Based',
    badgeColorClass: 'bg-card-pink border-pink-200',
    deliverables: [
      'Custom bilingual cue cards & transition scripts',
      'Pre-event speaker briefing & soundcheck rehearsal',
      'Live timekeeping & Q&A audience moderation',
    ],
  },
  {
    id: 'event-advisory',
    code: 'PACKAGE 02',
    title: 'Event Advisory & Operations',
    description:
      'Rundown formulation, stage protocol consulting, secretariat workflow design, and operational briefing for student union committees.',
    engagementType: 'Project-Based',
    badgeColorClass: 'bg-card-blue border-blue-200',
    deliverables: [
      'Minute-by-minute master rundown & contingency plan',
      'Secretariat correspondence & invitation templates',
      'Committee alignment & stage protocol checklist',
    ],
  },
  {
    id: 'decks-reports',
    code: 'PACKAGE 03',
    title: 'Decks, Reports & Copywriting',
    description:
      'Professional Canva presentation design, institutional accountability reports (LPJ), academic summaries, and Sundanese/Indonesian speech drafting.',
    engagementType: 'Custom Scope',
    badgeColorClass: 'bg-stone-200 border-stone-300',
    deliverables: [
      'Editorial Canva slide decks & event visual kits',
      'Structured MS Word LPJ & meeting minutes',
      'Tailored Sundanese / Indonesian ceremonial speeches',
    ],
  },
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: 'tasmi-9-juz',
    title: "Tasmi' Al-Qur'an 9 Juz",
    category: 'Tahfidz',
    description:
      "Successfully completed public continuous recitation (Tasmi' Bil Ghaib) 9 Juz Al-Qur'an with exemplary tajweed and mutqin memory at PPI 67 Benda.",
    badgeText: 'TAHFIDZ MILESTONE · 2024',
    year: '2024',
    iconType: 'book',
    tiltClass: '-rotate-1',
    tapeVariant: 'stripes',
    tapeSide: 'left',
  },
  {
    id: 'osn-kimia',
    title: 'Perak — OSN Bidang Kimia',
    category: 'STEM',
    description:
      'Juara 2 Tingkat Nasional dalam ajang Olimpiade Sains Nasional (OSN) bidang Kimia. Demonstrating rigorous analytical chemistry aptitude.',
    badgeText: 'NATIONAL LEVEL · 2024',
    year: '2024',
    iconType: 'medal-silver',
    tiltClass: 'rotate-1',
    tapeVariant: 'plain',
    tapeSide: 'right',
  },
  {
    id: 'fsn-biologi',
    title: 'Perak — FSN Bidang Biologi',
    category: 'STEM',
    description:
      'Juara 2 Tingkat Nasional Festival Sains Nasional (FSN) bidang Biologi jenjang SMA/MA sederajat.',
    badgeText: 'NATIONAL LEVEL · 2024',
    year: '2024',
    iconType: 'medal-silver',
    tiltClass: '-rotate-1',
    tapeVariant: 'polka',
    tapeSide: 'left',
  },
  {
    id: 'fsbn-matematika',
    title: 'Perunggu — FSBN Matematika',
    category: 'STEM',
    description:
      'Juara 3 Festival Sains & Budaya Nasional bidang Matematika tingkat SMA/MA.',
    badgeText: 'NATIONAL LEVEL · 2024',
    year: '2024',
    iconType: 'medal-bronze',
    tiltClass: 'rotate-1',
    tapeVariant: 'plain',
    tapeSide: 'right',
  },
  {
    id: 'biantara-sunda',
    title: 'Finalis Biantara B. Sunda',
    category: 'Oratory & Arts',
    description:
      'Finalist in Sundanese Oratory (Biantara) Competition at the regional level, mastering articulation, undak-usuk basa, and vocal inflection.',
    badgeText: 'REGIONAL LEVEL · 2024',
    year: '2024',
    iconType: 'mic',
    tiltClass: '-rotate-1',
    tapeVariant: 'stripes',
    tapeSide: 'left',
  },
  {
    id: 'kaligrafi-lcc',
    title: 'Juara 1 Kaligrafi & LCC',
    category: 'Oratory & Arts',
    description:
      "Juara 1 Lomba Kaligrafi Al-Qur'an & Juara 1 Lomba Cerdas Cermat (LCC) PAI tingkat santri se-Pesantren Persis Benda.",
    badgeText: 'INSTITUTIONAL · 2019-2023',
    year: '2019–2023',
    iconType: 'pen',
    tiltClass: 'rotate-1',
    tapeVariant: 'plain',
    tapeSide: 'right',
  },
];

export const CONTACT_CHANNELS: ContactChannel[] = [
  {
    id: 'whatsapp',
    label: 'WHATSAPP',
    value: '0851-6363-2715',
    actionLabel: 'Chat',
    href: 'https://wa.me/6285163632715',
    copyable: true,
    bgClass: 'bg-fabric-blue/30',
  },
  {
    id: 'instagram',
    label: 'INSTAGRAM',
    value: '@_veiirrl',
    actionLabel: 'Follow',
    href: 'https://instagram.com/_veiirrl',
    copyable: true,
    bgClass: 'bg-fabric-pink/40',
  },
  {
    id: 'email',
    label: 'EMAIL',
    value: 'mumtazaveiga@gmail.com',
    actionLabel: 'Send',
    href: 'mailto:mumtazaveiga@gmail.com',
    copyable: true,
    bgClass: 'bg-fabric-blue/30',
  },
  {
    id: 'campus',
    label: 'CAMPUS',
    value: 'Institut Teknologi PLN · Jakarta Barat',
    actionLabel: "Informatics '25",
    copyable: false,
    bgClass: 'bg-fabric-pink/40',
  },
];
