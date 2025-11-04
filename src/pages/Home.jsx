import { useEffect, useState } from "react";
import axios from "axios";
import RecordCard from "../components/Recordcard";
import GlowButton from "../components/GlowButton";

const Home = () => {
  const [records, setRecords] = useState([]);
  const [artists, setArtists] = useState([]);
  const [eventPoster, setEventPoster] = useState("");

  useEffect(() => {
    const fetchImages = async () => {
      try {
        // Fetch random images
        const res = await axios.get("https://picsum.photos/v2/list?page=3&limit=12");
        const data = res.data;

        // Map images to record items
        const recordImages = data.slice(0, 4).map((img, index) => ({
          id: index + 1,
          cover: img.download_url,
          title: `Record ${index + 1}`,
          artist: `DJ ${img.author.split(" ")[0] || "Echo"}`,
        }));

        // Map images to artist items
        const artistImages = data.slice(4, 8).map((img, index) => ({
          id: index + 1,
          name: img.author || `Artist ${index + 1}`,
          image: img.download_url,
          genre: ["Techno", "Ambient", "Minimal", "Experimental"][index % 4],
        }));

        // Pick one image for event teaser
        const eventImage = data[9]?.download_url || "https://picsum.photos/id/870/200/300?grayscale&blur=2";

        setRecords(recordImages);
        setArtists(artistImages);
        setEventPoster(eventImage);
      } catch (err) {
        console.error("Error fetching images:", err);
      }
    };

    fetchImages();
  }, []);

  return (
    <section className="min-h-screen bg-black text-white">
      {/* HERO SECTION */}
      <div className="relative h-[70vh] flex flex-col justify-center items-center text-center overflow-hidden">
        <img
          src="https://picsum.photos/id/870/2000/1000?grayscale&blur=2"
          alt="Background Texture"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <h1 className="text-6xl md:text-7xl font-extrabold mb-4 tracking-wide glow z-10">
          ECHO ROOM
        </h1>
        <p className="text-gray-300 text-lg md:text-xl mb-8 z-10">
          Berlin’s underground record space — discover rare vinyl, deep sounds, and live sets.
        </p>
        <GlowButton text="Start Exploring" />
      </div>

      {/* FEATURED RECORDS */}
      <div className="px-8 py-16 border-t border-zinc-800">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold glow">Featured Records</h2>
          <GlowButton text="Explore All" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {records.map((r) => (
            <RecordCard key={r.id} {...r} />
          ))}
        </div>
      </div>

      {/* CURATED ARTISTS */}
      <div className="px-8 py-16 border-t border-zinc-800">
        <h2 className="text-3xl font-bold mb-10 glow">Resident Artists</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {artists.map((artist) => (
            <div
              key={artist.id}
              className="group text-center cursor-pointer transition-all duration-300 hover:scale-105"
            >
              <div className="relative mb-3">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-56 object-cover rounded-xl opacity-80 group-hover:opacity-100 transition-all"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent rounded-xl"></div>
              </div>
              <h3 className="text-lg font-semibold">{artist.name}</h3>
              <p className="text-sm text-pink-400">{artist.genre}</p>
            </div>
          ))}
        </div>
      </div>

      {/* UPCOMING EVENT TEASER */}
      <div className="px-8 py-16 border-t border-zinc-800">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold glow">Next Event</h2>
          <GlowButton text="View All Events" />
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8 bg-zinc-900 p-6 rounded-2xl hover:shadow-[0_0_20px_rgba(255,0,255,0.2)] transition-all duration-300">
          <img
            src={eventPoster}
            alt="Upcoming Event"
            className="w-full lg:w-1/2 h-72 object-cover rounded-xl"
          />
          <div className="flex flex-col justify-between text-left space-y-4">
            <h3 className="text-2xl font-semibold">Echo Sessions: Live at Kreuzberg</h3>
            <p className="text-pink-400 text-sm">Nov 14, 2025 — DJ Soma b2b Anja Keller</p>
            <p className="text-gray-300 text-sm leading-relaxed">
              A night of modular synths, vinyl-only grooves, and pure Berlin techno energy.
            </p>
            <GlowButton text="RSVP Now" />
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="py-10 border-t border-zinc-800 text-center text-gray-500 text-sm">
        © 2025 Echo Room — Curated in Kreuzberg, Berlin
      </footer>
    </section>
  );
};

export default Home;
