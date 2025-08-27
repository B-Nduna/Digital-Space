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
const CHANNEL_ID = 'UCZpOLsRApE8GKK1yzC79kEw'; // TorqueNest channel ID

// Fetch Latest YouTube Video
async function fetchLatestVideo() {
    try {
        const response = await fetch(
            `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet&order=date&maxResults=1&type=video`
        );
        
        const data = await response.json();
        
        if (data.items && data.items.length > 0) {
            const video = data.items[0];
            updateVideoUI(video);
        }
    } catch (error) {
        console.error('Error:', error);
        handleYouTubeError();
    }
}

function updateVideoUI(video) {
    const videoId = video.id.videoId;
    const title = video.snippet.title;
    const publishedAt = new Date(video.snippet.publishedAt);
    const thumbnail = video.snippet.thumbnails.maxres?.url || video.snippet.thumbnails.high.url;
    const videoUrl = `https://youtube.com/watch?v=${videoId}`;

    // Update DOM elements
    document.getElementById('yt-video-title').textContent = title;
    document.getElementById('yt-latest-img').src = thumbnail;
    document.getElementById('upload-date').textContent = formatDate(publishedAt);
    document.getElementById('yt-latest-link').href = videoUrl;
    document.getElementById('yt-watch-btn').href = videoUrl;
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

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', fetchLatestVideo);

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    section.classList.add('fade-out');
    observer.observe(section);
});

// Form submission with animation
const form = document.getElementById('subscribe-form');
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const button = form.querySelector('button');
    button.innerHTML = '<span class="spinner"></span>';
    button.disabled = true;

    try {
        const formData = new FormData(form);
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        button.innerHTML = 'Thanks for subscribing!';
        form.reset();
        
        setTimeout(() => {
            button.innerHTML = 'Submit';
        }, 3000);
    } catch (error) {
        alert('There was an error. Please try again later.');
        console.error('Error:', error);
    } finally {
        button.disabled = false;
        button.innerHTML = 'Subscribe';
    }
});
