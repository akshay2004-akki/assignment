import { Play, SkipBack, SkipForward } from "lucide-react";

const PlayerBar = () => (
  <div className="fixed bottom-0 left-0 right-0 bg-zinc-950/80 backdrop-blur-md border-t border-gray-800 px-6 py-4 flex items-center justify-between">
    <div>
      <h4 className="text-sm font-semibold">Now Playing: Modular Dreams</h4>
      <p className="text-xs text-gray-400">DJ Soma</p>
    </div>
    <div className="flex items-center gap-4">
      <SkipBack className="hover:text-pink-400 cursor-pointer" />
      <Play className="text-pink-400 scale-110 cursor-pointer" />
      <SkipForward className="hover:text-pink-400 cursor-pointer" />
    </div>
  </div>
);

export default PlayerBar;
