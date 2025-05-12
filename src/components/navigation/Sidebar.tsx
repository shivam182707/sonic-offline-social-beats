
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Headphones, Users, Music, ListMusic, Download, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import FriendsList from "../social/FriendsList";

interface SidebarProps {
  isOpen?: boolean;
}

const Sidebar = ({ isOpen = true }: SidebarProps) => {
  const navItems = [
    { name: "Discover", icon: Headphones, path: "/" },
    { name: "Your Library", icon: Music, path: "/library" },
    { name: "Playlists", icon: ListMusic, path: "/playlists" },
    { name: "Downloads", icon: Download, path: "/downloads" },
    { name: "Chat", icon: MessageCircle, path: "/chat" },
    { name: "Friends", icon: Users, path: "/friends" },
  ];

  return (
    <div
      className={cn(
        "bg-card border-r flex-shrink-0 h-full flex flex-col transition-all duration-300 overflow-hidden",
        isOpen ? "w-64" : "w-0",
        "md:block"
      )}
    >
      <div className="p-4">
        <Link to="/" className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 rounded-full bg-gradient-music flex items-center justify-center">
            <Headphones className="h-4 w-4 text-white" />
          </div>
          <h1 className="font-bold text-lg text-music-primary">SonicBeats</h1>
        </Link>
        <nav className="space-y-1">
          {navItems.map((item) => (
            <Link key={item.name} to={item.path}>
              <Button
                variant={item.path === "/" ? "default" : "ghost"}
                className="w-full justify-start"
              >
                <item.icon className="mr-2 h-4 w-4" />
                {item.name}
              </Button>
            </Link>
          ))}
        </nav>
      </div>
      
      <Separator className="my-4" />
      
      <div className="flex-1 overflow-auto p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-semibold">Friends Online</h2>
          <Button variant="ghost" size="sm">
            <span className="text-xs">See all</span>
          </Button>
        </div>
        <FriendsList />
      </div>
    </div>
  );
};

export default Sidebar;
