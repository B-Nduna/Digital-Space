// TorqueNest.jsx
import React, { useEffect, useState } from 'react';

const API_KEY = 'AIzaSyCb6ymQvkuWBPEHM12gyI6jqK4A3n09ay0';
const CHANNEL_ID = 'UCSUDHpe2oXAPZ308ednBykg';

const TorqueNest = () => {
  const [video, setVideo] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchLatestVideo = async () => {
      try {
        const res = await fetch(
          `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=1&order=date&type=video&key=${API_KEY}`
        );
        const data = await res.json();

        if (data.items && data.items.length > 0) {
          const latestVideo = data.items[0];
          setVideo({
            id: latestVideo.id.videoId,
            title: latestVideo.snippet.title,
            thumbnail: latestVideo.snippet.thumbnails.high.url,
          });
        } else {
          setError(true);
        }
      } catch (err) {
        console.error('Error fetching YouTube data:', err);
        setError(true);
      }
    };

    fetchLatestVideo();
  }, []);

  if (error) {
    return (
      <section className="youtube">
        <h2>TorqueNest</h2>
        <p>Check out the channel for the latest videos!</p>
        <a href="https://www.youtube.com/@TorqueNest" target="_blank" rel="noreferrer" className="subscribe-btn">
          Visit Channel <i className="fab fa-youtube"></i>
        </a>
      </section>
    );
  }

  if (!video) {
    return (
      <section className="youtube">
        <h2>TorqueNest</h2>
        <p>Loading latest video...</p>
      </section>
    );
  }

  return (
    <section className="youtube">
      <h2>TorqueNest</h2>
      <div className="youtube-grid">
        <div className="youtube-card">
          <a
            href={`https://youtube.com/watch?v=${video.id}`}
            className="thumbnail-link"
            target="_blank"
            rel="noreferrer"
          >
            <img src={video.thumbnail} alt={video.title} />
            <div className="play-overlay">
              <i className="fas fa-play"></i>
            </div>
          </a>
          <div className="youtube-info">
            <h3>{video.title}</h3>
            <div className="youtube-meta">
              <span className="channel">@TorqueNest</span>
              <a
                href="https://www.youtube.com/@TorqueNest?sub_confirmation=1"
                target="_blank"
                rel="noreferrer"
                className="subscribe-btn"
              >
                Subscribe <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TorqueNest;
