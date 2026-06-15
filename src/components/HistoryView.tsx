/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { HISTORY_TIMELINE, KAVIRAH_WORLD_MAP } from '../data';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Play, Sparkles, Trophy, X, ChevronRight } from 'lucide-react';

export default function HistoryView() {
  const [selectedEraId, setSelectedEraId] = useState<string>(HISTORY_TIMELINE[0]?.id || 'creation');
  const [activeMedia, setActiveMedia] = useState<boolean>(false);

  const era = HISTORY_TIMELINE.find((h) => h.id === selectedEraId) || HISTORY_TIMELINE[HISTORY_TIMELINE.length - 1];

  return (
    <div className="font-sans space-y-8">
      {/* Visual Timeline Stepper */}
      <div className="relative flex flex-col md:flex-row justify-between items-stretch md:items-center bg-amber-950 text-gold-100 p-4 rounded-md border-2 border-gold-400/50 shadow overflow-x-auto gap-4 md:gap-2">
        {HISTORY_TIMELINE.map((h, idx) => {
          const isSelected = h.id === selectedEraId;
          return (
            <React.Fragment key={h.id}>
              <button
                onClick={() => {
                  setSelectedEraId(h.id);
                  setActiveMedia(false);
                }}
                className={`flex flex-col items-center md:items-center p-3 rounded-md transition-all shrink-0 cursor-pointer text-center relative ${
                  isSelected
                    ? 'bg-gold-600/30 border border-gold-400 text-white font-bold scale-102 shadow-sm'
                    : 'text-stone-300 hover:text-white hover:bg-stone-900/60'
                }`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                  isSelected ? 'bg-gold-550 border-gold-300 text-stone-950' : 'bg-stone-850 border-stone-600 text-stone-400'
                } font-display text-sm mb-1.5`}>
                  {idx + 1}
                </div>
                <div className="text-[10px] font-mono tracking-widest text-gold-400 uppercase">{h.era}</div>
                <div className="font-display text-xs tracking-wide mt-0.5 whitespace-nowrap">{h.title}</div>
              </button>

              {/* Connecting line on desktop */}
              {idx < HISTORY_TIMELINE.map.length - 1 && (
                <div className="hidden md:block h-0.5 bg-gold-900/40 grow mx-2" />
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Main Epoch Chronicle Display */}
      <AnimatePresence mode="wait">
        <motion.div
          key={era.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3 }}
          className="bg-amber-900/5 border border-amber-952/15 rounded-md p-6 relative overflow-hidden"
        >
          {/* Decorative scroll icon background */}
          <div className="absolute right-5 bottom-5 opacity-5 pointer-events-none">
            <Calendar className="w-56 h-56 text-amber-950" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
            {/* Left side: narrative */}
            <div className="lg:col-span-8 space-y-6">
              <div>
                <span className="text-xs uppercase font-mono tracking-widest text-gold-600 font-semibold">
                  Kavirah Chronicles &bull; {era.era}
                </span>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-amber-950 mt-1">
                  {era.title}
                </h2>
                <div className="h-0.5 bg-gradient-to-r from-amber-900/25 via-amber-900/5 to-transparent mt-2" />
              </div>

              <div className="space-y-4">
                <p className="text-stone-850 text-[17px] leading-relaxed italic border-l-2 border-gold-550/40 pl-4 py-1 bg-stone-100/30 rounded-r-md">
                  {era.description}
                </p>
              </div>

              {/* Notable Epoch Incidents */}
              <div className="space-y-3">
                <h4 className="font-display text-sm font-bold text-amber-900 flex items-center gap-1.5 uppercase tracking-wide">
                  <Trophy className="w-4 h-4 text-gold-600" />
                  Key Epoch Occurrences
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {era.events.map((evt, idx) => (
                    <div key={idx} className="flex gap-2.5 p-3 rounded-md bg-white border border-amber-900/10 hover:border-gold-400 transition-colors">
                      <div className="w-6 h-6 rounded-full bg-gold-100 text-gold-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                        {idx + 1}
                      </div>
                      <p className="text-stone-800 text-sm leading-normal">
                        {evt}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right side: multimedia */}
            <div className="lg:col-span-4 space-y-5">
              <div className="relative rounded-md overflow-hidden bg-stone-900 border border-amber-950/20 p-4 space-y-4 shadow-md">
                <h4 className="font-display text-gold-300 text-sm uppercase tracking-wider border-b border-stone-800 pb-2">
                  Archival Records
                </h4>
                <div 
                  onClick={() => setActiveMedia(true)}
                  className="relative rounded-md overflow-hidden cursor-pointer group pointer-events-auto"
                >
                  <img
                    src={KAVIRAH_WORLD_MAP}
                    alt="Timeline thumbnail"
                    className="w-full h-36 object-cover filter brightness-[50%] group-hover:brightness-[40%] transition-all"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-2">
                    <div className="w-10 h-10 rounded-full bg-gold-450 text-stone-950 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Play className="w-4 h-4 fill-current ml-0.5" />
                    </div>
                    <span className="text-[10px] font-display text-gold-200 tracking-wider uppercase mt-2">
                      Manifest Projection
                    </span>
                  </div>
                </div>
                <p className="text-[11px] text-stone-400 italic text-center">
                  Sparks a visual scroll summarizing the deep {era.title} shifts.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Cinematic projection Modal */}
      {activeMedia && (
        <div className="fixed inset-0 bg-stone-950/90 z-50 flex items-center justify-center p-4 backdrop-blur-md">
          <div className="relative w-full max-w-4xl bg-stone-900 rounded-lg overflow-hidden border border-gold-400 shadow-2xl animate-scale-up">
            <button
              onClick={() => setActiveMedia(false)}
              className="absolute top-3 right-3 text-gold-200 hover:text-white p-2 rounded-full bg-stone-800/80 transition-colors z-10 cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="aspect-video">
              <iframe
                title={`${era.title} Cinematic Archive`}
                src="https://www.youtube.com/embed/4KYcwfS-TZc"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-4 bg-stone-950 text-center">
              <h4 className="font-display text-gold-300 text-base">{era.title} - Epic Recap</h4>
              <p className="text-stone-400 text-xs mt-1">Authorized cinematic projection by the Scribes of high Luminis.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
