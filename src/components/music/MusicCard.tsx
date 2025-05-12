
import { Button } from "@/components/ui/button";
import { Download, Play } from "lucide-react";

interface MusicCardProps {
  title: string;
  artist: string;
  cover: string;
  isDownloaded?: boolean;
}

const MusicCard = ({ title, artist, cover, isDownloaded = false }: MusicCardProps) => {
  return (
    <div className="music-card group">
      <div className="relative aspect-square overflow-hidden rounded-md mb-3">
        <img 
          src={cover} 
          alt={`${title} by ${artist}`} 
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
          <Button size="icon" className="h-12 w-12 rounded-full bg-music-primary hover:bg-music-primary/90">
            <Play className="h-6 w-6 text-white" />
          </Button>
        </div>
        {isDownloaded && (
          <div className="absolute top-2 right-2 bg-music-primary/90 text-white p-1 rounded-md">
            <Download className="h-4 w-4" />
          </div>
        )}
      </div>
      <h3 className="font-medium truncate">{title}</h3>
      <p className="text-sm text-muted-foreground truncate">{artist}</p>
    </div>
  );
};

export default MusicCard;
