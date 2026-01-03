import Link from "next/link";

export default function StartGame() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white font-sans">
      {/* Back button */}
      <div className="absolute top-8 left-8 z-10">
        <Link href="/">
          <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors duration-300 flex items-center gap-2">
            <span>←</span> Back to Home
          </button>
        </Link>
      </div>

      {/* Game Container */}
      <div className="w-full h-screen">
        <iframe
          src="/webgl-game/index.html"
          className="w-full h-full border-0"
          title="SheepShake Game"
          allowFullScreen
        />
      </div>
    </div>
  );
}