import GlowButton from "../components/GlowButton";

const About = () => {
  return (
    <section className="min-h-screen bg-black text-white overflow-hidden">
      {/* HERO SECTION */}
      <div className="relative h-[70vh] flex flex-col justify-center items-center text-center">
        <img
          src="https://picsum.photos/id/870/1600/900?grayscale&blur=2"
          alt="Echo Room Background"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="z-10 px-4">
          <h1 className="text-6xl md:text-7xl font-extrabold tracking-wider glow mb-4">
            ABOUT ECHO ROOM
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            The sound of Berlin’s underground — a space where analog meets digital,
            and vinyl culture thrives under neon lights.
          </p>
        </div>
      </div>

      {/* STORY SECTION */}
      <div className="px-8 md:px-20 py-20 border-t border-zinc-800">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 glow">Our Story</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Born in the heart of Kreuzberg, Echo Room started as a small
              basement record shop built by a collective of music lovers,
              sound engineers, and visual artists. What began as a passion
              for analog sound has evolved into a cultural hub for electronic
              exploration — a meeting point for Berlin’s vibrant underground
              scene.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Each corner of Echo Room reflects Berlin’s pulse — minimal design,
              immersive lighting, and deep sonic textures. From rare vinyl finds
              to intimate live sets, the Echo Room experience celebrates both
              nostalgia and innovation.
            </p>
          </div>

          <div className="relative group">
            <img
              src="https://picsum.photos/seed/recordshop/600/400"
              alt="Record Store Interior"
              className="rounded-2xl shadow-lg transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>

      {/* FEATURES SECTION */}
      <div className="px-8 md:px-20 py-20 border-t border-zinc-800 bg-zinc-950">
        <h2 className="text-3xl font-bold mb-12 text-center glow">
          What Makes Echo Room Unique
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto text-center">
          <div className="p-6 bg-zinc-900 rounded-2xl border border-zinc-800 hover:border-pink-400/40 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-3 text-pink-400">Analog Meets Digital</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Experience the warmth of vinyl merged with digital soundscapes.
              Every track is curated for depth, texture, and emotion.
            </p>
          </div>

          <div className="p-6 bg-zinc-900 rounded-2xl border border-zinc-800 hover:border-pink-400/40 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-3 text-pink-400">Intimate DJ Nights</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Join small-scale events featuring Berlin’s finest underground DJs,
              performing vinyl-only sets in a dimly lit, immersive space.
            </p>
          </div>

          <div className="p-6 bg-zinc-900 rounded-2xl border border-zinc-800 hover:border-pink-400/40 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-3 text-pink-400">Cultural Community</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Echo Room connects artists, producers, and fans through workshops,
              listening sessions, and creative collaborations.
            </p>
          </div>
        </div>
      </div>

      {/* VISIT US / CTA SECTION */}
      <div className="px-8 md:px-20 py-20 border-t border-zinc-800 text-center">
        <h2 className="text-4xl font-bold mb-6 glow">Visit Us in Kreuzberg</h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-10">
          Echo Room is more than a record store — it’s an atmosphere.  
          Step inside, flip through rare vinyls, and lose yourself in Berlin’s sonic underground.
        </p>
        <GlowButton text="Plan Your Visit" />
      </div>

      {/* FOOTER */}
      <footer className="py-10 border-t border-zinc-800 text-center text-gray-500 text-sm">
        © 2025 Echo Room — Curated in Kreuzberg, Berlin
      </footer>
    </section>
  );
};

export default About;
