import Link from "next/link";

export default function GameRules() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white font-sans py-16 px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back button */}
        <div className="mb-8">
          <Link href="/">
            <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors duration-300 flex items-center gap-2">
              <span>←</span> Back to Home
            </button>
          </Link>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent text-center">
          Game Rules & Riddle Hints
        </h1>

        {/* Game Manual */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-purple-400">Game Manual</h2>
          <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 space-y-6 text-gray-300">
            <div>
              <p className="text-lg text-white">Welcome.</p>
              <p>In the darkness, rules matter more than courage.</p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-bold text-white">Basic Controls</h3>
              <div className="grid gap-2 text-sm md:text-base">
                <p><span className="font-semibold text-white">W / A / S / D</span> — Move</p>
                <p><span className="font-semibold text-white">Shift (Hold)</span> — Sprint</p>
                <p className="text-gray-400 text-sm">A yellow stamina bar is shown in the top-right corner. When stamina runs out, you can no longer sprint.</p>
                <p><span className="font-semibold text-white">F</span> — Interact. When you look at an interactable object, an “F” prompt will appear. Press F to interact.</p>
                <p><span className="font-semibold text-white">P</span> — Pause the game</p>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-bold text-white">Three Important Rules</h3>
              <ol className="list-decimal list-inside space-y-3">
                <li>
                  <span className="font-semibold text-white">Rule 1: The Stone Tablet</span><br />
                  The direction the stone tablet is facing is the answer. Do not trust words alone. Direction is the truth.
                </li>
                <li>
                  <span className="font-semibold text-white">Rule 2: The Starting Room</span><br />
                  In the very first room, do not leave anything behind. Some things will not wait for you to come back.
                </li>
                <li>
                  <span className="font-semibold text-white">Rule 3: The Green-Glowing Object</span><br />
                  When you obtain an object that emits a green glow, remember this phrase: “'E'liminate the darkness, 'G'et rid of it if not needed.”
                </li>
              </ol>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}