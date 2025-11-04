const GlowButton = ({ text }) => (
  <button className="relative px-6 py-2 text-white bg-transparent border border-pink-500 rounded-full overflow-hidden group hover:text-pink-400">
    <span className="absolute inset-0 bg-pink-500 opacity-10 group-hover:opacity-20 transition-all"></span>
    {text}
  </button>
);

export default GlowButton;
