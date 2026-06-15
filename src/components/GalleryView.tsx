/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data';
import { Play, Eye, X, Filter, Image as ImageIcon, Video } from 'lucide-react';

export default function GalleryView() {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedMedia, setSelectedMedia] = useState<any | null>(null);

  const categories = ['All', 'Concepts & Maps', 'Kingdom Landscapes', 'Character Portrayals', 'Mythical Creatures', 'Teasers & Trailers'];

  const filteredItems = activeFilter === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <div className="font-sans space-y-6">
      {/* Category filters */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-amber-900/10">
        <Filter className="w-4 h-4 text-amber-900 shrink-0 hidden sm:block" />
        <div className="flex gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-3 py-1.5 rounded-sm font-display text-xs tracking-wider uppercase transition-colors shrink-0 cursor-pointer border ${
                activeFilter === cat
                  ? 'bg-amber-950 text-gold-200 border-gold-400'
                  : 'bg-stone-50 border-stone-200 text-stone-600 hover:text-stone-900 hover:bg-stone-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedMedia(item)}
            className="group relative rounded-md overflow-hidden bg-stone-950 border border-amber-950/20 shadow-md cursor-pointer aspect-4/3 flex flex-col justify-end"
          >
            <img
              src={item.thumbnailUrl}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover filter brightness-[75%] group-hover:brightness-[55%] group-hover:scale-103 transition-all duration-500 ease-out"
              referrerPolicy="no-referrer"
            />

            {/* Graphic Badge/Overlay */}
            <div className="absolute top-3 right-3 bg-stone-950/80 border border-gold-400/50 p-1.5 rounded-sm text-gold-300">
              {item.type === 'video' ? <Video className="w-3.5 h-3.5" /> : <ImageIcon className="w-3.5 h-3.5" />}
            </div>

            <div className="p-4 bg-gradient-to-t from-stone-950 via-stone-900/60 to-transparent z-10">
              <span className="text-[10px] font-mono tracking-widest text-gold-450 uppercase">
                {item.category}
              </span>
              <h4 className="font-display text-sm tracking-wide text-white group-hover:text-gold-200 mt-1 transition-colors leading-tight">
                {item.title}
              </h4>
              <div className="flex items-center gap-1.5 text-stone-400 text-[11px] mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                {item.type === 'video' ? (
                  <>
                    <Play className="w-3 h-3 fill-current text-gold-450" />
                    <span>Witness Projection</span>
                  </>
                ) : (
                  <>
                    <Eye className="w-3.5 h-3.5 text-gold-450" />
                    <span>Inspect Detail</span>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Media Inspection Modal */}
      {selectedMedia && (
        <div className="fixed inset-0 bg-stone-950/92 z-50 flex items-center justify-center p-4 backdrop-blur-md">
          <div className="relative w-full max-w-4xl bg-stone-900 rounded-lg overflow-hidden border border-gold-400 shadow-2xl animate-scale-up">
            <button
              onClick={() => setSelectedMedia(null)}
              className="absolute top-3 right-3 text-gold-200 hover:text-white p-2 rounded-full bg-stone-800/80 transition-colors z-10 cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="overflow-hidden bg-stone-950">
              {selectedMedia.type === 'video' ? (
                <div className="aspect-video">
                  <iframe
                    title={selectedMedia.title}
                    src={selectedMedia.url}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                <div className="flex justify-center items-center p-2 max-h-[75vh]">
                  <img
                    src={selectedMedia.url}
                    alt={selectedMedia.title}
                    className="max-w-full max-h-[70vh] object-contain rounded-sm"
                    referrerPolicy="no-referrer"
                  />
                </div>
              )}
            </div>

            <div className="p-4 bg-stone-950 border-t border-amber-950/40 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
              <div>
                <span className="text-[10px] font-mono tracking-wider uppercase text-gold-400">{selectedMedia.category}</span>
                <h4 className="font-display text-gold-100 text-base">{selectedMedia.title}</h4>
              </div>
              <span className="text-stone-400 text-xs italic">
                {selectedMedia.type === 'video' ? 'Authorized Scriptorium Record' : 'Official Archive Hand-Sketch'}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
