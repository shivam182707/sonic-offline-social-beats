
import { ReactNode, useState } from "react";
import Sidebar from "../navigation/Sidebar";
import Header from "../navigation/Header";
import Player from "../music/Player";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen flex-col bg-background">
      <div className="flex flex-1 overflow-hidden">
        <Sidebar isOpen={sidebarOpen} />
        <div className="flex flex-1 flex-col overflow-hidden">
          <Header>
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden mr-2" 
              onClick={toggleSidebar}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </Header>
          <main className="flex-1 overflow-auto p-4 md:p-6">
            {children}
          </main>
        </div>
      </div>
      <Player />
    </div>
  );
};

export default MainLayout;
