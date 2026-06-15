/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Kingdom, Character, Creature, Organization, HistoryEra, Artifact, GalleryItem, DownloadItem, ShopItem } from './types';

// Let's use the local generated image URLs
export const KAVIRAH_WORLD_MAP = '/src/assets/images/kavirah_world_map_1781451550478.jpg';
export const MARCELLAN_EMPIRE_ART = '/src/assets/images/valtheris_kingdom_1781427281438.jpg';
export const DRAKMOR_EMPIRE_ART = '/src/assets/images/drakmor_empire_1781427298432.jpg';
export const AERION_STORMBORN_ART = '/src/assets/images/aerion_stormborn_1781427316611.jpg';
export const MOONFANG_DRAGON_ART = '/src/assets/images/moonfang_dragon_1781427332410.jpg';

export const WORLD_LORE = {
  title: 'Project Kavirah',
  tagline: 'An ancient world of pristine kingdoms and mysterious deep wildlands.',
  overview: 'Kavirah is a world of towering spires, dynamic wildlands, and deep oceanic mysteries. Its lands are ancient, having survived cosmic wars that shattered the outer realms. Magic is woven into the very dirt and atmosphere, flowing inside rivers of raw ley-energy that spark spectacular occurrences.',
  creationMyths: 'This section is open for future creation myths. Write how light, shadow, and elemental forces collaborated to shape the bedrock of Kavirah.',
  magicSystem: 'Register custom spellcasting theories, ley-matrix systems, or runic matrices in this placeholder area as Project Kavirah expands.',
  continents: [
    {
      name: 'Aethelgard (Eastern Hemisphere)',
      description: 'The vast eastern continent characterized by sprawling pine forests, massive mountain ranges, and fertile river basins. It houses the sovereign Marcellan Empire.',
    },
    {
      name: '[Uncharted Territory]',
      description: 'Placeholder continent. You can rename this landmass and detail its cities and native cultures in future draft updates.',
    },
  ],
  videoUrl: 'https://www.youtube.com/embed/4KYcwfS-TZc',
  videoTitle: 'Project Kavirah Overview Video',
};

export const KINGDOMS: Kingdom[] = [
  {
    id: 'valtheris',
    name: 'Marcellan Empire',
    artworkUrl: MARCELLAN_EMPIRE_ART,
    flagUrl: 'solar_sigil',
    motto: 'By Light and Chivalry, We Stand Sovereign',
    description: 'The Marcellan Empire is the glowing bastion of justice and honor in Aethelgard. Perched atop the Great White Cliffs, its marvelous silver roofs and golden banners can be seen from miles away. The empire is built on pristine rivers that supply boundless energy to its agricultural marvels.',
    rulers: ['High King Aerion Stormborn', 'Queen Regent Lyanna Stormborn'],
    culture: 'Marcellan society revolves around code-bound knighthood, solar worshipping, and high scholarship. Art, astronomy, and architectural geometry are highly regarded.',
    military: 'The Winged Vanguard: A legendary legion of Griffin Knights wielding solar-infused spears. Backed by the Templars of the Radiant Dawn, they protect the eastern borders.',
    importantCities: ['High-Citadel Orena', 'Silverport Bay', 'Luminis Scholaris'],
    politicalStructure: 'Feudal Monarchy with a Scribe Representative Council.',
  },
  {
    id: 'drakmor',
    name: '[Future Kingdom Placeholder]',
    artworkUrl: DRAKMOR_EMPIRE_ART,
    flagUrl: 'dragon_skull',
    motto: '[Enter Your Custom Motto Here]',
    description: 'This kingdom dossier is a placeholder for your future custom creations. Determine its natural visual theme, capital citadels, and internal politics inside the next update.',
    rulers: ['[Future Sovereign]'],
    culture: 'Define the societal morals, festive equinoxes, and craftsmanship values of this realm.',
    military: 'Prepare the defenses, elite guards, or siege layout for this future faction.',
    importantCities: ['[First Citadel]', '[Grand Harbor]'],
    politicalStructure: '[Sovereignty system to be declared]',
  },
];

export const CHARACTERS: Character[] = [
  {
    id: 'aerion',
    name: 'King Aerion Stormborn',
    title: 'First of His Name, Sovereign of the Tempest',
    imageUrl: AERION_STORMBORN_ART,
    quote: '"The tempest does not ask for permission to strike. Neither shall I when defending my folk."',
    background: 'King Aerion is the sovereign commander of the Marcellan Empire, steering the realm toward alliances and prosperity through shifting times.',
    personality: 'Stoic, analytical, and protective of his subjects.',
    abilities: [
      'Call of the Tempest: Able to channel clean radiant strikes.',
      'Sovereign Combat Tactics: Unmatched swordsmanship and tactical planning.',
    ],
    achievements: [
      'Successfully fortified and maintained the boundaries of High-Citadel Orena.',
    ],
    videoUrl: 'https://www.youtube.com/embed/4KYcwfS-TZc',
  },
  {
    id: 'vespera',
    name: '[Future Champion Placeholder]',
    title: '[Custom Character Title]',
    imageUrl: 'https://picsum.photos/seed/vespera/600/800',
    quote: '"The ledger lies open for new champions to claim their destiny."',
    background: 'An uncharted hero, mage, or companion of Kavirah waiting to be defined as the chronicles progress.',
    personality: 'Configure character alignment, secret motives, and high virtues.',
    abilities: [
      '[Unique Ability 1]',
      '[Unique Ability 2]',
    ],
    achievements: [
      '[First Major Victory / Historical Feat]',
    ],
    videoUrl: 'https://www.youtube.com/embed/4KYcwfS-TZc',
  },
];

