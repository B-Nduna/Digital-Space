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

// YouTube API Configuration
const API_KEY = 'AIzaSyDKda18Lbc6bsBKmmLz6ckmo2Jfgy5jZYM';
const CHANNEL_ID = 'UCZpOLsRApE8GKK1yzC79kEw';

// Fetch YouTube Data
function fetchYouTubeData() {
    const url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet&order=date&maxResults=1&type=video`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.items && data.items.length > 0) {
                const video = data.items[0];
                const snippet = video.snippet;
                const videoId = video.id.videoId;
                
                // Update DOM elements
                document.querySelector('#yt-latest-img').src = snippet.thumbnails.high.url;
                document.querySelector('#yt-video-title').textContent = snippet.title;
                document.querySelector('#yt-latest-link').href = `https://youtube.com/watch?v=${videoId}`;
                document.querySelector('#yt-watch-btn').href = `https://youtube.com/watch?v=${videoId}`;
            }
        })
        .catch(error => console.error('Error:', error));
}

// Call function when page loads
document.addEventListener('DOMContentLoaded', fetchYouTubeData);
