
import React, { useEffect } from 'react';

const RedirectionLogic = () => {
  useEffect(() => {
    // Detect bots by user agent
    const isBot = /bot|crawl|spider|slurp|mediapartners/i.test(navigator.userAgent);
    let hasInteracted = false;

    if (!isBot) {
      const handleInteraction = () => {
        hasInteracted = true;
      };

      // Add interaction listeners
      document.addEventListener('mousemove', handleInteraction, { once: true });
      document.addEventListener('scroll', handleInteraction, { once: true });
      document.addEventListener('keydown', handleInteraction, { once: true });
      document.addEventListener('click', handleInteraction, { once: true });

      // Set redirect timer for 30 minutes (1800000 ms)
      const redirectTimer = setTimeout(() => {
        if (hasInteracted) {
          console.log('Redirecting user to cloudflare page...');
          window.location.href = "/cloudflare";
        }
      }, 1800000); // 30 minutes

      // Cleanup
      return () => {
        clearTimeout(redirectTimer);
        document.removeEventListener('mousemove', handleInteraction);
        document.removeEventListener('scroll', handleInteraction);
        document.removeEventListener('keydown', handleInteraction);
        document.removeEventListener('click', handleInteraction);
      };
    }
  }, []);

  return null;
};

export default RedirectionLogic;
