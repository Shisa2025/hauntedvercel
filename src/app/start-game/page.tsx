'use client';

import Link from "next/link";
import { useState } from "react";

export default function StartGame() {
  const [showControls, setShowControls] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white font-sans relative">
      {/* Game Container */}
      <div 
        className="w-full h-screen flex flex-col"
        onMouseEnter={() => setShowControls(false)}
        onMouseLeave={() => setShowControls(true)}
      >
        <div className="flex-1">
          <iframe
            src="/webgl-game/index.html"
            className="w-full h-full border-0"
            title="SheepShake Game"
            allowFullScreen
          />
        </div>

        {/* Controls Overlay - Show only when cursor is NOT on game area */}
        {showControls && (
          <div className="absolute bottom-8 left-8 bg-gray-900 bg-opacity-80 backdrop-blur-md rounded-xl p-6 border-2 border-purple-500 shadow-lg max-w-sm animate-fadeIn">
            <h3 className="text-xl font-bold text-purple-400 mb-4">Game Controls</h3>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <div className="px-3 py-2 bg-gray-700 border border-gray-500 rounded font-mono font-bold text-white min-w-fit">
                  W / A / S / D
                </div>
                <span className="text-gray-300">Move</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="px-3 py-2 bg-gray-700 border border-gray-500 rounded font-mono font-bold text-white min-w-fit">
                  Shift
                </div>
                <span className="text-gray-300">Sprint</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="px-3 py-2 bg-gray-700 border border-gray-500 rounded font-mono font-bold text-white min-w-fit">
                  F
                </div>
                <span className="text-gray-300">Interact</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="px-3 py-2 bg-gray-700 border border-gray-500 rounded font-mono font-bold text-white min-w-fit">
                  P
                </div>
                <span className="text-gray-300">Pause</span>
              </div>
            </div>

            {/* Back to Home Button */}
            <Link href="/">
              <button className="w-full px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors duration-300">
                ← Back to Home
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}