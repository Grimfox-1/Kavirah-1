/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ORGANIZATIONS } from '../data';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldAlert, EyeOff, Target, Swords, Users, Landmark, Flame } from 'lucide-react';

export default function OrganizationsView() {
  const [selectedId, setSelectedId] = useState<string>('silver_flame');

  const organization = ORGANIZATIONS.find((o) => o.id === selectedId) || ORGANIZATIONS[0];

  // Helper to map dynamic string name into actual Lucide Icon elements
  const renderOrgIcon = (symbol: string) => {
    switch (symbol) {
      case 'ShieldAlert':
        return <ShieldAlert className="w-8 h-8 text-gold-400" />;
      case 'EyeOff':
        return <EyeOff className="w-8 h-8 text-rose-455" />;
      default:
        return <Flame className="w-8 h-8 text-amber-500" />;
    }
  };

  return (
    <div className="font-sans space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {ORGANIZATIONS.map((o) => {
          const isSelected = o.id === selectedId;
          const cardStyle = isSelected
            ? 'bg-amber-950 text-gold-200 border-gold-400 ring-1 ring-gold-450 scale-[1.01]'
            : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100';

          return (
            <button
              key={o.id}
              onClick={() => setSelectedId(o.id)}
              className={`p-5 rounded-md border text-left transition-all relative overflow-hidden group cursor-pointer ${cardStyle}`}
            >
              <div className="flex justify-between items-center z-10 relative">
                <div>
                  <span className={`text-[10px] font-mono tracking-widest uppercase ${isSelected ? 'text-gold-400' : 'text-stone-500'}`}>
                    {o.id === 'silver_flame' ? 'Holy Order' : 'Secret Syndicate'}
                  </span>
                  <h3 className="font-display text-base font-bold tracking-wide mt-1">
                    {o.name}
                  </h3>
                  <p className={`text-xs italic mt-1 line-clamp-1 ${isSelected ? 'text-stone-300' : 'text-stone-600'}`}>
                    "{o.purpose}"
                  </p>
                </div>
                <div className={`p-2.5 rounded-full ${isSelected ? 'bg-amber-950/80 border border-gold-900/30' : 'bg-stone-200'}`}>
                  {renderOrgIcon(o.symbol)}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={organization.id}
          initial={{ opacity: 0, scale: 0.99 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.99 }}
          transition={{ duration: 0.3 }}
          className="bg-amber-900/5 border border-amber-952/15 rounded-md p-6 relative overflow-hidden"
        >
          {/* Subtle background overlay */}
          <div className="absolute inset-0 bg-radial-gradient from-transparent to-amber-950/5 pointer-events-none" />

          <div className="space-y-6 relative z-10">
            {/* Header banner */}
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between border-b border-amber-900/10 pb-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-gold-600 font-semibold">Covenant Ledger</span>
                <h2 className="font-display text-2xl font-bold text-amber-950 mt-1">
                  {organization.name}
                </h2>
                <p className="text-stone-500 text-xs italic mt-1">"{organization.purpose}"</p>
              </div>

              <div className="flex items-center gap-3 bg-amber-950 px-4 py-2 rounded-md border border-gold-400 text-gold-200">
                {renderOrgIcon(organization.symbol)}
                <div>
                  <div className="text-[10px] font-mono tracking-wider uppercase text-gold-450">Presiding Leader</div>
                  <div className="text-xs font-bold font-display">{organization.leadership}</div>
                </div>
              </div>
            </div>

            {/* History */}
            <div>
              <h4 className="font-display text-sm font-bold text-amber-900 flex items-center gap-1.5 uppercase tracking-wide">
                <Landmark className="w-4 h-4 text-gold-650" />
                Charter History
              </h4>
              <p className="text-stone-800 text-sm leading-relaxed mt-1.5">
                {organization.history}
              </p>
            </div>

            {/* Goals & Sphere of Influence */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="space-y-3">
                <h4 className="font-display text-sm font-bold text-amber-900 flex items-center gap-1.5 uppercase tracking-wide border-b border-amber-900/10 pb-1.5">
                  <Target className="w-4 h-4 text-gold-650" />
                  Primary Objectives
                </h4>
                <ul className="space-y-2">
                  {organization.goals.map((g) => (
                    <li key={g} className="text-xs text-stone-800 bg-amber-50 rounded-sm p-3 border-l-2 border-gold-550 leading-relaxed">
                      {g}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-amber-950/5 border border-amber-900/10 p-5 rounded-md space-y-3 self-start">
                <h4 className="font-display text-sm font-bold text-amber-900 flex items-center gap-1.5 uppercase tracking-wide border-b border-amber-900/10 pb-1.5">
                  <Users className="w-4 h-4 text-gold-600" />
                  World Influence & Reach
                </h4>
                <p className="text-stone-800 text-sm leading-relaxed">
                  {organization.influence}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
