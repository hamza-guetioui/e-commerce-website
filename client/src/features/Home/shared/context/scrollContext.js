"use client"
import React, { createContext, useContext, useRef } from 'react';

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const scrollRef = useRef();

  function handleScroll(scrollTo) {
    if (scrollRef.current) {
      switch (scrollTo) {
        case 'left':
          scrollRef.current.scrollLeft += 400;
          break;

        case 'right':
          scrollRef.current.scrollLeft -= 400;
          break;

        default:
          break;
      }
    }
  }

  const contextValue = { scrollRef, handleScroll };

  return (
    <ScrollContext.Provider value={contextValue}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error('useScroll must be used within a ScrollProvider');
  }
  return context;
};