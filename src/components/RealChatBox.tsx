import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, Send, X, Users, Circle } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  user: string;
  avatar: string;
  timestamp: Date;
  userColor: string;
}

interface User {
  name: string;
  avatar: string;
  status: 'online' | 'away';
  color: string;
}

const RealChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [onlineUsers] = useState<User[]>([
    { name: 'WhaleTrader93', avatar: '🐋', status: 'online', color: 'text-blue-400' },
    { name: 'OptionsKing', avatar: '👑', status: 'online', color: 'text-purple-400' },
    { name: 'DarkPoolHunter', avatar: '🎯', status: 'online', color: 'text-emerald-400' },
    { name: 'FlowMaster', avatar: '💎', status: 'away', color: 'text-yellow-400' },
    { name: 'AlgoTrader', avatar: '🤖', status: 'online', color: 'text-red-400' },
  ]);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const sampleMessages = [
    { user: 'WhaleTrader93', text: 'Just saw massive NVDA call sweeps!', avatar: '🐋', color: 'text-blue-400' },
    { user: 'OptionsKing', text: 'TSLA 300C volume is insane today', avatar: '👑', color: 'text-purple-400' },
    { user: 'DarkPoolHunter', text: 'Dark pool activity in SPY picking up', avatar: '🎯', color: 'text-emerald-400' },
    { user: 'FlowMaster', text: 'Anyone else seeing this unusual flow in AAPL?', avatar: '💎', color: 'text-yellow-400' },
    { user: 'AlgoTrader', text: 'My algorithm detected whale movement in QQQ', avatar: '🤖', color: 'text-red-400' },
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Add initial messages
      const initialMessages = sampleMessages.map((msg, index) => ({
        id: index.toString(),
        text: msg.text,
        user: msg.user,
        avatar: msg.avatar,
        timestamp: new Date(Date.now() - (sampleMessages.length - index) * 60000),
        userColor: msg.color,
      }));
      setMessages(initialMessages);

      // Simulate new messages
      const interval = setInterval(() => {
        const randomMessage = sampleMessages[Math.floor(Math.random() * sampleMessages.length)];
        const newMessage: Message = {
          id: Date.now().toString(),
          text: randomMessage.text,
          user: randomMessage.user,
          avatar: randomMessage.avatar,
          timestamp: new Date(),
          userColor: randomMessage.color,
        };
        setMessages(prev => [...prev.slice(-20), newMessage]); // Keep only last 20 messages
      }, 8000 + Math.random() * 15000); // Random interval 8-23 seconds

      return () => clearInterval(interval);
    }
  }, [isOpen]);

  const sendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      user: 'You',
      avatar: '👤',
      timestamp: new Date(),
      userColor: 'text-slate-300',
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 z-50 relative"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        {!isOpen && (
          <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
            {onlineUsers.filter(u => u.status === 'online').length}
          </div>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[500px] bg-slate-900 border border-slate-700 rounded-xl shadow-2xl z-50 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  Whale Chat
                </h3>
                <p className="text-xs opacity-90">
                  {onlineUsers.filter(u => u.status === 'online').length} traders online
                </p>
              </div>
              <div className="flex items-center space-x-1">
                <Circle className="w-2 h-2 fill-green-400 text-green-400" />
                <span className="text-xs">Live</span>
              </div>
            </div>
          </div>

          {/* Online Users Bar */}
          <div className="bg-slate-800 border-b border-slate-700 p-2">
            <div className="flex items-center space-x-2 overflow-x-auto">
              {onlineUsers.slice(0, 5).map((user) => (
                <div key={user.name} className="flex items-center space-x-1 min-w-fit">
                  <span className="text-sm">{user.avatar}</span>
                  <div className={`w-2 h-2 rounded-full ${user.status === 'online' ? 'bg-green-400' : 'bg-yellow-400'}`}></div>
                </div>
              ))}
              <span className="text-xs text-slate-400 min-w-fit">+{onlineUsers.length - 5} more</span>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-3 bg-slate-900">
            {messages.map((message) => (
              <div key={message.id} className="flex items-start space-x-2">
                <span className="text-lg flex-shrink-0">{message.avatar}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className={`text-sm font-semibold ${message.userColor}`}>
                      {message.user}
                    </span>
                    <span className="text-xs text-slate-500">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                  <p className="text-sm text-slate-200 break-words">{message.text}</p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-slate-700 bg-slate-800">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Share your whale insights..."
                className="flex-1 bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50"
                maxLength={200}
              />
              <button
                onClick={sendMessage}
                disabled={!inputText.trim()}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-slate-600 disabled:to-slate-600 text-white p-2 rounded-lg transition-all duration-200"
              >
                <Send size={16} />
              </button>
            </div>
            <div className="text-xs text-slate-500 mt-1 text-center">
              Connect with real traders • Share insights • Stay updated
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RealChatBox;