/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { DOWNLOAD_GAME } from '../data';
import { Download, Monitor, Smartphone, FileText, Settings, Sparkles, Gamepad2, ArrowUpRight, Flame, ShieldAlert } from 'lucide-react';

export default function DownloadsView() {
  return (
    <div className="font-sans space-y-8">
      {/* Prime Campaign Game Download container */}
      <div className="bg-[#5c4033]/5 border border-[#5c4033]/20 rounded-sm p-6 relative overflow-hidden backdrop-blur-xs">
        {/* Main Display splits */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Cover Art */}
          <div className="lg:col-span-5 relative rounded-sm overflow-hidden border-2 border-[#5c4033]/40 shadow-lg aspect-16/10 group bg-stone-900 self-stretch">
            <img
              src={DOWNLOAD_GAME.coverImage}
              alt="Kavirah Cover Game Art"
              className="w-full h-full object-cover filter brightness-[75%] saturation-[95%] group-hover:scale-102 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            {/* Overlay titles */}
            <div className="absolute inset-0 bg-transparent flex flex-col justify-end p-6 bg-gradient-to-t from-stone-950/80 to-transparent">
              <span className="font-display text-[10px] tracking-widest text-[#f5e6c4] font-semibold uppercase mb-1">Interactive Epoch Campaign</span>
              <h3 className="font-display text-xl text-stone-100 font-semibold drop-shadow-md leading-tight">
                {DOWNLOAD_GAME.title}
              </h3>
            </div>
          </div>

          {/* Download and features sheet */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs uppercase font-mono tracking-widest text-[#5c4033] font-bold">Featured Master-title</span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-[#3d2b1f] mt-1">
                {DOWNLOAD_GAME.title}
              </h2>
              <div className="h-0.5 bg-[#5c4033]/15 mt-2" />
            </div>

            <p className="text-stone-800 text-[15px] leading-relaxed">
              {DOWNLOAD_GAME.description}
            </p>

            {/* Platform actions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* PC Download */}
              <a
                href={DOWNLOAD_GAME.pcDownloadUrl}
                className="flex items-center justify-center gap-3 px-5 py-3.5 bg-[#5c4033] hover:bg-[#3d2b1f] text-[#f5e6c4] border border-[#d4c3a3]/30 hover:border-white font-display text-xs uppercase tracking-widest rounded-xs cursor-pointer transition-all shadow-md group"
              >
                <Monitor className="w-4 h-4 text-[#f5e6c4] group-hover:scale-110 transition-transform" />
                <span>Download for PC</span>
              </a>

              {/* Android Download */}
              <a
                href={DOWNLOAD_GAME.androidDownloadUrl}
                className="flex items-center justify-center gap-3 px-5 py-3.5 bg-[#f5e6c4] hover:bg-white text-[#3d2b1f] border border-[#5c4033]/30 font-display text-xs uppercase tracking-widest rounded-xs cursor-pointer transition-all shadow-md group font-semibold"
              >
                <Smartphone className="w-4 h-4 text-[#3d2b1f] group-hover:scale-110 transition-transform" />
                <span>Download for Android</span>
              </a>
            </div>

            {/* Sub resources list */}
            <div className="flex flex-wrap gap-4 pt-2 border-t border-[#5c4033]/15">
              <a
                href={DOWNLOAD_GAME.manualUrl}
                className="flex items-center gap-2 text-stone-700 hover:text-amber-955 text-xs font-semibold"
              >
                <FileText className="w-4 h-4 text-[#5c4033]" />
                <span>Official Game Manual (PDF)</span>
              </a>
              <span className="text-stone-300 hidden sm:block">|</span>
              <a
                href={DOWNLOAD_GAME.launcherUrl}
                className="flex items-center gap-2 text-stone-700 hover:text-amber-955 text-xs font-semibold"
              >
                <Settings className="w-4 h-4 text-[#5c4033]" />
                <span>Direct Launcher Client</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Minecraft Mod: Damned Legions Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-[#5c4033]/5 border border-[#5c4033]/20 rounded-sm p-6 relative overflow-hidden backdrop-blur-xs">
        {/* Left Column: Brief details and mod badge */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-emerald-100 border border-emerald-300 rounded-xs text-emerald-800 text-[10px] font-mono tracking-wider uppercase font-semibold">
              <Gamepad2 className="w-3.5 h-3.5" />
              <span>MINECRAFT BEDROCK ADDON</span>
            </div>
            
            <h3 className="font-display text-2xl font-bold text-[#3d2b1f] leading-tight">
              Damned Legions Mod
            </h3>
            
            <p className="text-stone-800 text-[15px] leading-relaxed">
              Unleash the terrifying shadow legions of Kavirah inside your Minecraft worlds! Confront demonic infantry, defend your villages against aggressive rift invasions, and gather mythical materials to craft specialized swords and radiant armor.
            </p>
          </div>

          <div className="pt-4 border-t border-[#5c4033]/10">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#3d2b1f] mb-2 flex items-center gap-1.5">
              <Flame className="w-4 h-4 text-[#5c4033]" />
              Major Expansion Features
            </h4>
            <ul className="space-y-1.5 text-xs text-stone-700">
              <li className="flex items-center gap-1.5">&bull; <strong>Damned Soldier & Captains</strong>: Adaptive AI hostile hordes</li>
              <li className="flex items-center gap-1.5">&bull; <strong>Void Rift Rifts</strong>: Natural spawner portals</li>
              <li className="flex items-center gap-1.5">&bull; <strong>Sovereign Steel Gear</strong>: Solder & smelt celestial ore</li>
              <li className="flex items-center gap-1.5">&bull; <strong>Complete Soundscapes</strong>: Custom screams and steel clashes</li>
            </ul>
          </div>
        </div>

        {/* Right Column: Visual illustration and main download actions */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
          {/* Visual Showcase Card */}
          <div className="bg-[#5c4033] rounded-sm p-6 text-[#f5e6c4] border border-[#5c4033]/40 shadow-inner space-y-3 relative overflow-hidden">
            <div className="absolute right-4 top-4 opacity-5 pointer-events-none">
              <Flame className="w-32 h-32" />
            </div>
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#f5e6c4]/80">Currently Available on CurseForge</span>
                <span className="block font-display text-lg font-semibold text-white">Damned Legions v1.0</span>
              </div>
              <ShieldAlert className="w-5 h-5 text-[#f5e6c4]" />
            </div>
            
            <p className="text-xs text-[#f5e6c4]/90 leading-relaxed italic">
              "Witness the fusion of Kavirah’s high-chivalry knighthood and the infinite cubic sandbox. Erect massive forts to keep out the void legions!"
            </p>
            
            <div className="h-px bg-white/10" />
            
            <div className="flex items-center justify-between text-[11px] font-mono text-white/80">
              <span>RATING: 5/5 Stars</span>
              <span>COMPATIBILITY: Minecraft Bedrock (1.20+)</span>
            </div>
          </div>

          {/* Action buttons */}
          <div className="space-y-3">
            <a
              href="https://www.curseforge.com/minecraft-bedrock/addons/damned-legions"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 px-6 py-4 bg-gradient-to-r from-orange-600 to-amber-700 hover:from-orange-700 hover:to-amber-800 text-white font-display text-xs uppercase tracking-widest font-bold rounded-xs cursor-pointer transition-all shadow-md group"
            >
              <span>Download Mod on CurseForge</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            
            <p className="text-center text-[11px] text-stone-500 font-medium">
              You will be navigated safely to Curran Forge to acquire the .mcaddon installation files.
            </p>
          </div>
        </div>
      </div>

      {/* Patch Notes Log details */}
      <div className="bg-[#5c4033]/5 border border-[#5c4033]/25 p-6 rounded-sm">
        <h3 className="font-display text-lg text-[#3d2b1f] border-b border-[#5c4033]/20 pb-2 mb-4 flex items-center gap-2 font-bold uppercase tracking-wider">
          <Sparkles className="w-4 h-4 text-amber-600" />
          Scribe Engine Changelog
        </h3>
        <div className="space-y-3">
          {DOWNLOAD_GAME.patchNotes.map((note) => {
            const [version, details] = note.split(':');
            return (
              <div key={note} className="flex gap-4 p-3 bg-white/40 backdrop-blur-xs rounded-sm border border-[#5c4033]/15 hover:border-[#5c4033] hover:bg-white/60 transition-colors">
                <span className="font-mono text-xs text-[#5c4033] font-bold tracking-wider uppercase shrink-0 mt-0.5 font-bold">
                  {version}
                </span>
                <p className="text-stone-850 text-xs leading-normal">
                  {details}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

