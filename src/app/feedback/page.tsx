import Link from "next/link";

export default function Feedback() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white font-sans">
      <main className="flex min-h-screen w-full max-w-3xl mx-auto flex-col items-center justify-center px-8 py-16">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center gap-8 text-center">
          {/* Title */}
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            Feedback Corner 💬
          </h1>

          {/* Main content card */}
          <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 max-w-2xl">
            <div className="mb-6 text-6xl">🤔</div>
            
            <h2 className="text-2xl font-semibold text-white mb-4">
              So... About That Feedback Form
            </h2>
            
            <div className="text-gray-300 text-lg leading-relaxed space-y-4">
              <p>
                Yeah, I totally <em>planned</em> to put a proper feedback form here. You know, 
                with fancy text boxes, submit buttons, the whole shebang.
              </p>
              
              <p>
                But then I realized something... <span className="text-yellow-400 font-semibold">I'm too lazy to implement spam protection</span>. 
                🙃
              </p>
              
              <p>
                Without proper verification, someone could just sit there spamming "BEANS" 
                a thousand times, and honestly? I'd deserve it for not thinking ahead.
              </p>
              
              <div className="mt-8 p-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl">
                <p className="text-xl font-bold mb-2">
                  So here's the deal:
                </p>
                <p className="text-lg">
                  Got feedback, bugs, or just wanna chat about sheep-shaking mechanics?
                </p>
                <p className="text-2xl font-bold mt-4">
                  Hit me up on Telegram! 📱
                </p>
                <a 
                  href="https://t.me/ShisaFuj" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-6 py-3 bg-white text-purple-600 font-bold text-lg rounded-full hover:bg-gray-100 transform hover:scale-105 transition-all duration-300"
                >
                  @ShisaFuj
                </a>
              </div>
              
              <p className="text-sm text-gray-400 mt-6">
                (I promise I'm more organized on Telegram than I am at implementing web forms)
              </p>
            </div>
          </div>

          {/* Back button */}
          <Link href="/">
            <button className="mt-8 px-8 py-3 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-bold text-lg rounded-full shadow-lg transform hover:scale-105 transition-all duration-300">
              ← Back to Home
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
