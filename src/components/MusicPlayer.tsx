import { useState, useRef, useEffect } from "react";
import { Music, Volume2, VolumeX, Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";

const MusicPlayer = () => {
  // Load saved state from localStorage
  const [isPlaying, setIsPlaying] = useState(() => {
    const saved = localStorage.getItem("musicPlayerIsPlaying");
    return saved === "true";
  });
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Initialize audio settings and restore playback position
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.2;
      
      // Restore playback position
      const savedTime = localStorage.getItem("musicPlayerCurrentTime");
      if (savedTime) {
        audioRef.current.currentTime = parseFloat(savedTime);
      }
      
      // Restore playing state
      if (isPlaying) {
        audioRef.current.play().catch(() => {
          setIsPlaying(false);
          localStorage.setItem("musicPlayerIsPlaying", "false");
        });
      }
    }
  }, []);

  // Save current time periodically when playing
  useEffect(() => {
    if (!isPlaying || !audioRef.current) return;

    const interval = setInterval(() => {
      if (audioRef.current) {
        localStorage.setItem("musicPlayerCurrentTime", audioRef.current.currentTime.toString());
      }
    }, 1000); // Save every second

    return () => clearInterval(interval);
  }, [isPlaying]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        // Save current time when pausing
        localStorage.setItem("musicPlayerCurrentTime", audioRef.current.currentTime.toString());
        setIsPlaying(false);
        localStorage.setItem("musicPlayerIsPlaying", "false");
      } else {
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
            localStorage.setItem("musicPlayerIsPlaying", "true");
          })
          .catch(() => {
            setIsPlaying(false);
            localStorage.setItem("musicPlayerIsPlaying", "false");
          });
      }
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <>
      {/* Hidden Audio Element */}
      <audio
        ref={audioRef}
        loop
        src="/audio/moonlightdrive.mp3"
      />

      {/* Floating Music Controls */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2">
        {/* Play/Pause Button */}
        <Button
          onClick={togglePlay}
          size="icon"
          className="w-14 h-14 rounded-full shadow-2xl bg-accent hover:bg-accent/90 text-accent-foreground transition-all duration-300 hover:scale-110"
          aria-label={isPlaying ? "Pause music" : "Play music"}
        >
          {isPlaying ? (
            <Pause size={24} className="animate-pulse" />
          ) : (
            <Play size={24} />
          )}
        </Button>


        {/* Music Icon Indicator */}
        {isPlaying && (
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-ping" />
        )}
      </div>
    </>
  );
};

export default MusicPlayer;
