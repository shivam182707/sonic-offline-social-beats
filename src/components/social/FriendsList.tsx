
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const friends = [
  { id: 1, name: "Alex Johnson", online: true, avatar: "/placeholder.svg" },
  { id: 2, name: "Sarah Williams", online: true, avatar: "/placeholder.svg" },
  { id: 3, name: "Marcus Chen", online: false, avatar: "/placeholder.svg" },
  { id: 4, name: "Priya Sharma", online: true, avatar: "/placeholder.svg" },
  { id: 5, name: "Jordan Smith", online: false, avatar: "/placeholder.svg" },
];

const FriendsList = () => {
  return (
    <div className="space-y-2">
      {friends.map((friend) => (
        <div 
          key={friend.id} 
          className="flex items-center gap-2 p-2 rounded-md hover:bg-muted/50 cursor-pointer"
        >
          <div className="relative">
            <Avatar className="h-8 w-8 border border-muted">
              <AvatarImage src={friend.avatar} alt={friend.name} />
              <AvatarFallback>{friend.name.charAt(0)}</AvatarFallback>
            </Avatar>
            {friend.online && (
              <span className="absolute bottom-0 right-0 block h-2 w-2 rounded-full bg-green-500 ring-1 ring-white" />
            )}
          </div>
          <div className="flex flex-col">
            <span className="text-sm leading-none">{friend.name}</span>
            <span className="text-xs text-muted-foreground">
              {friend.online ? 'Online' : 'Offline'}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FriendsList;
