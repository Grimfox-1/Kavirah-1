/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { CHARACTERS } from '../data';
import { Character } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Trophy, Lightbulb, MessageSquare, Play, X, UserCheck } from 'lucide-react';

export default function CharactersView() {
  const [selectedCharId, setSelectedCharId] = useState<string>('aerion');
  const [activeVideo, setActiveVideo] = useState<boolean>(false);

  const character = CHARACTERS.find((c) => c.id === selectedCharId) || CHARACTERS[0];

  return (
    <div className="font-sans space-y-8">
      {/* Scrollable list/cards of characters */}
      <div className="flex flex-wrap gap-4 border-b border-amber-900/15 pb-4">
        {CHARACTERS.map((c) => {
          const isSelected = c.id === selectedCharId;
          return (
            <button
              key={c.id}
              onClick={() => {
                setSelectedCharId(c.id);
                setActiveVideo(false);
              }}
              className={`px-5 py-3 rounded-md font-display text-sm tracking-wide transition-all duration-300 flex items-center gap-2 cursor-pointer border ${
                isSelected
                  ? 'bg-amber-950 text-gold-200 border-gold-450 shadow-md scale-102'
                  : 'bg-stone-100 text-stone-700 border-stone-200 hover:bg-stone-200'
              }`}
            >
              <UserCheck className="w-4 h-4 text-gold-550" />
              {c.name}
            </button>
          );
        })}
      </div>

      {/* Main Character Sheet */}
      <AnimatePresence mode="wait">
        <motion.div
          key={character.id}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-amber-900/5 border border-amber-950/15 rounded-md p-6 relative overflow-hidden"
        >
          {/* Column 1: Portrait */}
          <div className="lg:col-span-4 space-y-4">
            <div className="relative rounded-lg overflow-hidden border-2 border-gold-500/60 shadow-lg aspect-3/4 group">
              <img
                src={character.imageUrl}
                alt={character.name}
                className="w-full h-full object-cover filter brightness-[90%] saturate-[105%] group-hover:scale-102 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent flex flex-col justify-end p-4">
                <span className="font-display text-xs text-gold-200 uppercase/tracking-widest">
                  {character.title}
                </span>
                <h3 className="font-display text-xl text-white font-bold leading-tight mt-1">
                  {character.name}
                </h3>
              </div>
            </div>

            {/* Quote block */}
            {character.quote && (
              <div className="bg-amber-950/95 border-l-2 border-gold-450 p-4 rounded-r-md text-gold-100 shadow-sm">
                <MessageSquare className="w-4 h-4 text-gold-400 mb-1" />
                <p className="text-sm italic leading-relaxed">
                  {character.quote}
                </p>
              </div>
            )}
          </div>

          {/* Column 2: Details Sheet */}
          <div className="lg:col-span-8 space-y-6">
            <div>
              <span className="text-xs uppercase font-mono tracking-widest text-gold-650">Registered Legend</span>
              <h2 className="font-display text-3xl font-bold text-amber-950 mt-1">
                {character.name}
              </h2>
              <p className="text-stone-500 font-display text-sm tracking-wide mt-1 uppercase">
                {character.title}
              </p>
              <div className="h-0.5 bg-gradient-to-r from-amber-900/30 via-amber-900/10 to-transparent mt-3" />
            </div>

            {/* Background Narrative */}
            <div>
              <h4 className="font-display text-base font-bold text-amber-900 mb-1.5 uppercase tracking-wide">Biography</h4>
              <p className="text-stone-830 text-[16px] leading-relaxed">
                {character.background}
              </p>
            </div>

            {/* Key Personality */}
            <div>
              <h4 className="font-display text-base font-bold text-amber-900 mb-1.5 uppercase tracking-wide">Personality</h4>
              <p className="text-stone-800 text-[15px] leading-relaxed bg-stone-100/60 p-3 rounded-md border-l-2 border-amber-900/20">
                {character.personality}
              </p>
            </div>

            {/* Stats: Abilities & Achievements */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              {/* Special Abilities */}
              <div className="space-y-3">
                <h4 className="font-display text-sm font-bold text-amber-900 flex items-center gap-2 border-b border-amber-900/10 pb-1.5 uppercase tracking-wider">
                  <Lightbulb className="w-4 h-4 text-gold-600" />
                  Vessel Abilities
                </h4>
                <ul className="space-y-2">
                  {character.abilities.map((ab) => (
                    <li key={ab} className="text-stone-800 text-sm leading-relaxed p-2 rounded-sm bg-amber-50 md:hover:bg-amber-100/50 transition-colors">
                      {ab}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Achievements */}
              <div className="space-y-3">
                <h4 className="font-display text-sm font-bold text-amber-900 flex items-center gap-2 border-b border-amber-900/10 pb-1.5 uppercase tracking-wider">
                  <Trophy className="w-4 h-4 text-gold-600" />
                  Chronicle Feats
                </h4>
                <ul className="space-y-2">
                  {character.achievements.map((ach) => (
                    <li key={ach} className="text-stone-800 text-sm leading-relaxed p-2 rounded-sm bg-amber-50 md:hover:bg-amber-100/50 transition-colors">
                      {ach}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Interactive Portrait video link */}
            {character.videoUrl && (
              <div className="pt-4">
                <button
                  onClick={() => setActiveVideo(true)}
                  className="flex items-center gap-2 px-5 py-2.5 bg-gold-600 hover:bg-gold-700 active:bg-gold-800 text-white font-display text-xs uppercase tracking-widest rounded-md cursor-pointer transition-shadow shadow-md hover:shadow-lg"
                >
                  <Play className="w-4 h-4 fill-current" />
                  Summon Cinematic Introduction
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Embedded Video Overlay */}
      {activeVideo && (
        <div className="fixed inset-0 bg-stone-950/90 z-50 flex items-center justify-center p-4 backdrop-blur-md">
          <div className="relative w-full max-w-4xl bg-stone-900 rounded-lg overflow-hidden border border-gold-400 shadow-2xl animate-scale-up">
            <button
              onClick={() => setActiveVideo(false)}
              className="absolute top-3 right-3 text-gold-200 hover:text-white p-2 rounded-full bg-stone-800/80 transition-colors z-10 cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="aspect-video">
              <iframe
                title={`${character.name} Showcase`}
                src={character.videoUrl}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-4 bg-stone-950 text-center">
              <h4 className="font-display text-gold-300 text-base">{character.name} Character Teaser</h4>
              <p className="text-stone-400 text-xs mt-1">Discover the powers and fate of this champion.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
