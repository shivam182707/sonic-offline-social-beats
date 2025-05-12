
import { Search } from "lucide-react";
import { ReactNode } from "react";
import { Input } from "@/components/ui/input";
import UserMenu from "./UserMenu";

interface HeaderProps {
  children?: ReactNode;
}

const Header = ({ children }: HeaderProps) => {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center px-4">
        {children}
        <div className="relative flex-1 max-w-sm mx-4">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search for songs, artists..." 
            className="pl-8 bg-muted/50" 
          />
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <UserMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
