/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { SHOP_ITEMS } from '../data';
import { ShoppingBag, ArrowRight, Star, Heart, Flame, ShieldCheck, Mail } from 'lucide-react';

export default function ShopView() {
  const [subscribed, setSubscribed] = useState<boolean>(false);
  const [emailValue, setEmailValue] = useState<string>('');

  const handleSubscribeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailValue.trim()) {
      setSubscribed(true);
      setEmailValue('');
    }
  };

  return (
    <div className="font-sans space-y-8">
      {/* Immersive coming soon banner */}
      <div className="bg-[#5c4033] text-white p-8 rounded-sm border border-[#5c4033] shadow-md relative overflow-hidden">
        <div className="absolute right-6 top-6 opacity-10 pointer-events-none">
          <ShoppingBag className="w-40 h-40" />
        </div>

        <div className="max-w-2xl space-y-4 relative z-10">
          <div className="inline-flex items-center gap-1.5 bg-white text-[#3d2b1f] px-2.5 py-0.5 rounded-xs font-display text-[10px] tracking-widest uppercase font-bold">
            <Star className="w-3 h-3 fill-current" />
            <span>Sovereign Armory</span>
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-bold tracking-wide">
            Official Franchise Merchandise
          </h2>
          <p className="text-[#f5e6c4]/90 text-sm md:text-base leading-relaxed">
            The Scriptorium is assembling the finest artisans to craft authentic relics, exquisite illustration prints, leather replica books, and woven apparel. Merchandise coming soon!
          </p>

          {/* Interactive email form */}
          {!subscribed ? (
            <form onSubmit={handleSubscribeSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md pt-2">
              <input
                type="email"
                required
                placeholder="Enter scribe email address..."
                className="bg-stone-950/40 border border-white/20 rounded-xs px-4 py-2.5 text-white text-sm focus:outline-none focus:border-white grow placeholder:text-white/40"
                value={emailValue}
                onChange={(e) => setEmailValue(e.target.value)}
              />
              <button
                type="submit"
                className="px-5 py-2.5 bg-white text-[#3d2b1f] hover:bg-[#f5e6c4] active:bg-[#e9d5a1] font-display text-xs uppercase tracking-widest font-bold rounded-xs cursor-pointer transition-colors flex items-center justify-center gap-2 font-semibold"
              >
                <Mail className="w-4 h-4 shrink-0" />
                <span>Notify Me</span>
              </button>
            </form>
          ) : (
            <div className="inline-flex items-center gap-2 bg-[#f5e6c4]/20 border border-[#f5e6c4] px-4 py-2 rounded text-white text-sm font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>Thy contact has been recorded inside the High Registry. We shall summon you.</span>
            </div>
          )}
        </div>
      </div>

      {/* Catalog Grid Previews (Disabled/Coming Soon look) */}
      <div className="space-y-4">
        <h3 className="font-display text-lg text-amber-955 border-b border-amber-900/10 pb-2 mb-4">
          Anticipated Artifact Portfolios
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SHOP_ITEMS.map((item) => (
            <div
              key={item.id}
              className="group relative bg-amber-900/5 border border-amber-952/15 rounded-md p-5 flex flex-col justify-between overflow-hidden opacity-85 hover:opacity-100 transition-opacity"
            >
              {/* Coming soon glass banner */}
              <div className="absolute top-3 right-3 bg-amber-950/90 border border-gold-450 px-2.5 py-0.5 rounded-sm font-display text-[9px] tracking-wider uppercase text-gold-300">
                In Production
              </div>

              <div className="space-y-3">
                <span className="text-[10px] font-mono tracking-widest text-gold-650 uppercase font-semibold">
                  {item.category}
                </span>
                <h4 className="font-display text-base font-bold text-amber-950 group-hover:text-gold-750 transition-colors">
                  {item.name}
                </h4>
                <p className="text-stone-800 text-xs leading-normal">
                  {item.description}
                </p>
              </div>

              <div className="flex justify-between items-center pt-4 mt-4 border-t border-amber-900/10">
                <span className="font-mono text-sm text-gold-700 font-bold pr-2 bg-amber-950/5 rounded-sm py-0.5 px-2">
                  {item.price}
                </span>
                <span className="text-[10px] uppercase font-mono tracking-wider text-stone-500 font-semibold group-hover:text-amber-900 transition-colors flex items-center gap-1">
                  <span>Details</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
