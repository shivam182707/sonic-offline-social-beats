
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import { 
  Play, Pause, SkipBack, SkipForward, 
  Volume2, Download, Heart 
} from "lucide-react";

const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [liked, setLiked] = useState(false);
  
  return (
    <div className="border-t bg-card p-2">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex items-center gap-4 w-1/4">
          <div className="relative h-14 w-14 overflow-hidden rounded-md">
            <img
              src="/placeholder.svg"
              alt="Album Cover"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="hidden sm:block">
            <h3 className="text-sm font-medium leading-none">Autumn Leaves</h3>
            <p className="text-xs text-muted-foreground">Chill Lofi Beats</p>
          </div>
        </div>
        
        <div className="flex flex-col items-center justify-center w-2/4">
          <div className="flex items-center justify-center space-x-2 mb-1">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
            >
              <SkipBack className="h-4 w-4" />
              <span className="sr-only">Previous</span>
            </Button>
            <Button
              onClick={() => setIsPlaying(!isPlaying)}
              size="icon"
              className="h-8 w-8 bg-music-primary hover:bg-music-primary/90"
            >
              {isPlaying ? (
                <Pause className="h-4 w-4" />
              ) : (
                <Play className="h-4 w-4" />
              )}
              <span className="sr-only">
                {isPlaying ? "Pause" : "Play"}
              </span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
            >
              <SkipForward className="h-4 w-4" />
              <span className="sr-only">Next</span>
            </Button>
          </div>
          <div className="flex w-full max-w-md items-center space-x-2">
            <span className="text-xs text-muted-foreground w-9 text-right">1:21</span>
            <Slider
              defaultValue={[33]}
              max={100}
              step={1}
              className="w-full"
            />
            <span className="text-xs text-muted-foreground w-9">4:05</span>
          </div>
        </div>
        
        <div className="flex items-center justify-end gap-4 w-1/4">
          <div className="flex items-center">
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8"
              onClick={() => setLiked(!liked)}
            >
              <Heart 
                className={cn("h-4 w-4", liked && "fill-red-500 text-red-500")} 
              />
              <span className="sr-only">Like</span>
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Download className="h-4 w-4" />
              <span className="sr-only">Download</span>
            </Button>
          </div>
          <Separator orientation="vertical" className="mx-2 h-6" />
          <div className="flex items-center space-x-2 min-w-[100px]">
            <Volume2 className="h-4 w-4" />
            <Slider
              defaultValue={[70]}
              max={100}
              step={1}
              className="w-20"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;

// Utility function from @/lib/utils
function cn(...inputs) {
  return inputs.filter(Boolean).join(" ");
}
