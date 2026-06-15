/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type PageTab =
  | 'home'
  | 'lore'
  | 'kingdoms'
  | 'characters'
  | 'creatures'
  | 'organizations'
  | 'history'
  | 'artifacts'
  | 'gallery'
  | 'downloads'
  | 'shop';

export interface Kingdom {
  id: string;
  name: string;
  artworkUrl: string;
  flagUrl?: string;
  description: string;
  rulers: string[];
  culture: string;
  military: string;
  importantCities?: string[];
  politicalStructure?: string;
  motto: string;
}

export interface Character {
  id: string;
  name: string;
  title: string;
  imageUrl: string;
  background: string;
  personality: string;
  abilities: string[];
  achievements: string[];
  videoUrl?: string;
  quote?: string;
}

export interface Creature {
  id: string;
  name: string;
  imageUrl: string;
  habitat: string;
  behavior: string;
  powers: string[];
  legends: string;
  weaknesses: string[];
}

export interface Organization {
  id: string;
  name: string;
  symbol: string; // Tailwind Lucide icon name or descriptive emoji/graphics
  purpose: string;
  history: string;
  leadership: string;
  goals: string[];
  influence: string;
}

export interface HistoryEra {
  id: string;
  era: string;
  title: string;
  artworkUrl?: string;
  description: string;
  events: string[];
  videoUrl?: string;
}

export interface Artifact {
  id: string;
  name: string;
  imageUrl?: string;
  origin: string;
  powers: string[];
  history: string;
  knownWielders: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  type: 'image' | 'video';
  url: string;
  thumbnailUrl: string;
  category: string;
}

export interface DownloadItem {
  id: string;
  title: string;
  coverImage: string;
  description: string;
  pcDownloadUrl: string;
  androidDownloadUrl: string;
  launcherUrl: string;
  manualUrl: string;
  patchNotes: string[];
}

export interface ShopItem {
  id: string;
  name: string;
  category: string;
  price: string;
  imageUrl?: string;
  description: string;
  available: boolean;
}
