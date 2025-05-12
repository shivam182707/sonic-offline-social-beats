
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

interface PlaylistCardProps {
  title: string;
  description: string;
  cover: string;
  songCount: number;
}

const PlaylistCard = ({ title, description, cover, songCount }: PlaylistCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-md bg-card p-4 transition-all hover:shadow-md">
      <div className="flex gap-4">
        <div className="h-32 w-32 flex-shrink-0 overflow-hidden rounded-md">
          <img 
            src={cover} 
            alt={title} 
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="font-semibold text-lg">{title}</h3>
            <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
            <p className="text-sm mt-2">{songCount} songs</p>
          </div>
          <div className="opacity-0 group-hover:opacity-100 transition-opacity">
            <Button size="sm" className="bg-music-primary hover:bg-music-primary/90">
              <Play className="h-4 w-4 mr-2" />
              Play
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaylistCard;
