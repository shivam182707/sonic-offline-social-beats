
import MainLayout from "@/components/layouts/MainLayout";
import MusicCard from "@/components/music/MusicCard";
import PlaylistCard from "@/components/music/PlaylistCard";

const Index = () => {
  // Mock data
  const featuredSongs = [
    { id: 1, title: "Summer Vibes", artist: "Chill Masters", cover: "/placeholder.svg" },
    { id: 2, title: "Midnight City", artist: "Urban Beat", cover: "/placeholder.svg", isDownloaded: true },
    { id: 3, title: "Mountain High", artist: "Nature Sounds", cover: "/placeholder.svg" },
    { id: 4, title: "Electric Dreams", artist: "Synth Wave", cover: "/placeholder.svg" },
    { id: 5, title: "Rainy Day", artist: "Acoustic Moods", cover: "/placeholder.svg", isDownloaded: true },
  ];
  
  const playlists = [
    { id: 1, title: "Workout Mix", description: "High energy tracks to power your workout", cover: "/placeholder.svg", songCount: 18 },
    { id: 2, title: "Study Focus", description: "Ambient sounds for maximum concentration", cover: "/placeholder.svg", songCount: 24 },
    { id: 3, title: "Chill Lofi Beats", description: "Relaxing beats for your downtime", cover: "/placeholder.svg", songCount: 32 },
  ];
  
  return (
    <MainLayout>
      <div className="space-y-8">
        <section>
          <div className="rounded-lg mb-8 overflow-hidden">
            <div className="music-gradient relative h-48 md:h-64 flex items-center">
              <div className="absolute inset-0 bg-gradient-to-r from-music-primary to-music-secondary opacity-90"></div>
              <div className="absolute rounded-full w-32 h-32 bg-music-accent/30 -top-10 -right-10 blur-2xl animate-pulse-soft"></div>
              <div className="absolute rounded-full w-40 h-40 bg-music-accent/20 bottom-5 -left-10 blur-2xl animate-pulse-soft"></div>
              <div className="relative px-6 md:px-10 py-8 text-white z-10">
                <h1 className="text-2xl md:text-4xl font-bold mb-2 text-shadow">Welcome to SonicBeats</h1>
                <p className="text-lg md:text-xl mb-4 max-w-2xl text-shadow">
                  Your offline music platform with social features. Download your favorite tracks and stay connected with friends.
                </p>
              </div>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold mb-4">Featured Songs</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {featuredSongs.map((song) => (
              <MusicCard 
                key={song.id} 
                title={song.title} 
                artist={song.artist} 
                cover={song.cover} 
                isDownloaded={song.isDownloaded} 
              />
            ))}
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-4">Popular Playlists</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {playlists.map((playlist) => (
              <PlaylistCard 
                key={playlist.id} 
                title={playlist.title} 
                description={playlist.description} 
                cover={playlist.cover} 
                songCount={playlist.songCount} 
              />
            ))}
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default Index;
