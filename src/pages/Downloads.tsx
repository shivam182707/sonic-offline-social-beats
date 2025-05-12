
import MainLayout from "@/components/layouts/MainLayout";
import MusicCard from "@/components/music/MusicCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { WifiOff } from "lucide-react";

const Downloads = () => {
  // Mock downloaded songs data
  const downloadedSongs = [
    { id: 1, title: "Midnight City", artist: "Urban Beat", cover: "/placeholder.svg", isDownloaded: true },
    { id: 2, title: "Rainy Day", artist: "Acoustic Moods", cover: "/placeholder.svg", isDownloaded: true },
    { id: 3, title: "Morning Coffee", artist: "Jazz Trio", cover: "/placeholder.svg", isDownloaded: true },
    { id: 4, title: "City Lights", artist: "Night Drive", cover: "/placeholder.svg", isDownloaded: true },
    { id: 5, title: "Ocean Waves", artist: "Nature Sounds", cover: "/placeholder.svg", isDownloaded: true },
    { id: 6, title: "Starry Night", artist: "Ambient Melodies", cover: "/placeholder.svg", isDownloaded: true },
  ];
  
  // Mock downloaded playlists
  const downloadedPlaylists = [
    { id: 1, title: "Workout Essentials", songs: 12 },
    { id: 2, title: "Road Trip Mix", songs: 20 },
    { id: 3, title: "Focus & Study", songs: 15 },
  ];
  
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Your Downloads</h1>
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <WifiOff className="h-4 w-4" />
            Offline Mode Active
          </Button>
        </div>
        
        <div className="p-4 bg-muted/50 rounded-lg flex items-center justify-between">
          <div>
            <p className="font-medium">Storage: 1.2GB / 4GB Used</p>
            <p className="text-sm text-muted-foreground">42 songs downloaded</p>
          </div>
          <Button className="bg-music-primary hover:bg-music-primary/90">Manage Storage</Button>
        </div>
        
        <Tabs defaultValue="songs" className="w-full">
          <TabsList>
            <TabsTrigger value="songs">Songs</TabsTrigger>
            <TabsTrigger value="playlists">Playlists</TabsTrigger>
          </TabsList>
          <TabsContent value="songs">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4">
              {downloadedSongs.map((song) => (
                <MusicCard 
                  key={song.id} 
                  title={song.title} 
                  artist={song.artist} 
                  cover={song.cover} 
                  isDownloaded={song.isDownloaded} 
                />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="playlists">
            <div className="mt-4">
              {downloadedPlaylists.map((playlist) => (
                <div 
                  key={playlist.id} 
                  className="flex items-center justify-between p-4 rounded-md bg-card mb-2 hover:bg-muted/50"
                >
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 bg-music-primary/20 rounded-md flex items-center justify-center">
                      <WifiOff className="h-6 w-6 text-music-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">{playlist.title}</h3>
                      <p className="text-sm text-muted-foreground">{playlist.songs} songs</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">Play</Button>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default Downloads;
