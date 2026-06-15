/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageTab } from './types';
import { KAVIRAH_WORLD_MAP } from './data';

// Component imports
import LoreView from './components/LoreView';
import KingdomsView from './components/KingdomsView';
import CharactersView from './components/CharactersView';
import CreaturesView from './components/CreaturesView';
import OrganizationsView from './components/OrganizationsView';
import HistoryView from './components/HistoryView';
import ArtifactsView from './components/ArtifactsView';
import GalleryView from './components/GalleryView';
import DownloadsView from './components/DownloadsView';
import ShopView from './components/ShopView';

// Icon imports
import {
  Compass,
  BookOpen,
  Shield,
  Users,
  Flame,
  Calendar,
  Crown,
  Image as ImageIcon,
  Download,
  ShoppingBag,
  Clock,
  Sparkles,
  Volume2,
  VolumeX,
  Menu,
  X,
  Play,
  ArrowRight,
  BookMarked,
  Youtube,
  MessageSquare
} from 'lucide-react';

interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: 'Kingdoms' | 'Magic Flow' | 'Bestiary' | 'Gathering';
  snippet: string;
}

const NEWS_ROLL: NewsItem[] = [
  {
    id: 'n1',
    title: 'Chronicles Setup Complete',
    date: 'June 2026',
    category: 'Gathering',
    snippet: 'The high archives of Project Kavirah have been successfully bootstrapped. The layout handles responsive views and custom tabs.',
  },
  {
    id: 'n2',
    title: 'Marcellan Empire Ledger Formatted',
    date: 'June 2026',
    category: 'Kingdoms',
    snippet: 'The silver spires and high court details of the Marcellan Empire have been registered inside the kingdoms index.',
  },
  {
    id: 'n3',
    title: 'Minecraft Mod Download Portal Loaded',
    date: 'June 2026',
    category: 'Magic Flow',
    snippet: 'The Damned Legions Bedrock addon CurseForge portal has been attached to the downloads registry for easy installation.',
  },
];

