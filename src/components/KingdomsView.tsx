/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { KINGDOMS } from '../data';
import { Kingdom } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Sparkles, User, Landmark, Users, Sword, Castle, MapPin } from 'lucide-react';

export default function KingdomsView() {
  const [selectedKingdomId, setSelectedKingdomId] = useState<string>('valtheris');

  const selectedKingdom = KINGDOMS.find((k) => k.id === selectedKingdomId) || KINGDOMS[0];

  return (
    <div className="font-sans space-y-6">
      {/* Kingdom Selector Banners */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {KINGDOMS.map((k) => {
          const isSelected = k.id === selectedKingdomId;
          const bgTheme = k.id === 'valtheris' 
            ? 'from-amber-950/90 to-amber-900/45 text-gold-100 border-gold-400' 
            : 'from-stone-950 to-red-950/60 text-stone-200 border-rose-900/60';

          return (
            <button
              key={k.id}
              onClick={() => setSelectedKingdomId(k.id)}
              className={`text-left p-5 rounded-md border-2 cursor-pointer transition-all relative overflow-hidden group ${
                isSelected 
                  ? `${bgTheme} ring-2 ring-gold-500 shadow-xl scale-[1.01]` 
                  : 'bg-stone-100 border-stone-200 hover:bg-stone-200 text-stone-800'
              }`}
            >
              <div className="flex justify-between items-center z-10 relative">
                <div>
                  <span className={`text-[10px] uppercase font-mono tracking-widest ${isSelected ? 'text-gold-400' : 'text-stone-500'}`}>
                    {k.id === 'valtheris' ? 'High Sovereignty' : 'Iron Dominion'}
                  </span>
                  <h3 className="font-display text-lg md:text-xl font-bold tracking-wide mt-0.5">
                    {k.name}
                  </h3>
                  <p className={`text-xs italic mt-1 ${isSelected ? 'text-stone-300' : 'text-stone-600'}`}>
                    "{k.motto}"
                  </p>
                </div>

                <div className={`p-2.5 rounded-full ${isSelected ? 'bg-gold-550/30' : 'bg-stone-300/45'}`}>
                  <Shield className={`w-6 h-6 ${isSelected ? 'text-gold-400' : 'text-stone-600'}`} />
                </div>
              </div>

              {/* Hover highlight overlays */}
              <div className="absolute inset-0 bg-gold-400/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          );
        })}
      </div>

      {/* Detail Showcase Container */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedKingdom.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.35 }}
          className="bg-amber-900/5 border border-amber-950/20 rounded-md p-6 relative overflow-hidden"
        >
          {/* Main banner image on top */}
          <div className="relative h-64 md:h-80 w-full rounded-md overflow-hidden border border-amber-950/30 mb-6 group shadow-md">
            <img
              src={selectedKingdom.artworkUrl}
              alt={selectedKingdom.name}
              className="w-full h-full object-cover filter brightness-[85%] group-hover:scale-102 transition-transform duration-700 ease-out"
              referrerPolicy="no-referrer"
            />
            {/* Ambient vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent flex items-end p-4">
              <span className="font-display text-white text-xs tracking-widest uppercase bg-stone-950/60 backdrop-blur-xs px-2 py-1 rounded-sm border border-stone-800">
                Official Crown Concept Artwork
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Content Column */}
            <div className="lg:col-span-8 space-y-6">
              <div>
                <h2 className="font-display text-2xl md:text-3xl text-amber-950 flex items-center gap-2">
                  <Castle className="w-6 h-6 text-gold-600" />
                  {selectedKingdom.name}
                </h2>
                <div className="h-0.5 bg-gradient-to-r from-amber-900/30 to-transparent mt-2" />
                <p className="text-stone-800 text-[17px] leading-relaxed italic mt-4 pl-4 border-l-2 border-gold-550/60">
                  {selectedKingdom.description}
                </p>
              </div>

              {/* Rulers & Cultural Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-amber-950/5 border border-amber-900/10 p-5 rounded-md">
                  <h4 className="font-display text-amber-900 text-base font-bold mb-3 flex items-center gap-2 border-b border-amber-900/10 pb-1.5">
                    <User className="w-4 h-4 text-gold-600" />
                    Sovereign Rulers
                  </h4>
                  <ul className="space-y-2.5">
                    {selectedKingdom.rulers.map((r) => (
                      <li key={r} className="text-stone-800 text-sm flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold-600" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-amber-950/5 border border-amber-900/10 p-5 rounded-md">
                  <h4 className="font-display text-amber-900 text-base font-bold mb-3 flex items-center gap-2 border-b border-amber-900/10 pb-1.5">
                    <Users className="w-4 h-4 text-gold-600" />
                    Dominant Culture
                  </h4>
                  <p className="text-stone-800 text-sm leading-relaxed">
                    {selectedKingdom.culture}
                  </p>
                </div>
              </div>

              {/* Military section */}
              <div className="bg-amber-950/5 border border-amber-900/10 p-5 rounded-md relative overflow-hidden">
                <div className="absolute right-3 top-3 opacity-10">
                  <Sword className="w-20 h-20 text-amber-900" />
                </div>
                <h4 className="font-display text-amber-905 text-base font-bold mb-3 flex items-center gap-2 border-b border-amber-900/10 pb-1.5 relative z-10">
                  <Sword className="w-4 h-4 text-gold-600" />
                  Imperial Forces & Retainer Legions
                </h4>
                <p className="text-stone-850 text-sm leading-relaxed relative z-10">
                  {selectedKingdom.military}
                </p>
              </div>
            </div>

            {/* Right Side Column: Cities and Politics */}
            <div className="lg:col-span-4 space-y-6">
              {/* Important Cities */}
              {selectedKingdom.importantCities && (
                <div className="bg-amber-950/95 border border-gold-400 p-5 rounded-md text-gold-100 shadow-md">
                  <h4 className="font-display text-gold-300 text-base font-bold mb-4 flex items-center gap-2 border-b border-gold-900/50 pb-2 uppercase tracking-wider">
                    <MapPin className="w-4.5 h-4.5 text-gold-400" />
                    Key Settlement Anchors
                  </h4>
                  <ul className="space-y-3">
                    {selectedKingdom.importantCities.map((city) => (
                      <li key={city} className="flex items-center gap-2 group cursor-pointer hover:translate-x-1 transition-transform">
                        <span className="w-1.5 h-1.5 bg-gold-400 rounded-sm group-hover:bg-gold-200 transition-colors" />
                        <span className="text-stone-200 text-sm font-medium group-hover:text-amber-100 transition-colors">
                          {city}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Political structure */}
              {selectedKingdom.politicalStructure && (
                <div className="bg-amber-900/10 border border-amber-950/20 p-5 rounded-md">
                  <h4 className="font-display text-amber-900 text-base font-bold mb-3 flex items-center gap-2 border-b border-amber-900/10 pb-1.5">
                    <Landmark className="w-4 h-4 text-gold-605" />
                    Government Structure
                  </h4>
                  <p className="text-stone-800 text-sm leading-relaxed">
                    {selectedKingdom.politicalStructure}
                  </p>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
