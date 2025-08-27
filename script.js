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
const CHANNEL_ID = 'UCSUDHpe2oXAPZ308ednBykg';

async function fetchLatestYouTubeVideo() {
    try {
        // Updated API endpoint to use channel username
        const response = await fetch(
            `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${CHANNEL_ID}&maxResults=1&order=date&type=video&key=${API_KEY}`
        );
        const data = await response.json();

        if (data.items && data.items.length > 0) {
            const video = data.items[0];
            const videoId = video.id.videoId;
            const snippet = video.snippet;

            // Update YouTube card content
            document.querySelector('.youtube-grid').innerHTML = `
                <div class="youtube-card">
                    <a href="https://youtube.com/watch?v=${videoId}" class="thumbnail-link" target="_blank">
                        <img src="${snippet.thumbnails.high.url}" alt="${snippet.title}">
                        <div class="play-overlay">
                            <i class="fas fa-play"></i>
                        </div>
                    </a>
                    <div class="youtube-info">
                        <h3>${snippet.title}</h3>
                        <div class="youtube-meta">
                            <span class="channel">TorqueNest</span>
                            <a href="https://youtube.com/@TorqueNest" class="subscribe-btn" target="_blank">
                                Subscribe <i class="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
            `;
        }
    } catch (error) {
        console.error('Error fetching YouTube data:', error);
        handleError();
    }
}

function handleError() {
    document.querySelector('.youtube-grid').innerHTML = `
        <div class="youtube-card">
            <div class="youtube-info">
                <h3>Check out my latest videos</h3>
                <div class="youtube-meta">
                    <a href="https://youtube.com/@TorqueNest" class="subscribe-btn" target="_blank">
                        Visit Channel <i class="fab fa-youtube"></i>
                    </a>
                </div>
            </div>
        </div>
    `;
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', fetchLatestYouTubeVideo);
