import React, { useEffect, useState } from 'react';
import { AlertCircle } from 'lucide-react';
import useContentStore from '../store/contentStore';

export default function NewsTicker() {
  const newsItems = useContentStore((state) => state.newsItems);
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);

  useEffect(() => {
    if (newsItems.length === 0) return;

    const interval = setInterval(() => {
      setCurrentNewsIndex((prev) => (prev + 1) % newsItems.length);
    }, 5000); // Change news every 5 seconds

    return () => clearInterval(interval);
  }, [newsItems.length]);

  if (newsItems.length === 0) {
    return null;
  }

  const currentNews = newsItems[currentNewsIndex];

  return (
    <div className="bg-yellow-50 border-t border-b border-yellow-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4 py-3 overflow-x-auto">
          <div className="flex items-center gap-2 flex-shrink-0">
            <AlertCircle className="w-5 h-5 text-yellow-600 animate-pulse" />
            <span className="font-bold text-yellow-900 whitespace-nowrap">
              Latest News:
            </span>
          </div>
          <div className="flex-grow">
            <p className="text-yellow-800 text-sm md:text-base animate-pulse">
              {currentNews?.content || 'The latest news or updates related to the activities of NGO will be displayed here.'}
            </p>
          </div>
          <div className="flex gap-1 flex-shrink-0 ml-4">
            {newsItems.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 rounded-full transition-colors ${
                  index === currentNewsIndex ? 'bg-yellow-600' : 'bg-yellow-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
