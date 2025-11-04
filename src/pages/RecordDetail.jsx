import GlowButton from "../components/GlowButton";

const RecordDetails = () => {
  const record = {
    cover: "/covers/record1.jpg",
    title: "Modular Dreams",
    artist: "DJ Soma",
    genre: "Techno / Ambient",
    description:
      "A hypnotic exploration of modular synth textures blending analog warmth and Berlin’s signature underground pulse.",
    tracks: [
      "01. Modular Dreams",
      "02. Phase Shift",
      "03. Voltage Drift",
      "04. Late Sequence",
    ],
  };

  return (
    <section className="min-h-screen bg-black px-8 py-16 text-white">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Album Cover */}
        <div className="relative group">
          <img
            src={record.cover}
            alt={record.title}
            className="rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-pink-500/10 group-hover:bg-pink-500/20 transition-all rounded-2xl"></div>
        </div>

        {/* Album Info */}
        <div>
          <h1 className="text-4xl font-bold mb-2 glow">{record.title}</h1>
          <p className="text-pink-400 mb-4">{record.artist}</p>
          <p className="text-gray-400 text-sm mb-6">{record.genre}</p>
          <p className="text-gray-300 mb-8 leading-relaxed">
            {record.description}
          </p>

          <GlowButton text="Play Vinyl Preview" />

          <div className="mt-10">
            <h3 className="text-lg font-semibold mb-3">Tracklist</h3>
            <ul className="space-y-2 text-gray-400">
              {record.tracks.map((track, i) => (
                <li key={i} className="hover:text-pink-400 cursor-default">
                  {track}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecordDetails;
