import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import GlowButton from "../components/GlowButton";

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const res = await axios.get("https://picsum.photos/v2/list?page=2&limit=30");
        const images = res.data.slice(0, 12).map((img, index) => ({
          id: index + 1,
          poster: img.download_url,
          title: `Event ${index + 1}`,
          date: `Dec ${10 + index}, 2025`,
          dj: `DJ ${img.author.split(" ")[0]} / ${img.author.split(" ")[1] || "Guest"}`,
          description:
            "Experience modular synths, immersive visuals, and Berlin’s deep techno spirit in this one-of-a-kind night at Echo Room.",
          venue: "Echo Room, Oranienstraße 67, Berlin",
        }));

        const selectedEvent = images.find((e) => e.id === parseInt(id));
        setEvent(selectedEvent);
      } catch (err) {
        console.error("Error fetching event:", err);
      }
    };

    fetchEvent();
  }, [id]);

  if (!event) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-black text-white">
        <h2 className="text-3xl mb-4">Loading...</h2>
        <Link to="/events" className="text-pink-400 hover:text-pink-300 underline">
          Back to Events
        </Link>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-black text-white px-6 md:px-16 py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Poster */}
        <div className="relative group">
          <img
            src={event.poster}
            alt={event.title}
            className="rounded-2xl shadow-lg w-full h-[450px] object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent rounded-2xl"></div>
        </div>

        {/* Details */}
        <div>
          <h1 className="text-4xl font-bold mb-3 glow">{event.title}</h1>
          <p className="text-pink-400 text-sm mb-1 tracking-wide uppercase">{event.date}</p>
          <p className="text-gray-400 text-sm mb-6">{event.dj}</p>

          <p className="text-gray-300 leading-relaxed mb-8">{event.description}</p>

          <div className="flex flex-col gap-4">
            <div>
              <p className="text-sm text-gray-500">Venue</p>
              <p className="text-gray-300">{event.venue}</p>
            </div>

            <GlowButton text="RSVP / Get Tickets" />
          </div>

          <div className="mt-10">
            <Link
              to="/events"
              className="text-gray-400 hover:text-pink-400 underline text-sm"
            >
              ← Back to Events
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
