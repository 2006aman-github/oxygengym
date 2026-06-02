'use client';

import { useState, useEffect } from 'react';
import LoadingScreen from './LoadingScreen';
import ThemeToggle from './ThemeToggle';

interface PageWrapperProps {
  children: React.ReactNode;
}

export default function PageWrapper({ children }: PageWrapperProps) {
  const [showLoading, setShowLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check if loading has already been shown in this session
    const hasShownLoading = sessionStorage.getItem('loadingShown');
    
    if (hasShownLoading) {
      setShowLoading(false);
    }
  }, []);

  const handleLoadingComplete = () => {
    setShowLoading(false);
    // sessionStorage.setItem('loadingShown', 'true');
  };

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <>
      {showLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      <ThemeToggle />
      {!showLoading && children}
    </>
  );
}
