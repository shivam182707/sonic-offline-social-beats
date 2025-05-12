
import MainLayout from "@/components/layouts/MainLayout";
import ChatInterface from "@/components/social/ChatInterface";

const Chat = () => {
  return (
    <MainLayout>
      <div className="h-[calc(100vh-14rem)]">
        <ChatInterface />
      </div>
    </MainLayout>
  );
};

export default Chat;
