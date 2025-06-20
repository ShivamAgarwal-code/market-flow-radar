
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import LoginModal from '../components/LoginModal';
import RedirectionLogic from '../components/RedirectionLogic';
import { BookOpen, Play, Users, Clock, Star, Lock } from 'lucide-react';

const Education = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const courses = [
    {
      title: "Whale Trading Fundamentals",
      description: "Learn to identify and follow institutional whale movements",
      duration: "2.5 hours",
      level: "Beginner",
      rating: 4.8,
      students: 1247,
      isPremium: false
    },
    {
      title: "Options Flow Analysis",
      description: "Master the art of reading unusual options activity",
      duration: "3.2 hours",
      level: "Intermediate",
      rating: 4.9,
      students: 892,
      isPremium: true
    },
    {
      title: "Dark Pool Detection",
      description: "Advanced techniques for tracking hidden institutional orders",
      duration: "4.1 hours",
      level: "Advanced",
      rating: 4.7,
      students: 534,
      isPremium: true
    },
    {
      title: "Risk Management Strategies",
      description: "Protect your capital with proven risk management techniques",
      duration: "2.8 hours",
      level: "Intermediate",
      rating: 4.6,
      students: 1156,
      isPremium: false
    }
  ];

  const webinars = [
    {
      title: "Market Analysis: Week Ahead",
      host: "Sarah Chen, Senior Analyst",
      date: "Tomorrow, 2:00 PM EST",
      attendees: 347,
      isLive: false
    },
    {
      title: "Live Trading: Whale Spotting",
      host: "Michael Ross, Head Trader",
      date: "Today, 4:00 PM EST",
      attendees: 892,
      isLive: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <RedirectionLogic />
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-100 mb-2">Trading Education</h1>
          <p className="text-slate-400">Master whale trading with expert-led courses and live sessions</p>
        </div>

        {/* Learning Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="trading-card p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Courses</h3>
              <BookOpen className="w-6 h-6 text-blue-400" />
            </div>
            <div className="text-2xl md:text-3xl font-bold text-white">47</div>
            <div className="text-sm text-slate-400 mt-2">Available</div>
          </div>

          <div className="trading-card p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Students</h3>
              <Users className="w-6 h-6 text-green-400" />
            </div>
            <div className="text-2xl md:text-3xl font-bold text-white">12.4K</div>
            <div className="text-sm text-slate-400 mt-2">Active learners</div>
          </div>

          <div className="trading-card p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Hours</h3>
              <Clock className="w-6 h-6 text-purple-400" />
            </div>
            <div className="text-2xl md:text-3xl font-bold text-white">156</div>
            <div className="text-sm text-slate-400 mt-2">Content</div>
          </div>

          <div className="trading-card p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Rating</h3>
              <Star className="w-6 h-6 text-yellow-400" />
            </div>
            <div className="text-2xl md:text-3xl font-bold text-white">4.8</div>
            <div className="text-sm text-slate-400 mt-2">Average</div>
          </div>
        </div>

        {/* Featured Courses */}
        <div className="trading-card p-6 mb-8">
          <h3 className="text-xl font-semibold text-white mb-6">Featured Courses</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {courses.map((course, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-800/70 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${
                        course.level === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                        course.level === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {course.level}
                      </span>
                      {course.isPremium && (
                        <span className="px-2 py-1 rounded text-xs font-semibold bg-purple-500/20 text-purple-400">
                          Premium
                        </span>
                      )}
                    </div>
                    <h4 className="text-white font-semibold text-lg mb-2">{course.title}</h4>
                    <p className="text-slate-300 text-sm mb-4">{course.description}</p>
                  </div>
                  {course.isPremium && <Lock className="w-5 h-5 text-slate-500 ml-4" />}
                </div>
                
                <div className="flex items-center justify-between text-sm text-slate-400 mb-4">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {course.duration}
                    </span>
                    <span className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {course.students.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    <span className="text-yellow-400">{course.rating}</span>
                  </div>
                </div>
                
                <button 
                  onClick={() => course.isPremium ? setShowLoginModal(true) : setShowLoginModal(true)}
                  className={`w-full py-2 rounded-lg font-semibold transition-colors ${
                    course.isPremium 
                      ? 'bg-purple-600 hover:bg-purple-700 text-white' 
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
                >
                  <Play className="w-4 h-4 mr-2 inline" />
                  {course.isPremium ? 'Get Premium Access' : 'Start Learning'}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Live Webinars */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="trading-card p-6">
            <h3 className="text-xl font-semibold text-white mb-6">Upcoming Webinars</h3>
            <div className="space-y-4">
              {webinars.map((webinar, index) => (
                <div key={index} className="p-4 bg-slate-800/50 rounded-lg">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        {webinar.isLive && (
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse mr-2"></div>
                            <span className="text-red-400 text-xs font-semibold">LIVE</span>
                          </div>
                        )}
                      </div>
                      <h4 className="text-white font-semibold mb-1">{webinar.title}</h4>
                      <p className="text-slate-400 text-sm mb-2">{webinar.host}</p>
                      <p className="text-slate-300 text-sm">{webinar.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 text-sm">
                      <Users className="w-4 h-4 inline mr-1" />
                      {webinar.attendees} registered
                    </span>
                    <button 
                      onClick={() => setShowLoginModal(true)}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded text-sm font-semibold"
                    >
                      {webinar.isLive ? 'Join Now' : 'Register'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="trading-card p-6">
            <h3 className="text-xl font-semibold text-white mb-6">Learning Paths</h3>
            <div className="space-y-4">
              <button 
                onClick={() => setShowLoginModal(true)}
                className="w-full p-4 bg-slate-800/50 rounded-lg hover:bg-slate-800/70 transition-colors text-left"
              >
                <h4 className="text-white font-semibold mb-2">Beginner Trader</h4>
                <p className="text-slate-400 text-sm mb-3">Start your trading journey with fundamental concepts</p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-400 text-sm">6 Courses</span>
                  <span className="text-green-400 text-sm">Free</span>
                </div>
              </button>
              
              <button 
                onClick={() => setShowLoginModal(true)}
                className="w-full p-4 bg-slate-800/50 rounded-lg hover:bg-slate-800/70 transition-colors text-left"
              >
                <h4 className="text-white font-semibold mb-2">Whale Tracker Pro</h4>
                <p className="text-slate-400 text-sm mb-3">Master institutional tracking and dark pool analysis</p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-400 text-sm">12 Courses</span>
                  <span className="text-purple-400 text-sm">Premium</span>
                </div>
              </button>
              
              <button 
                onClick={() => setShowLoginModal(true)}
                className="w-full p-4 bg-slate-800/50 rounded-lg hover:bg-slate-800/70 transition-colors text-left"
              >
                <h4 className="text-white font-semibold mb-2">Options Master</h4>
                <p className="text-slate-400 text-sm mb-3">Advanced options strategies and flow analysis</p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-400 text-sm">8 Courses</span>
                  <span className="text-purple-400 text-sm">Premium</span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="trading-card p-8 text-center">
          <BookOpen className="w-16 h-16 text-indigo-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-4">Start Your Trading Education</h2>
          <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
            Join thousands of traders who have improved their skills with our comprehensive education platform. 
            Get access to expert-led courses, live webinars, and exclusive trading insights.
          </p>
          <button 
            onClick={() => setShowLoginModal(true)}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold"
          >
            Start Learning Today
          </button>
        </div>
      </main>

      <LoginModal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} />
    </div>
  );
};

export default Education;
