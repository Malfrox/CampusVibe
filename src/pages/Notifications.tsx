
import React from "react";
import { Bell, CheckCircle, Clock, User } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

// Mock notification data
const NOTIFICATIONS = [
  {
    id: "1",
    type: "message",
    content: "Taylor Smith sent you a message",
    timestamp: "2 minutes ago",
    read: false,
    user: {
      name: "Taylor Smith",
      avatar: "https://i.pravatar.cc/150?img=2",
    },
  },
  {
    id: "2",
    type: "comment",
    content: "Morgan Lee commented on your post",
    timestamp: "1 hour ago",
    read: false,
    user: {
      name: "Morgan Lee",
      avatar: "https://i.pravatar.cc/150?img=3",
    },
  },
  {
    id: "3",
    type: "like",
    content: "Alex Johnson liked your marketplace listing",
    timestamp: "3 hours ago",
    read: false,
    user: {
      name: "Alex Johnson",
      avatar: "https://i.pravatar.cc/150?img=1",
    },
  },
  {
    id: "4",
    type: "system",
    content: "Your account has been verified. Welcome to CampusVibe!",
    timestamp: "1 day ago",
    read: true,
  },
  {
    id: "5",
    type: "message",
    content: "Jordan Wilson sent you a message about your listing",
    timestamp: "2 days ago",
    read: true,
    user: {
      name: "Jordan Wilson",
      avatar: "https://i.pravatar.cc/150?img=4",
    },
  },
];

const NotificationItem = ({ notification, onMarkAsRead }) => {
  const getIcon = () => {
    switch (notification.type) {
      case "message":
        return <Bell className="h-5 w-5 text-campus-600" />;
      case "comment":
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case "like":
        return <CheckCircle className="h-5 w-5 text-rose-500" />;
      case "system":
        return <Bell className="h-5 w-5 text-blue-500" />;
      default:
        return <Bell className="h-5 w-5" />;
    }
  };

  return (
    <div className={`p-4 ${!notification.read ? "bg-campus-50" : ""}`}>
      <div className="flex gap-3">
        <div className="flex-shrink-0">
          {notification.user ? (
            <Avatar className="h-10 w-10 neubrutalism-sm">
              <img src={notification.user.avatar} alt={notification.user.name} className="object-cover" />
            </Avatar>
          ) : (
            <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center neubrutalism-sm">
              {getIcon()}
            </div>
          )}
        </div>

        <div className="flex-1">
          <p className="text-sm">{notification.content}</p>
          <span className="text-xs text-gray-500">{notification.timestamp}</span>
        </div>

        {!notification.read && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onMarkAsRead(notification.id)}
            className="self-start"
          >
            Mark as read
          </Button>
        )}
      </div>
    </div>
  );
};

const Notifications = () => {
  const [notifications, setNotifications] = React.useState(NOTIFICATIONS);
  const { toast } = useToast();

  const unreadCount = notifications.filter((n) => !n.read).length;

  const handleMarkAsRead = (id) => {
    setNotifications(
      notifications.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
    toast({
      title: "Notification marked as read",
    });
  };

  const handleMarkAllAsRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, read: true })));
    toast({
      title: "All notifications marked as read",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <Navbar />
      <div className="container mx-auto py-6 px-4">
        <div className="neubrutalism bg-white max-w-2xl mx-auto overflow-hidden">
          <div className="p-4 border-b border-black flex justify-between items-center">
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold">Notifications</h1>
              {unreadCount > 0 && (
                <Badge className="neubrutalism-sm bg-campus-600">
                  {unreadCount} new
                </Badge>
              )}
            </div>
            {unreadCount > 0 && (
              <Button
                variant="outline"
                size="sm"
                onClick={handleMarkAllAsRead}
                className="neubrutalism-sm"
              >
                Mark all as read
              </Button>
            )}
          </div>

          <div className="divide-y divide-gray-100 max-h-[70vh] overflow-y-auto">
            {notifications.length > 0 ? (
              notifications.map((notification) => (
                <NotificationItem
                  key={notification.id}
                  notification={notification}
                  onMarkAsRead={handleMarkAsRead}
                />
              ))
            ) : (
              <div className="p-8 text-center text-gray-500">
                <Bell className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                <p>No notifications yet</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
