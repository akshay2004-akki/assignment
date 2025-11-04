const RecordCard = ({ cover, title, artist }) => (
  <div className="card-hover bg-zinc-900 rounded-2xl overflow-hidden group relative">
    <img
      src={cover}
      alt={title}
      className="w-full h-64 object-cover opacity-80 group-hover:opacity-100 transition-all"
    />
    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-90"></div>
    <div className="absolute bottom-4 left-4">
      <h3 className="text-lg font-bold tracking-wide">{title}</h3>
      <p className="text-pink-400 text-sm">{artist}</p>
    </div>
  </div>
);

export default RecordCard;