export default function App() {
  const [activeTab, setActiveTab] = useState<PageTab>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [ambientSound, setAmbientSound] = useState<boolean>(false);
  const [moonPhase, setMoonPhase] = useState<string>('Waxing Gibbous');
  const [celestialTime, setCelestialTime] = useState<string>('High Twilight');
  
  // Simulated sound oscillator to generate immersive medieval low background tones when activated
  let audioContext: AudioContext | null = null;
  let oscillator: OscillatorNode | null = null;
  let gainNode: GainNode | null = null;

  const toggleAtmosphere = () => {
    if (!ambientSound) {
      // Lazy startup of Synth Node for safe, compliant, non-crashing background hums
      try {
        const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
        audioContext = new AudioContextClass();
        oscillator = audioContext.createOscillator();
        gainNode = audioContext.createGain();

        oscillator.type = 'sine';
        // A low pleasant ambient earth drone
        oscillator.frequency.value = 110; 
        gainNode.gain.setValueAtTime(0.02, audioContext.currentTime);

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        oscillator.start();
        setAmbientSound(true);

        // Store reference on window to clean up or toggle
        (window as any)._ambientOscillator = oscillator;
        (window as any)._ambientGain = gainNode;
        (window as any)._audioContext = audioContext;
      } catch (e) {
        console.warn('Atmospheric audio synth failed to launch', e);
      }
    } else {
      try {
        const osc = (window as any)._ambientOscillator;
        if (osc) {
          osc.stop();
        }
        setAmbientSound(false);
      } catch (e) {
        setAmbientSound(false);
      }
    }
  };

  useEffect(() => {
    // Dynamic elven state cycles
    const timers = [
      setTimeout(() => setCelestialTime('Mid Twilight'), 8000),
      setTimeout(() => setMoonPhase('Selene Rising'), 15000)
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  const handleTabChange = (tab: PageTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    // Smooth scroll inside the parchment
    const el = document.getElementById('parchment-scroll-target');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'home', label: 'Scroll Center', icon: BookMarked },
    { id: 'lore', label: 'World Lore', icon: Compass },
    { id: 'kingdoms', label: 'Kingdoms', icon: Shield },
    { id: 'characters', label: 'Characters', icon: Users },
    { id: 'creatures', label: 'Creatures', icon: Flame },
    { id: 'organizations', label: 'Organizations', icon: Crown },
    { id: 'history', label: 'History', icon: Calendar },
    { id: 'artifacts', label: 'Artifacts', icon: Sparkles },
    { id: 'gallery', label: 'Gallery', icon: ImageIcon },
    { id: 'downloads', label: 'Downloads', icon: Download },
    { id: 'shop', label: 'Sovereign Shop', icon: ShoppingBag },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-start items-center p-3 sm:p-6 overflow-y-auto selection:bg-stone-800 selection:text-white">
      
      {/* Absolute Header Ribbon: World state */}
      <header className="w-full max-w-6xl flex justify-between items-center px-4 py-2.5 bg-black border border-stone-900 rounded-t-lg text-stone-400 text-[10px] md:text-xs font-mono tracking-wider z-10">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-stone-450 animate-pulse" />
          <span>CYCLES: <span className="text-white font-medium">{celestialTime}</span></span>
          <span className="text-stone-800">|</span>
          <span>MOON: <span className="text-white font-medium">{moonPhase}</span></span>
        </div>
        
        <div className="flex items-center gap-4">
          {/* Authentic ambient audio control */}
          <button 
            onClick={toggleAtmosphere}
            className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer group"
            title="Toggle Ambient Audio"
          >
            {ambientSound ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-stone-300" />
                <span className="hidden sm:inline">Mute Audio</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-stone-600 group-hover:text-stone-300" />
                <span className="hidden sm:inline">Play Ambient</span>
              </>
            )}
          </button>
          
          <span className="text-stone-600 hidden md:inline font-sans">Scribe Ledger ID: v1.4.2</span>
        </div>
      </header>

      {/* Main Container */}
      <main className="w-full max-w-6xl text-stone-100 bg-black border-x border-b border-stone-900 rounded-b-lg relative flex flex-col justify-start items-stretch min-h-[85vh] shadow-[0_22px_60px_rgba(0,0,0,0.95)]">
        
        {/* Top Floating Logo & Brand header block */}
        <section className="p-6 pb-4 md:p-10 md:pb-6 border-b border-stone-900 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10 bg-black">
          <div className="text-center md:text-left space-y-1.5 animate-fade-in">
            <h1 className="font-display text-3xl md:text-5xl font-black text-white tracking-wide uppercase">
              PROJECT KAVIRAH
            </h1>
            <p className="font-sans text-xs italic text-stone-400 max-w-lg">
              by grimfox
            </p>
          </div>

          {/* Simple Clean Logo */}
          <div className="flex flex-col items-center justify-center select-none shrink-0 z-10 text-stone-400 hover:text-white transition-colors">
            <Compass className="w-12 h-12 stroke-[1.25] text-white animate-spin-slow" />
            <span className="font-display text-[9px] text-stone-400 tracking-[0.25em] uppercase font-bold mt-2">KAVIRAH</span>
          </div>
        </section>

        {/* Global Navigation - Desktop Tabs */}
        <nav className="hidden lg:block bg-black border-b border-stone-900 p-2 relative z-10">
          <div className="flex flex-wrap justify-center gap-1.5">
            {navItems.map((item) => {
              const TabIcon = item.icon;
              const isSelected = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleTabChange(item.id as PageTab)}
                  className={`px-3 py-2 rounded-xs text-[11px] tracking-widest uppercase flex items-center gap-1.5 transition-all cursor-pointer nav-tab ${
                    isSelected
                      ? 'nav-tab-active shadow-md'
                      : 'text-stone-400 hover:text-white'
                  }`}
                >
                  <TabIcon className="w-3.5 h-3.5 opacity-90" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </nav>

        {/* Mobile Navigation Header */}
        <div className="lg:hidden bg-black border-b border-stone-900 px-4 py-2.5 flex justify-between items-center">
          <span className="font-display text-xs tracking-wider text-stone-300 font-semibold uppercase">
            Menu Navigation
          </span>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-md bg-stone-900 hover:bg-stone-800 text-white cursor-pointer"
            aria-label="Toggle Navigation Options"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu expanded overlay */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-black border-b border-stone-900 p-4 space-y-1.5 z-40 select-none">
            {navItems.map((item) => {
              const TabIcon = item.icon;
              const isSelected = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleTabChange(item.id as PageTab)}
                  className={`w-full px-4 py-2.5 rounded-sm font-display text-xs tracking-widest uppercase flex items-center gap-3 text-left transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-stone-900 text-white font-bold border border-stone-800'
                      : 'text-stone-300 hover:bg-stone-950 hover:text-white'
                  }`}
                >
                  <TabIcon className="w-4 h-4 text-stone-400" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        )}

        {/* Anchor point for scrolling back to view top */}
        <div id="parchment-scroll-target" className="h-1 scroll-mt-2 pointer-events-none" />

        {/* Primary Screen Area inside */}
        <div className="p-4 sm:p-8 grow relative z-10">
          {activeTab === 'home' && (
            <div className="space-y-8 animate-fade-in font-sans">
              
              {/* Giant Ancient Map Showcase */}
              <div className="relative rounded-sm overflow-hidden border border-stone-800 shadow-md group">
                <img
                  src={KAVIRAH_WORLD_MAP}
                  alt="Legendary Kavirah Map Detail"
                  className="w-full h-72 md:h-96 object-cover filter brightness-[75%] saturation-[85%] group-hover:scale-101 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                
                {/* Modern subtle overlay vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent flex flex-col justify-end p-6 md:p-8">
                  <span className="font-display text-[10px] md:text-xs tracking-widest text-slate-300 font-bold uppercase">
                    Fifth Era &bull; Atlas Cartography
                  </span>
                  <h2 className="font-display text-2xl md:text-4xl text-white font-bold drop-shadow-md tracking-wider mt-1">
                    The Wilderness of Aethelgard & Zul-Bahar
                  </h2>
                  <p className="text-stone-300 text-xs md:text-sm mt-1 max-w-xl hidden sm:block">
                    A world forged in celestial solar flares and whispers of the absolute void. Kingdoms rise upon ancient monolithic ruins as the storms grow warm.
                  </p>
                  
                  {/* Jump-to-map action */}
                  <button 
                    onClick={() => handleTabChange('lore')}
                    className="mt-4 px-4 py-2 bg-stone-800 hover:bg-stone-700 text-white border border-stone-700 rounded-sm font-display text-xs uppercase tracking-widest font-bold cursor-pointer w-fit transition-all flex items-center gap-2 shadow"
                  >
                    <Compass className="w-4 h-4 text-white" />
                    <span>Unfold Map Records</span>
                  </button>
                </div>
              </div>

              {/* Large Homepage Navigation Grid */}
              <div className="space-y-4">
                <h3 className="font-display text-base text-white border-b border-stone-900 pb-1.5 uppercase font-bold tracking-wide">
                  Explore High Records & Portals
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {navItems.filter((i) => i.id !== 'home').map((item) => {
                    const TabIcon = item.icon;
                    return (
                      <button
                        key={item.id}
                        onClick={() => handleTabChange(item.id as PageTab)}
                        className="p-5 rounded-xs bg-zinc-950 border border-stone-900 hover:border-stone-800 hover:bg-neutral-900/30 text-left cursor-pointer group transition-all duration-300 flex justify-between items-center shadow-xs"
                      >
                        <div className="space-y-1">
                          <span className="text-[10px] uppercase font-mono tracking-widest text-stone-500">
                            Explore
                          </span>
                          <h4 className="font-display text-base font-bold text-white group-hover:text-stone-200 transition-colors tracking-wide">
                            {item.label}
                          </h4>
                        </div>
                        <div className="p-2.5 rounded-full bg-stone-950 group-hover:bg-stone-900 group-hover:text-white transition-all duration-300">
                          <TabIcon className="w-5 h-5 text-stone-500 group-hover:text-white" />
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Latest News & Updates */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4">
                
                {/* News Scrolls */}
                <div className="lg:col-span-8 space-y-4">
                  <h3 className="font-display text-base text-white border-b border-stone-900 pb-1.5 uppercase font-bold tracking-wide flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-stone-400" />
                    Latest Sovereign Bulletins
                  </h3>

                  <div className="space-y-4">
                    {NEWS_ROLL.map((news) => (
                      <div
                        key={news.id}
                        className="p-5 bg-zinc-950 rounded-sm border border-stone-900 shadow-xs hover:border-stone-850 hover:bg-neutral-900/10 transition-colors relative overflow-hidden group"
                      >
                        {/* Little silver side marker */}
                        <div className="absolute left-0 inset-y-0 w-1 bg-stone-800" />

                        <div className="flex justify-between items-start gap-4">
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="px-2 py-0.5 bg-black border border-stone-900 text-[9px] uppercase tracking-wider font-mono text-stone-500 font-semibold rounded-xs">
                                {news.category}
                              </span>
                              <span className="text-[10px] text-stone-500 font-mono italic">
                                {news.date}
                              </span>
                            </div>
                            <h4 className="font-display text-base font-bold text-white mt-2 group-hover:text-stone-200 transition-colors leading-tight">
                              {news.title}
                            </h4>
                            <p className="text-stone-400 text-xs mt-1.5 leading-relaxed">
                              {news.snippet}
                            </p>
                          </div>
                          
                          {/* Chevron trigger jump to corresponding pages */}
                          <button
                            onClick={() => {
                              if (news.category === 'Kingdoms') handleTabChange('kingdoms');
                              else if (news.category === 'Magic Flow') handleTabChange('lore');
                              else handleTabChange('lore');
                            }}
                            className="p-1.5 rounded-full bg-black hover:bg-stone-950 text-stone-500 hover:text-white border border-stone-900 transition-colors mt-1 cursor-pointer shrink-0"
                            title="Inspect category dossier"
                          >
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Scriptorium Quick Lore Tip */}
                <div className="lg:col-span-4 bg-zinc-950 border border-stone-900 p-5 rounded-sm text-stone-300 shadow-md h-fit block">
                  <h4 className="font-display text-white text-sm font-bold border-b border-stone-900 pb-2 mb-3.5 uppercase tracking-wider">
                    Scribe Ledger Tip
                  </h4>
                  <p className="text-xs text-stone-400 leading-relaxed italic">
                    "Vessel-Flow is deeply tied to the celestial dance of Selene and Mor’gath. Ensure you register your griffin mount with the Winged Vanguard before attempting flight coordinates above the White Cliffs of the Marcellan Empire!"
                  </p>
                  <div className="h-px bg-stone-900 my-3.5" />
                  <span className="font-mono text-[9px] uppercase text-stone-600 block font-semibold">
                    Authorized: High Scholar Vance
                  </span>
                </div>
              </div>

            </div>
          )}

          {activeTab === 'lore' && <LoreView />}
          {activeTab === 'kingdoms' && <KingdomsView />}
          {activeTab === 'characters' && <CharactersView />}
          {activeTab === 'creatures' && <CreaturesView />}
          {activeTab === 'organizations' && <OrganizationsView />}
          {activeTab === 'history' && <HistoryView />}
          {activeTab === 'artifacts' && <ArtifactsView />}
          {activeTab === 'gallery' && <GalleryView />}
          {activeTab === 'downloads' && <DownloadsView />}
          {activeTab === 'shop' && <ShopView />}
        </div>

        {/* Lower decoration bar */}
        <div className="p-5 border-t border-stone-900 flex flex-col md:flex-row justify-between items-center text-center gap-4 text-stone-500 text-[10px] font-display tracking-[0.2em] uppercase mt-auto bg-black">
          <span>PROJECT KAVIRAH</span>
          <div className="flex gap-6 text-stone-500 font-bold italic normal-case text-xs">
            <span>Ancient Chronicles</span>
            <span>Celestial Fire</span>
            <span>Empire Rising</span>
          </div>
        </div>
      </main>

      {/* Decorative Desk Accessories with Socials */}
      <footer className="w-full max-w-6xl mt-6 flex flex-col gap-4 justify-center items-center px-4 py-2 text-stone-600 text-[10px] font-mono tracking-wider text-center">
        {/* Social Links Block */}
        <div className="flex flex-wrap justify-center items-center gap-4 text-xs font-display tracking-widest uppercase">
          <a
            href="https://youtube.com/@grimfoxofficial?si=r4dT5oopK8OQuyUe"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-stone-400 hover:text-white transition-all py-1.5 px-4 bg-black border border-stone-900 rounded-md hover:border-stone-850 shadow-md transform hover:-translate-y-0.5"
            id="social-youtube"
          >
            <Youtube className="w-4 h-4 text-white" />
            <span className="font-semibold text-stone-300 hover:text-white">YouTube</span>
          </a>
          <a
            href="https://discord.gg/AeyFCaS77"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-stone-400 hover:text-white transition-all py-1.5 px-4 bg-black border border-stone-900 rounded-md hover:border-stone-850 shadow-md transform hover:-translate-y-0.5"
            id="social-discord"
          >
            <MessageSquare className="w-4 h-4 text-white" />
            <span className="font-semibold text-stone-300 hover:text-white">Discord</span>
          </a>
        </div>
        
        <div className="w-24 h-[1px] bg-stone-900" />

        <div className="flex flex-col sm:flex-row justify-between w-full items-center text-stone-650 text-[10px] tracking-wider gap-2">
          <span>PROJECT KAVIRAH WORKSPACE &bull; CLOUD RUN INGRESS</span>
          <span>SLEEK DARK INTERFACE &bull; REALIZED WITH REACT & TAILWIND</span>
        </div>
      </footer>
    </div>
  );
}
