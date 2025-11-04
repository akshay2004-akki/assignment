import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await axios.get("https://picsum.photos/v2/list?page=2&limit=30");
        const images = res.data.slice(0, 12).map((img, index) => ({
          id: index + 1,
          poster: img.download_url,
          title: `Event ${index + 1}`,
          date: `Dec ${10 + index}, 2025`,
          dj: `DJ ${img.author.split(" ")[0]} / ${img.author.split(" ")[1] || "Guest"}`,
          description:
            "Immerse yourself in Berlin’s underground scene — modular synths, deep bass, and minimal atmospheres.",
        }));
        setEvents(images);
      } catch (err) {
        console.error("Error fetching images:", err);
      }
    };

    fetchImages();
  }, []);

  if (!events) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-black text-white">
        <h2 className="text-3xl mb-4">Loading...</h2>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-black px-6 py-16">
      <h2 className="text-3xl font-bold mb-10 glow">Upcoming Events</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event) => (
          <Link
            key={event.id}
            to={`/events/${event.id}`}
            className="bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-pink-500/30 transition-all duration-300 group"
          >
            <div className="relative">
              <img
                src={event.poster}
                alt={event.title}
                className="w-full h-52 object-cover opacity-90 group-hover:opacity-100 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent opacity-60 group-hover:opacity-80 transition-all rounded-xl"></div>
            </div>

            <div className="p-4">
              <h3 className="text-lg font-semibold mb-1 group-hover:text-pink-400 transition-all">
                {event.title}
              </h3>
              <p className="text-pink-400 text-xs mb-1">{event.date}</p>
              <p className="text-gray-400 text-xs mb-3">{event.dj}</p>
              <p className="text-gray-300 text-xs leading-snug mb-4 line-clamp-3">
                {event.description}
              </p>
              <span className="text-xs text-pink-400 hover:text-pink-300 underline tracking-wide">
                View Details →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Events;
