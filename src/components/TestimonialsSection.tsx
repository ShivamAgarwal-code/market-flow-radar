
import React, { useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';
import { useTranslation } from '../contexts/TranslationContext';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  content: string;
  verified: boolean;
}

const TestimonialsSection = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Michael Chen',
      role: 'Senior Portfolio Manager',
      company: 'Goldman Sachs',
      avatar: '👨‍💼',
      rating: 5,
      content: 'Whale Signal has revolutionized how we track institutional flows. The real-time alerts have helped us capture several multi-million dollar opportunities this quarter.',
      verified: true
    },
    {
      id: '2',
      name: 'Sarah Rodriguez',
      role: 'Quantitative Trader',
      company: 'Citadel',
      avatar: '👩‍💻',
      rating: 5,
      content: 'The dark pool tracking feature is unmatched. We\'ve increased our alpha generation by 23% since implementing Whale Signal into our trading strategy.',
      verified: true
    },
    {
      id: '3',
      name: 'James Park',
      role: 'Head of Trading',
      company: 'Two Sigma',
      avatar: '👨‍💼',
      rating: 5,
      content: 'Best options flow platform I\'ve used in 15 years of trading. The institutional-grade data quality is exactly what professional traders need.',
      verified: true
    },
    {
      id: '4',
      name: 'Emily Watson',
      role: 'Risk Manager',
      company: 'Bridgewater',
      avatar: '👩‍💼',
      rating: 5,
      content: 'The whale activity tracking has been instrumental in our risk management. We can now anticipate market movements before they happen.',
      verified: true
    },
    {
      id: '5',
      name: 'David Kim',
      role: 'Derivatives Trader',
      company: 'Jane Street',
      avatar: '👨‍💻',
      rating: 5,
      content: 'Whale Signal\'s real-time alerts have given us a significant edge in the derivatives market. The accuracy is phenomenal.',
      verified: true
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-20 bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Trusted by Top Traders Worldwide
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Join thousands of professional traders who rely on Whale Signal for institutional-grade market intelligence
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="trading-card p-8 fade-in-up">
            <div className="flex items-center justify-center mb-6">
              <Quote className="w-12 h-12 text-blue-400 opacity-50" />
            </div>
            
            <div className="text-center">
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                "{testimonials[currentIndex].content}"
              </p>
              
              <div className="flex items-center justify-center mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <div className="flex items-center justify-center space-x-4">
                <div className="text-4xl">{testimonials[currentIndex].avatar}</div>
                <div className="text-left">
                  <div className="flex items-center space-x-2">
                    <h4 className="text-white font-semibold">{testimonials[currentIndex].name}</h4>
                    {testimonials[currentIndex].verified && (
                      <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    )}
                  </div>
                  <p className="text-slate-400 text-sm">{testimonials[currentIndex].role}</p>
                  <p className="text-blue-400 text-sm font-semibold">{testimonials[currentIndex].company}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-blue-400' : 'bg-slate-600'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">10,000+</div>
            <div className="text-slate-400">Active Traders</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">$2.5B+</div>
            <div className="text-slate-400">Volume Tracked Daily</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">99.9%</div>
            <div className="text-slate-400">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">0.2ms</div>
            <div className="text-slate-400">Average Latency</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
