import Image from "next/image";

export default function MoreInfo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white font-sans py-16 px-8">
      <div className="max-w-4xl mx-auto">
        {/* Avatar */}
        <div className="flex justify-center mb-8">
          <Image
            src="/pictures/Shisa.png"
            alt="Shisa"
            width={150}
            height={150}
            className="rounded-full border-4 border-purple-500"
          />
        </div>

        {/* Content */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            About the Developer
          </h1>
          <div className="text-lg leading-relaxed space-y-6 text-gray-300">
            <p>
              This game is developed by independent developer Shisa, whose growth and learning experiences span China, Japan, and Singapore.
            </p>
            <p>
              Graduated with a bachelor's degree from SIM (UOW system) in Singapore, majoring in Game and Mobile Application Development.
            </p>
            <p>
              My creative focus is mainly on Unity game systems, interaction design, and experience-based gameplay driven by atmosphere and rhythm. I care more about whether the structure is clear, whether the mechanics are restrained, and the feelings players have in "unsaid" moments.
            </p>
            <p>
              During development, I also use Blender for partial modeling and scene building to transform ideas more directly into playable forms.
            </p>
            <p>
              This project is both a technical practice and a personal expression—slow, cautious, but as real as possible.
            </p>
            <p>
              Thank you for playing and staying.
            </p>
            <p className="text-xl font-semibold text-white">
              —— Shisa
            </p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="text-center border-t border-gray-700 pt-8">
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <p className="text-gray-400">
            Email: <a href="mailto:zhizuojiahong@gmail.com" className="text-purple-400 hover:text-purple-300">zhizuojiahong@gmail.com</a>
          </p>
          <p className="text-gray-400">
            Phone: 91994680
          </p>
        </div>
      </div>
    </div>
  );
}