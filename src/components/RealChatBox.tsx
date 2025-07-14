import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, Send, X, Users, Circle, Minimize2, Maximize2 } from 'lucide-react';

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
  const [isMinimized, setIsMinimized] = useState(false);
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
  const chatContainerRef = useRef<HTMLDivElement>(null);

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

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setIsMinimized(false);
  };

  return (
    <>
      {/* Chat Toggle Button - Positioned on right side, scrollable */}
      <div className="fixed bottom-4 right-4 z-40 md:bottom-6 md:right-6">
        <button
          onClick={toggleChat}
          className="relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white p-3 md:p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110"
          aria-label="Toggle chat"
        >
          {isOpen ? <X size={20} className="md:w-6 md:h-6" /> : <MessageCircle size={20} className="md:w-6 md:h-6" />}
          {!isOpen && (
            <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 md:w-6 md:h-6 flex items-center justify-center animate-pulse">
              {onlineUsers.filter(u => u.status === 'online').length}
            </div>
          )}
        </button>
      </div>

      {/* Chat Window - Mobile Responsive */}
      {isOpen && (
        <div 
          ref={chatContainerRef}
          className={`fixed z-50 transition-all duration-300 ease-in-out
            ${isMinimized ? 'bottom-20 right-4 w-80 h-12' : 
              'bottom-20 right-4 w-[calc(100vw-2rem)] max-w-sm h-[70vh] max-h-[500px]'} 
            md:bottom-24 md:right-6 md:w-96 md:h-[500px]
            bg-slate-900 border border-slate-700 rounded-xl shadow-2xl overflow-hidden flex flex-col`}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 md:p-4 flex-shrink-0">
            <div className="flex items-center justify-between">
              <div className="flex-1 min-w-0">
                <h3 className="font-bold flex items-center text-sm md:text-base">
                  <Users className="w-4 h-4 md:w-5 md:h-5 mr-2 flex-shrink-0" />
                  <span className="truncate">Whale Chat</span>
                </h3>
                {!isMinimized && (
                  <p className="text-xs opacity-90 truncate">
                    {onlineUsers.filter(u => u.status === 'online').length} traders online
                  </p>
                )}
              </div>
              <div className="flex items-center space-x-2 ml-2">
                <div className="flex items-center space-x-1">
                  <Circle className="w-2 h-2 fill-green-400 text-green-400" />
                  <span className="text-xs hidden sm:inline">Live</span>
                </div>
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-1 hover:bg-white/20 rounded transition-colors"
                  aria-label={isMinimized ? "Maximize chat" : "Minimize chat"}
                >
                  {isMinimized ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
                </button>
                <button
                  onClick={toggleChat}
                  className="p-1 hover:bg-white/20 rounded transition-colors"
                  aria-label="Close chat"
                >
                  <X size={16} />
                </button>
              </div>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Online Users Bar */}
              <div className="bg-slate-800 border-b border-slate-700 p-2 flex-shrink-0">
                <div className="flex items-center space-x-2 overflow-x-auto scrollbar-hide">
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
              <div className="flex-1 overflow-y-auto p-2 md:p-3 space-y-2 md:space-y-3 bg-slate-900 min-h-0">
                {messages.map((message) => (
                  <div key={message.id} className="flex items-start space-x-2">
                    <span className="text-base md:text-lg flex-shrink-0">{message.avatar}</span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className={`text-xs md:text-sm font-semibold truncate ${message.userColor}`}>
                          {message.user}
                        </span>
                        <span className="text-xs text-slate-500 flex-shrink-0">
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </div>
                      <p className="text-xs md:text-sm text-slate-200 break-words leading-relaxed">{message.text}</p>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="p-2 md:p-3 border-t border-slate-700 bg-slate-800 flex-shrink-0">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Share your whale insights..."
                    className="flex-1 bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 placeholder:text-slate-400"
                    maxLength={200}
                  />
                  <button
                    onClick={sendMessage}
                    disabled={!inputText.trim()}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-slate-600 disabled:to-slate-600 text-white p-2 rounded-lg transition-all duration-200 flex-shrink-0"
                    aria-label="Send message"
                  >
                    <Send size={16} />
                  </button>
                </div>
                <div className="text-xs text-slate-500 mt-1 text-center">
                  Connect with real traders • Share insights • Stay updated
                </div>
              </div>
            </>
          )}
        </div>
      )}

      {/* Custom scrollbar styles */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;  /* Internet Explorer 10+ */
          scrollbar-width: none;  /* Firefox */
        }
        .scrollbar-hide::-webkit-scrollbar { 
          display: none;  /* Safari and Chrome */
        }
      `}</style>
    </>
  );
};

export default RealChatBox;