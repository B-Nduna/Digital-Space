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
const CHANNEL_ID = '@TorqueNest'; 

// Fetch Latest YouTube Video
async function fetchLatestVideo() {
    try {
        const response = await fetch(
            `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=1`
        );
        const data = await response.json();
        
        if (data.items && data.items.length > 0) {
            const video = data.items[0];
            updateVideoUI(video);
        }
    } catch (error) {
        console.error('Error fetching YouTube data:', error);
        handleYouTubeError();
    }
}

// Update UI with video data
function updateVideoUI(video) {
    const videoId = video.id.videoId;
    const title = video.snippet.title;
    const publishedAt = new Date(video.snippet.publishedAt);
    const thumbnail = video.snippet.thumbnails.high.url;
    
    document.getElementById('yt-video-title').textContent = title;
    document.getElementById('yt-latest-img').src = thumbnail;
    document.getElementById('upload-date').textContent = formatDate(publishedAt);
    
    const videoUrl = `https://youtube.com/watch?v=${videoId}`;
    document.getElementById('yt-latest-link').href = videoUrl;
    document.getElementById('yt-watch-btn').href = videoUrl;
}

// Handle YouTube API errors
function handleYouTubeError() {
    const fallbackThumbnail = 'images/youtube-placeholder.jpg';
    document.getElementById('yt-video-title').textContent = 'Latest Video';
    document.getElementById('yt-latest-img').src = fallbackThumbnail;
    document.getElementById('upload-date').textContent = 'Recently';
}

// Format date for display
function formatDate(date) {
    const now = new Date();
    const diff = now - date;
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 7) {
        return date.toLocaleDateString('en-GB', { 
            day: 'numeric', 
            month: 'short', 
            year: 'numeric' 
        });
    } else if (days > 0) {
        return `${days} day${days > 1 ? 's' : ''} ago`;
    } else if (hours > 0) {
        return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else if (minutes > 0) {
        return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    }
    return 'Just now';
}

// Smooth scroll functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Contact form handling
document.getElementById("subscribe-form")?.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const name = document.getElementById("name")?.value.trim();
    const email = document.getElementById("email")?.value.trim();

    if (name && email) {
        const message = `Hello, my name is ${name} and my email address is ${email}. I'd like to stay updated on your projects!`;
        const whatsappUrl = `https://wa.me/27603168301?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, "_blank");
        event.target.reset();
    } else {
        alert("Please fill in all fields.");
    }
});

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    fetchLatestVideo();
});
