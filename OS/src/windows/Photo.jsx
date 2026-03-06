import React, { useState } from "react";
import "./Photo.scss";
import MacWindow from "./MacWindow";
import { ChevronLeft, ChevronRight, Grid, List, Heart } from "lucide-react";

const photos = Array.from({ length: 39 }, (_, i) => ({
  id: i + 1,
  src: `../images/${i + 1}.jpeg`,
}));

const Photo = (pop) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewMode, setViewMode] = useState("grid"); // 'grid' or 'slideshow'
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

  const openPhoto = (index) => {
    setCurrentIndex(index);
    setSelectedPhoto(photos[index]);
    setViewMode("slideshow");
  };

  const closeSlideshow = () => {
    setViewMode("grid");
    setSelectedPhoto(null);
  };

  return (
    <MacWindow
      width={1000}
      height={650}
      title="Photos"
      Zindex={pop.Index.Photo}
      setIndex={pop.setIndex}
      setOpenWindows={pop.setOpenWindows}
      openWindows={pop.openWindows}
    >
      <div className="photo-app">
        {/* Toolbar */}
        <div className="photo-toolbar">
          <div className="toolbar-left">
            <span className="album-name">All Photos</span>
          </div>
          <div className="toolbar-right">
            <span className="photo-count">{photos.length} items</span>
          </div>
        </div>

        {viewMode === "grid" ? (
          /* Photo Grid View */
          <div className="photo-grid">
            {photos.map((photo, index) => (
              <div
                key={photo.id}
                className="photo-item"
                onClick={() => openPhoto(index)}
              >
                <img src={photo.src} alt={`Photo ${photo.id}`} />
                <div className="photo-overlay">
                  <Heart className="heart-icon" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Slideshow View */
          <div className="slideshow-view">
            <div className="slideshow-header">
              <button className="back-btn" onClick={closeSlideshow}>
                <ChevronLeft className="btn-icon" />
                Back to Photos
              </button>
              <span className="photo-number">
                {currentIndex + 1} of {photos.length}
              </span>
            </div>
            <div className="slideshow-content">
              <button className="nav-btn prev" onClick={goToPrevious}>
                <ChevronLeft className="nav-icon" />
              </button>
              <div className="main-photo">
                <img
                  src={photos[currentIndex].src}
                  alt={`Photo ${currentIndex + 1}`}
                />
              </div>
              <button className="nav-btn next" onClick={goToNext}>
                <ChevronRight className="nav-icon" />
              </button>
            </div>
            <div className="slideshow-thumbnails">
              {photos
                .slice(
                  Math.max(0, currentIndex - 4),
                  Math.min(photos.length, currentIndex + 5),
                )
                .map((photo, idx) => {
                  const actualIndex = Math.max(0, currentIndex - 4) + idx;
                  return (
                    <div
                      key={photo.id}
                      className={`thumbnail ${actualIndex === currentIndex ? "active" : ""}`}
                      onClick={() => setCurrentIndex(actualIndex)}
                    >
                      <img
                        src={photo.src}
                        alt={`Thumbnail ${actualIndex + 1}`}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
        )}
      </div>
    </MacWindow>
  );
};

export default Photo;
