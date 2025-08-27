
document.getElementById("subscribe-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    // Check if both fields are filled
    if (name && email) {
        let message = `Hello, my name is ${name} and my email address is ${email}. I'd like to stay updated on your projects!`;
        let whatsappUrl = `https://wa.me/27603168301?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, "_blank");

        document.getElementById("subscribe-form").reset();
    } else {
        alert("Please fill in all fields.");
    }
});

window.addEventListener('DOMContentLoaded', () => {
    const apiKey = "AIzaSyDKda18Lbc6bsBKmmLz6ckmo2Jfgy5jZYM";
    const uploadsPlaylistId = "UUSUDHpe2oXAPZ308ednBykg";
  
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${uploadsPlaylistId}&part=snippet&maxResults=1&key=${apiKey}`;
  
    fetch(url)
      .then(res => res.json())
      .then(data => {
        if (!data.items || data.items.length === 0) throw new Error("No videos found");
  
        const video = data.items[0].snippet;
        const videoId = video.resourceId.videoId;
        const title = video.title;
        const thumbnail = video.thumbnails.maxres?.url || video.thumbnails.high.url;
        const link = `https://youtu.be/${videoId}`;
  
        document.getElementById("yt-latest-img").src = thumbnail;
        document.getElementById("yt-latest-link").href = link;
  
        document.getElementById("yt-video-title").textContent = title;
        document.getElementById("yt-watch-btn").href = link;
  
        console.log("✅ Thumbnail, caption, and CTA updated:", { title, thumbnail, link });
      })
      .catch(err => console.error("❌ YouTube API error:", err));
  });
  