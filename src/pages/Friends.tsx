
import MainLayout from "@/components/layouts/MainLayout";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

// Mock friends data
const allFriends = [
  { id: 1, name: "Alex Johnson", online: true, avatar: "/placeholder.svg", lastSeen: "Active now" },
  { id: 2, name: "Sarah Williams", online: true, avatar: "/placeholder.svg", lastSeen: "Active now" },
  { id: 3, name: "Marcus Chen", online: false, avatar: "/placeholder.svg", lastSeen: "1 hour ago" },
  { id: 4, name: "Priya Sharma", online: true, avatar: "/placeholder.svg", lastSeen: "Active now" },
  { id: 5, name: "Jordan Smith", online: false, avatar: "/placeholder.svg", lastSeen: "2 days ago" },
  { id: 6, name: "Emilia Clarke", online: false, avatar: "/placeholder.svg", lastSeen: "3 hours ago" },
  { id: 7, name: "David Wilson", online: true, avatar: "/placeholder.svg", lastSeen: "Active now" },
  { id: 8, name: "Michael Brown", online: false, avatar: "/placeholder.svg", lastSeen: "Yesterday" },
];

const Friends = () => {
  const onlineFriends = allFriends.filter(friend => friend.online);
  
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Friends</h1>
          <div className="flex gap-2">
            <Button className="bg-music-primary hover:bg-music-primary/90">Add Friend</Button>
          </div>
        </div>
        
        <div className="relative max-w-sm">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search friends..." className="pl-9" />
        </div>
        
        <Tabs defaultValue="all" className="w-full">
          <TabsList>
            <TabsTrigger value="all">All Friends ({allFriends.length})</TabsTrigger>
            <TabsTrigger value="online">Online ({onlineFriends.length})</TabsTrigger>
            <TabsTrigger value="pending">Pending Requests (2)</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {allFriends.map((friend) => (
                <div key={friend.id} className="p-4 rounded-lg bg-card">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={friend.avatar} alt={friend.name} />
                        <AvatarFallback>{friend.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      {friend.online && (
                        <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-green-500 ring-1 ring-white" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">{friend.name}</h3>
                      <p className="text-xs text-muted-foreground">{friend.lastSeen}</p>
                    </div>
                    <Link to="/chat">
                      <Button variant="ghost" size="icon">
                        <MessageCircle className="h-5 w-5" />
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="online" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {onlineFriends.map((friend) => (
                <div key={friend.id} className="p-4 rounded-lg bg-card">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={friend.avatar} alt={friend.name} />
                        <AvatarFallback>{friend.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-green-500 ring-1 ring-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">{friend.name}</h3>
                      <p className="text-xs text-muted-foreground">{friend.lastSeen}</p>
                    </div>
                    <Link to="/chat">
                      <Button variant="ghost" size="icon">
                        <MessageCircle className="h-5 w-5" />
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="pending" className="mt-4">
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-card">
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="/placeholder.svg" alt="New Friend Request" />
                    <AvatarFallback>NF</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-medium">Taylor Rodriguez</h3>
                    <p className="text-xs text-muted-foreground">Sent you a friend request</p>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">Decline</Button>
                    <Button size="sm" className="bg-music-primary hover:bg-music-primary/90">Accept</Button>
                  </div>
                </div>
              </div>
              
              <div className="p-4 rounded-lg bg-card">
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="/placeholder.svg" alt="New Friend Request" />
                    <AvatarFallback>KC</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-medium">Kim Chen</h3>
                    <p className="text-xs text-muted-foreground">Sent you a friend request</p>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">Decline</Button>
                    <Button size="sm" className="bg-music-primary hover:bg-music-primary/90">Accept</Button>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default Friends;
