/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { WORLD_LORE, KAVIRAH_WORLD_MAP } from '../data';
import { Sparkles, Map, BookOpen, Flame, Compass, Play, Film, X } from 'lucide-react';

export default function LoreView() {
  const [activeMedia, setActiveMedia] = useState<boolean>(false);

  return (
    <div className="space-y-8 font-sans">
      {/* Immersive Header Banner */}
      <div className="relative rounded-lg overflow-hidden border border-stone-900 shadow-lg group">
        <img
          src={KAVIRAH_WORLD_MAP}
          alt="Kavirah World Map"
          className="w-full h-80 object-cover object-center group-hover:scale-102 transition-transform duration-700 ease-out"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-6 md:p-8">
          <div className="inline-flex items-center gap-2 bg-black/80 border border-stone-800 backdrop-blur-xs px-3 py-1 rounded-sm text-white w-fit mb-2">
            <Compass className="w-4 h-4 text-white animate-spin-slow" />
            <span className="font-display text-xs tracking-widest uppercase">Cartographer's Ledger</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-white tracking-wide drop-shadow-md">
            {WORLD_LORE.title}
          </h2>
          <p className="text-stone-300 italic text-base md:text-lg max-w-2xl mt-1">
            " {WORLD_LORE.tagline} "
          </p>
        </div>
      </div>

      {/* Two Column Layout: Main Lore vs Continents */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Chronology & Text */}
        <div className="lg:col-span-7 space-y-6">
          <section className="bg-zinc-950/40 border border-stone-900 rounded-md p-6 relative overflow-hidden">
            <div className="absolute -right-8 -bottom-8 text-stone-900/10 pointer-events-none">
              <BookOpen className="w-40 h-40" />
            </div>
            
            <h3 className="font-display text-xl text-white border-b border-stone-900 pb-2 mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-stone-400" />
              Overview of Kavirah
            </h3>
            <p className="text-stone-300 text-[16px] leading-relaxed first-letter:text-5xl first-letter:font-display first-letter:float-left first-letter:mr-3 first-letter:text-white first-letter:font-bold">
              {WORLD_LORE.overview}
            </p>
          </section>

          <section className="bg-zinc-950/40 border border-stone-900 rounded-md p-6">
            <h3 className="font-display text-xl text-white border-b border-stone-900 pb-2 mb-4 flex items-center gap-2">
              <BookOpen className="w-4.5 h-4.5 text-stone-400" />
              The Creation Myth
            </h3>
            <p className="text-stone-300 text-[16px] leading-relaxed italic">
              {WORLD_LORE.creationMyths}
            </p>
          </section>

          <section className="bg-zinc-950/40 border border-stone-900 rounded-md p-6 relative overflow-hidden">
            <div className="absolute -right-8 -bottom-8 text-stone-900/10 pointer-events-none">
              <Flame className="w-40 h-40" />
            </div>
            <h3 className="font-display text-xl text-white border-b border-stone-900 pb-2 mb-4 flex items-center gap-2">
              <Flame className="w-4.5 h-4.5 text-stone-400" />
              The Vessel-Flow Magic System
            </h3>
            <p className="text-stone-300 text-[16px] leading-relaxed">
              {WORLD_LORE.magicSystem}
            </p>
          </section>
        </div>

        {/* Right Column: Major Continents & Media preview */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-zinc-950/80 border border-stone-900 rounded-sm p-6 shadow-md text-stone-100">
            <h3 className="font-display text-lg text-white border-b border-stone-800 pb-2 mb-4 flex items-center gap-2 uppercase tracking-wider">
              <Map className="w-4 h-4 text-white" />
              Major Continents & Lands
            </h3>

            <div className="space-y-5">
              {WORLD_LORE.continents.map((continent) => (
                <div key={continent.name} className="group border-l-2 border-stone-800 pl-4 py-1 hover:border-white transition-colors">
                  <h4 className="font-display text-base text-white font-bold group-hover:text-stone-200 transition-colors">
                    {continent.name}
                  </h4>
                  <p className="text-stone-400 text-sm mt-1 leading-relaxed">
                    {continent.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Media Interactive Section */}
          <div className="border border-stone-900 rounded-md overflow-hidden bg-zinc-950/30 p-4 space-y-4">
            <h3 className="font-display text-lg text-white flex items-center gap-2">
              <Film className="w-4.5 h-4.5 text-stone-400" />
              Scribe Audio-Visual Records
            </h3>
            <div className="relative rounded-md overflow-hidden cursor-pointer shadow-md group" onClick={() => setActiveMedia(true)}>
              <img
                src={KAVIRAH_WORLD_MAP}
                alt="Trailer thumbnail"
                className="w-full h-44 object-cover filter brightness-[45%] group-hover:brightness-[35%] transition-all duration-300"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
                <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-6 h-6 fill-current ml-1" />
                </div>
                <span className="text-white font-display text-sm tracking-widest uppercase mt-3 drop-shadow-md">
                  {WORLD_LORE.videoTitle}
                </span>
                <span className="text-stone-400 text-xs mt-1">Click to manifest projection</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cinematic Youtube Modal Trailer */}
      {activeMedia && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-md">
          <div className="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden border border-stone-900 shadow-2xl">
            <button
              onClick={() => setActiveMedia(false)}
              className="absolute top-3 right-3 text-white hover:text-stone-300 p-2 rounded-full bg-stone-900/80 transition-colors z-10"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="aspect-video">
              <iframe
                title={WORLD_LORE.videoTitle}
                src={WORLD_LORE.videoUrl}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-4 bg-black border-t border-stone-900 text-center">
              <h4 className="font-display text-white text-base">{WORLD_LORE.videoTitle}</h4>
              <p className="text-stone-500 text-xs mt-1">A glimpse into the legendary storms and struggles of the fifth era.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
