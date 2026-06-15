/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { CREATURES } from '../data';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldAlert, Compass, Eye, ShieldCheck, Skull, Sparkles } from 'lucide-react';

export default function CreaturesView() {
  const [selectedId, setSelectedId] = useState<string>('moonfang_dragon');

  const creature = CREATURES.find((c) => c.id === selectedId) || CREATURES[0];

  return (
    <div className="font-sans space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {CREATURES.map((c) => {
          const isSelected = c.id === selectedId;
          return (
            <button
              key={c.id}
              onClick={() => setSelectedId(c.id)}
              className={`text-left p-4 rounded-md border-2 transition-all relative overflow-hidden group cursor-pointer ${
                isSelected
                  ? 'bg-amber-950 text-gold-200 border-gold-500 shadow-md scale-[1.01]'
                  : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100'
              }`}
            >
              <div className="flex items-center gap-4 z-10 relative">
                <div className="w-16 h-16 rounded-md overflow-hidden bg-stone-200 shrink-0 border border-amber-900/10">
                  <img
                    src={c.imageUrl}
                    alt={c.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold tracking-wide">
                    {c.name}
                  </h3>
                  <p className={`text-xs mt-0.5 line-clamp-1 ${isSelected ? 'text-amber-200/80' : 'text-stone-500'}`}>
                    Habitat: {c.habitat}
                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={creature.id}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 10 }}
          transition={{ duration: 0.3 }}
          className="bg-amber-900/5 border border-amber-952/15 rounded-md p-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Left: Illustration and Quick Info */}
            <div className="md:col-span-5 space-y-4">
              <div className="relative rounded-md overflow-hidden border border-amber-950/20 aspect-video md:aspect-square shadow-md group">
                <img
                  src={creature.imageUrl}
                  alt={creature.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-101"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-2 left-2 bg-stone-950/80 border border-gold-400 px-2 py-0.5 rounded-sm font-display text-[10px] text-gold-300">
                  Bestiary Core
                </div>
              </div>

              {/* Quick stats box */}
              <div className="bg-amber-950 text-gold-100 p-4 rounded-md space-y-2 border border-gold-900/50">
                <div className="flex justify-between text-xs border-b border-gold-900/50 pb-1.5">
                  <span className="text-gold-400 font-display">Habitat Range:</span>
                  <span className="text-right">{creature.habitat}</span>
                </div>
                <div className="flex justify-between text-xs pt-0.5">
                  <span className="text-gold-400 font-display">Activity State:</span>
                  <span>{creature.id === 'moonfang_dragon' ? 'Nocturnal / High Flight' : 'Ambush Predator / Roots'}</span>
                </div>
              </div>
            </div>

            {/* Right: Detailed text lore */}
            <div className="md:col-span-7 space-y-5">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-gold-600">Legendary Beings</span>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-amber-950 mt-1">
                  {creature.name}
                </h2>
                <div className="h-0.5 bg-amber-900/15 mt-2" />
              </div>

              {/* Behavior */}
              <div>
                <h4 className="font-display text-sm font-bold text-amber-900 flex items-center gap-1.5 uppercase tracking-wide">
                  <Compass className="w-4 h-4 text-gold-600" />
                  Senses and Behavior
                </h4>
                <p className="text-stone-800 text-sm leading-relaxed mt-1">
                  {creature.behavior}
                </p>
              </div>

              {/* Powers */}
              <div>
                <h4 className="font-display text-sm font-bold text-amber-900 flex items-center gap-1.5 uppercase tracking-wide">
                  <Sparkles className="w-4 h-4 text-gold-600" />
                  Vessel Powers & Sorceries
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                  {creature.powers.map((p) => (
                    <li key={p} className="text-xs text-stone-800 bg-amber-50 rounded-sm p-2 border-l-2 border-gold-550">
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legends */}
              <div>
                <h4 className="font-display text-sm font-bold text-amber-905 flex items-center gap-1.5 uppercase tracking-wide">
                  <Eye className="w-4 h-4 text-gold-600" />
                  Chronicle Mythos
                </h4>
                <p className="text-stone-850 text-sm italic leading-relaxed mt-1">
                  {creature.legends}
                </p>
              </div>

              {/* Weaknesses */}
              <div className="bg-stone-50 border-l-2 border-red-500/60 p-3 rounded-r-md">
                <h4 className="font-display text-xs font-bold text-red-950 flex items-center gap-1.5 uppercase tracking-wider">
                  <Skull className="w-3.5 h-3.5 text-red-650" />
                  Known Weaknesses
                </h4>
                <ul className="list-disc list-inside mt-1.5 space-y-1">
                  {creature.weaknesses.map((w) => (
                    <li key={w} className="text-stone-700 text-xs leading-normal">
                      {w}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
