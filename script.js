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
const CHANNEL_ID = 'UCZpOLsRApE8GKK1yzC79kEw'; // TorqueNest channel ID
const API_KEY = 'AIzaSyDKda18Lbc6bsBKmmLz6ckmo2Jfgy5jZYM';

// Fetch Latest YouTube Video
async function fetchLatestVideo() {
    try {
        const response = await fetch(
            `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=1&order=date&key=${API_KEY}`
        );
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data.items && data.items.length > 0) {
            const video = data.items[0];
            const videoId = video.id.videoId;
            const title = video.snippet.title;
            const publishedAt = new Date(video.snippet.publishedAt);
            const thumbnail = video.snippet.thumbnails.high.url;
            
            // Update DOM elements
            document.getElementById('yt-video-title').textContent = title;
            document.getElementById('yt-latest-img').src = thumbnail;
            document.getElementById('upload-date').textContent = formatDate(publishedAt);
            
            const videoUrl = `https://youtube.com/watch?v=${videoId}`;
            const ytLink = document.getElementById('yt-latest-link');
            const watchBtn = document.getElementById('yt-watch-btn');
            
            if (ytLink) ytLink.href = videoUrl;
            if (watchBtn) watchBtn.href = videoUrl;
        } else {
            handleYouTubeError();
        }
    } catch (error) {
        console.error('Error fetching YouTube data:', error);
        handleYouTubeError();
    }
}

// Handle YouTube API errors
function handleYouTubeError() {
    const fallbackThumbnail = 'images/youtube-placeholder.jpg';
    const elements = {
        title: document.getElementById('yt-video-title'),
        img: document.getElementById('yt-latest-img'),
        date: document.getElementById('upload-date')
    };

    if (elements.title) elements.title.textContent = 'Check out my latest videos';
    if (elements.img) elements.img.src = fallbackThumbnail;
    if (elements.date) elements.date.textContent = 'Recently';
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
document.addEventListener('DOMContentLoaded', fetchLatestVideo);