export const CREATURES: Creature[] = [
  {
    id: 'moonfang_dragon',
    name: '[Future Bestiary Encounter]',
    imageUrl: MOONFANG_DRAGON_ART,
    habitat: '[Uncharted Wildlands]',
    behavior: 'Configure whether this creature is a nocturnal predator or a friendly domestic beast companion.',
    powers: [
      '[Arcane Attribute A]',
      '[Arcane Attribute B]',
    ],
    legends: 'Draft ancient folk songs, warning signs, and local encounters with this creature.',
    weaknesses: ['[Vulnerable element/item]'],
  },
  {
    id: 'forest_wyrm',
    name: '[Future Bestiary Encounter 2]',
    imageUrl: 'https://picsum.photos/seed/forestwyrm/800/600',
    habitat: '[Uncharted Forest]',
    behavior: 'Configure whether this creature is a nocturnal predator or a friendly domestic beast companion.',
    powers: [
      '[Arcane Attribute A]',
      '[Arcane Attribute B]',
    ],
    legends: 'Draft ancient folk songs, warning signs, and local encounters with this creature.',
    weaknesses: ['[Vulnerable element/item]'],
  },
];

export const ORGANIZATIONS: Organization[] = [
  {
    id: 'silver_flame',
    name: '[Future Guild or Covenant]',
    symbol: 'ShieldAlert',
    purpose: 'Draft specialized guild mandates, mercantile networks, or magical colleges here.',
    history: 'A clean placeholder history ledger. Detail how this faction came to prominence during key eras.',
    leadership: '[Council representatives / Head Elders]',
    goals: [
      'Define future organizational goals',
      'Train upcoming class recruits',
    ],
    influence: '[Global influence tier]',
  },
  {
    id: 'veiled_covenant',
    name: '[Future Secret Society]',
    symbol: 'EyeOff',
    purpose: 'Draft specialized guild mandates, mercantile networks, or magical colleges here.',
    history: 'A clean placeholder history ledger. Detail how this faction came to prominence during key eras.',
    leadership: '[Council representatives / Head Elders]',
    goals: [
      'Define future organizational goals',
      'Train upcoming class recruits',
    ],
    influence: '[Global influence tier]',
  },
];

export const HISTORY_TIMELINE: HistoryEra[] = [
  {
    id: 'creation',
    era: 'First Era',
    title: '[Ancient Prelude Chapter]',
    description: 'A clean placeholder area for the first historically recorded major timeline events of Kavirah.',
    events: [
      '[First Chronological Milestone]',
      '[Second Chronological Milestone]',
    ],
  },
  {
    id: 'kings',
    era: 'Second Era',
    title: '[Middle Age Growth Chapter]',
    description: 'A clean placeholder area for the first historically recorded major timeline events of Kavirah.',
    events: [
      '[First Chronological Milestone]',
      '[Second Chronological Milestone]',
    ],
  },
];

export const ARTIFACTS: Artifact[] = [
  {
    id: 'crown_of_dawn',
    name: '[Future Relic Placeholder]',
    origin: '[Relic Origin Place]',
    powers: [
      '[Special Passive Buff A]',
      '[Special Passive Buff B]',
    ],
    history: 'Describe when this legendary weapon, magical staff, or crown was created and who originally wore it.',
    knownWielders: ['[Monarch Wielder]'],
  },
  {
    id: 'blade_of_eternity',
    name: '[Future Armament Placeholder]',
    origin: '[Relic Origin Place]',
    powers: [
      '[Special Passive Buff A]',
      '[Special Passive Buff B]',
    ],
    history: 'Describe when this legendary weapon, magical staff, or crown was created and who originally wore it.',
    knownWielders: ['[Monarch Wielder]'],
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Project Kavirah Cartography Map',
    type: 'image',
    category: 'Concepts & Maps',
    url: KAVIRAH_WORLD_MAP,
    thumbnailUrl: KAVIRAH_WORLD_MAP,
  },
  {
    id: 'g2',
    title: 'Marcellan Empire Bastion',
    type: 'image',
    category: 'Kingdom Landscapes',
    url: MARCELLAN_EMPIRE_ART,
    thumbnailUrl: MARCELLAN_EMPIRE_ART,
  },
  {
    id: 'g3',
    title: '[Future Concept Image Slot]',
    type: 'image',
    category: 'Kingdom Landscapes',
    url: DRAKMOR_EMPIRE_ART,
    thumbnailUrl: DRAKMOR_EMPIRE_ART,
  },
];

export const DOWNLOAD_GAME: DownloadItem = {
  id: 'game_kavirah',
  title: 'Project Kavirah: Chronicles of the Tempest',
  coverImage: KAVIRAH_WORLD_MAP,
  description: 'Download the official roleplaying client configured for Project Kavirah. Build legendary outposts, lead the Marcellan Empire to glory, and forge your custom path.',
  pcDownloadUrl: '#',
  androidDownloadUrl: '#',
  launcherUrl: '#',
  manualUrl: '#',
  patchNotes: [
    'v1.0.0: Solitary Marcellan Empire campaign unlocked.',
    'v0.9.0: Master atlas loaded with Kavirah landscape details.',
  ],
};

export const SHOP_ITEMS: ShopItem[] = [
  {
    id: 's1',
    name: '[Future Collector Art Book]',
    category: 'Art Books',
    price: '$--.--',
    description: 'Upcoming project layout merchandise details will populate this slot in future releases.',
    available: false,
  },
  {
    id: 's2',
    name: '[Future Sovereign Apparel]',
    category: 'Apparel',
    price: '$--.--',
    description: 'Upcoming project layout merchandise details will populate this slot in future releases.',
    available: false,
  },
];
