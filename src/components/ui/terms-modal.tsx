'use client';

import { useState, useEffect } from 'react';
import { termsContent } from '@/lib/terms-content';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAccept: () => void;
}

const TermsModal: React.FC<TermsModalProps> = ({ isOpen, onClose, onAccept }) => {
  const [accepted, setAccepted] = useState(false);
  const [scrolledToBottom, setScrolledToBottom] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    if (scrollHeight - scrollTop <= clientHeight + 1) {
      setScrolledToBottom(true);
    }
  };

  const handleAccept = () => {
    if (accepted && scrolledToBottom) {
      onAccept();
      onClose();
    }
  };

  if (!isOpen) return null;

  const sections = termsContent.split('\n\n').map(section => section.trim()).filter(Boolean);

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg w-full max-w-4xl h-[90vh] flex flex-col shadow-xl">
        <div className="shrink-0 p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-primary">Terms & Conditions</h2>
        </div>

        <div className="grow min-h-0 relative">
          <div 
            className="absolute inset-0 overflow-y-auto px-6 py-4"
            onScroll={handleScroll}
          >
            <div className="space-y-6">
              {sections.map((section, index) => {
                if (section === 'Terms & Conditions') return null;

                if (section === 'INTERPRETATION' || section.match(/^[0-9]+\.\s[A-Z\s]+/)) {
                  return (
                    <h3 key={index} className="text-lg font-semibold text-primary mt-8">
                      {section}
                    </h3>
                  );
                }

                if (section.match(/^[0-9]+\.[0-9]+/)) {
                  return (
                    <h4 key={index} className="text-base font-semibold text-primary mt-6">
                      {section}
                    </h4>
                  );
                }

                if (section.startsWith('"')) {
                  return (
                    <div key={index} className="pl-4 border-l-2 border-primary/30 py-2 bg-gray-50/50 dark:bg-gray-900/50 rounded-r-lg">
                      <p className="text-gray-700 dark:text-gray-300">{section}</p>
                    </div>
                  );
                }

                return (
                  <p key={index} className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {section}
                  </p>
                );
              })}
            </div>
          </div>

          {!scrolledToBottom && (
            <div className="absolute bottom-0 left-0 right-0 py-4 bg-gradient-to-t from-white dark:from-gray-800 to-transparent pointer-events-none">
              <div className="flex items-center justify-center space-x-2">
                <svg 
                  className="w-5 h-5 text-primary animate-bounce" 
                  fill="none" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Please scroll to read all terms
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="shrink-0 p-6 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 rounded-b-lg">
          <div className="flex flex-col space-y-4">
            <label className="flex items-center space-x-3 select-none">
              <input
                type="checkbox"
                checked={accepted}
                onChange={(e) => setAccepted(e.target.checked)}
                className="w-4 h-4 rounded border-2 border-gray-300 text-primary focus:ring-primary"
              />
              <span className="text-gray-700 dark:text-gray-300">
                I have read and agree to the terms and conditions
              </span>
            </label>
            
            <div className="flex justify-end space-x-4">
              <button
                onClick={onClose}
                className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleAccept}
                disabled={!accepted || !scrolledToBottom}
                className={`px-6 py-2 rounded-md transition-colors ${
                  accepted && scrolledToBottom
                    ? "bg-primary text-white hover:bg-primary/90"
                    : "bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed"
                }`}
              >
                Accept & Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsModal;
