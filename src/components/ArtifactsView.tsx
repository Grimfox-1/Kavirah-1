/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ARTIFACTS } from '../data';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Trophy, BookOpen, Compass, Crown, ShieldAlert } from 'lucide-react';

export default function ArtifactsView() {
  const [selectedId, setSelectedId] = useState<string>('crown_of_dawn');

  const artifact = ARTIFACTS.find((a) => a.id === selectedId) || ARTIFACTS[0];

  return (
    <div className="font-sans space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {ARTIFACTS.map((a) => {
          const isSelected = a.id === selectedId;
          const cardStyle = isSelected
            ? 'bg-amber-950 text-gold-200 border-gold-400 scale-[1.01] shadow-md'
            : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100';

          return (
            <button
              key={a.id}
              onClick={() => setSelectedId(a.id)}
              className={`p-5 rounded-md border text-left transition-all relative overflow-hidden group cursor-pointer ${cardStyle}`}
            >
              <div className="flex justify-between items-center z-10 relative">
                <div>
                  <span className={`text-[10px] font-mono tracking-widest uppercase ${isSelected ? 'text-gold-400' : 'text-stone-500'}`}>
                    {a.id === 'crown_of_dawn' ? 'Regalia relic' : 'Metamorphic blade'}
                  </span>
                  <h3 className="font-display text-base font-bold tracking-wide mt-1">
                    {a.name}
                  </h3>
                  <p className={`text-xs italic mt-1 line-clamp-1 ${isSelected ? 'text-stone-300' : 'text-stone-600'}`}>
                    Origin: {a.origin}
                  </p>
                </div>
                <div className={`p-2 rounded-full ${isSelected ? 'bg-gold-500/20' : 'bg-stone-250'}`}>
                  <Crown className="w-6 h-6 text-gold-600" />
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={artifact.id}
          initial={{ opacity: 0, scale: 0.99 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.99 }}
          transition={{ duration: 0.3 }}
          className="bg-amber-900/5 border border-amber-952/15 rounded-md p-6 relative overflow-hidden"
        >
          {/* Main content split */}
          <div className="space-y-6">
            <div>
              <span className="text-xs uppercase font-mono tracking-widest text-gold-600 font-semibold text-gold-650">Mystical Antiquities</span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-amber-955 mt-1">
                {artifact.name}
              </h2>
              <p className="text-stone-500 text-xs mt-1.5 leading-relaxed">
                <span className="font-bold text-stone-700">Origin:</span> {artifact.origin}
              </p>
              <div className="h-0.5 bg-gradient-to-r from-amber-900/20 to-transparent mt-3" />
            </div>

            {/* Powers list */}
            <div className="space-y-2.5">
              <h4 className="font-display text-sm font-bold text-amber-900 flex items-center gap-1.5 uppercase tracking-wide">
                <Sparkles className="w-4 h-4 text-gold-600" />
                Relic Powers
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {artifact.powers.map((pow) => (
                  <div key={pow} className="p-3 bg-white border border-amber-900/10 rounded-md shadow-xs flex gap-2">
                    <span className="text-gold-600 shrink-0 select-none mt-0.5">&bull;</span>
                    <p className="text-stone-800 text-xs leading-normal">
                      {pow}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* History */}
            <div>
              <h4 className="font-display text-sm font-bold text-amber-900 flex items-center gap-1.5 uppercase tracking-wide">
                <BookOpen className="w-4 h-4 text-gold-650" />
                Legendary Narrative
              </h4>
              <p className="text-stone-850 text-sm leading-relaxed mt-1.5">
                {artifact.history}
              </p>
            </div>

            {/* Wielders */}
            <div className="bg-amber-950/5 border border-amber-900/10 p-4 rounded-md">
              <h4 className="font-display text-xs font-bold text-amber-900 flex items-center gap-1.5 uppercase tracking-wider mb-2">
                <Trophy className="w-3.5 h-3.5 text-gold-600" />
                Historic Known Wearers & Wielders
              </h4>
              <div className="flex flex-wrap gap-2">
                {artifact.knownWielders.map((wielder) => (
                  <span key={wielder} className="px-3 py-1 bg-amber-950 text-gold-200 text-xs rounded-sm border border-gold-900/50">
                    {wielder}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
