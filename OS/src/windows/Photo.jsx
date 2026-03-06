import React, { useState, useEffect } from "react";
import "./Photo.scss";
import MacWindow from "./MacWindow";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  Share,
  Info,
  Trash2,
  Download,
  Maximize2,
  Sidebar,
  List,
  ArrowLeft,
  Blocks,
} from "lucide-react";

const photos = Array.from({ length: 39 }, (_, i) => ({
  id: i + 1,
  src: `/images/${i + 1}.jpeg`,
  // Simulate mixed aspect ratios (portrait, landscape, square)
  aspectRatio: i % 3 === 0 ? "portrait" : i % 5 === 0 ? "square" : "landscape",
}));

const Photo = (pop) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewMode, setViewMode] = useState("all"); // 'all', 'years', 'months', 'days'
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [showSidebar, setShowSidebar] = useState(true);
  const [isSlideshow, setIsSlideshow] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  // Group photos by year (simulating macOS Photos organization)
  const photosByYear = {
    2024: photos.slice(0, 15),
    2023: photos.slice(15, 28),
    Earlier: photos.slice(28),
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

  const openPhoto = (index) => {
    setCurrentIndex(index);
    setSelectedPhoto(photos[index]);
    setIsSlideshow(true);
  };

  const closeSlideshow = () => {
    setIsSlideshow(false);
    setSelectedPhoto(null);
  };

  // Keyboard navigation in slideshow
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isSlideshow) return;

      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
      if (e.key === "Escape") closeSlideshow();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isSlideshow]);

  return (
    <MacWindow
      width={1200}
      height={750}
      title="Photo"
      Zindex={pop.Index.Photo}
      setIndex={pop.setIndex}
      setOpenWindows={pop.setOpenWindows}
      openWindows={pop.openWindows}
    >
      <div className="photo-app">
        {/* Toolbar */}
        <div className="photo-toolbar">
          <div className="toolbar-left">
            <button
              className={`view-btn ${viewMode === "all" ? "active" : ""}`}
              onClick={() => setViewMode("all")}
            >
              <Blocks size={16} />
              All Photos
            </button>
            <button
              className={`view-btn ${viewMode === "years" ? "active" : ""}`}
              onClick={() => setViewMode("years")}
            >
              Years
            </button>
            <button
              className={`view-btn ${viewMode === "months" ? "active" : ""}`}
              onClick={() => setViewMode("months")}
            >
              Months
            </button>
            <button
              className={`view-btn ${viewMode === "days" ? "active" : ""}`}
              onClick={() => setViewMode("days")}
            >
              Days
            </button>
          </div>
          <div className="toolbar-center">
            <span className="photo-count">{photos.length} Photos</span>
          </div>
          <div className="toolbar-right">
            <button
              className="icon-btn"
              onClick={() => setShowSidebar(!showSidebar)}
              title="Sidebar"
            >
              <Sidebar size={16} />
            </button>
            <button
              className="icon-btn"
              onClick={() => setShowInfo(!showInfo)}
              title="Info"
            >
              <Info size={16} />
            </button>
          </div>
        </div>

        <div className="photo-content">
          {/* Sidebar */}
          {showSidebar && (
            <div className="photo-sidebar">
              <div className="sidebar-section">
                <h4>Library</h4>
                <div className="sidebar-item active">
                  <Blocks size={16} />
                  All Photos
                </div>
                <div className="sidebar-item">
                  <Heart size={16} />
                  Favorites
                </div>
                <div className="sidebar-item">
                  <Download size={16} />
                  Imports
                </div>
                <div className="sidebar-item">
                  <Trash2 size={16} />
                  Recently Deleted
                </div>
              </div>

              <div className="sidebar-section">
                <h4>Years</h4>
                {Object.keys(photosByYear).map((year) => (
                  <div
                    key={year}
                    className="sidebar-item"
                    onClick={() => setViewMode("years")}
                  >
                    {year}
                  </div>
                ))}
              </div>

              <div className="sidebar-section">
                <h4>Media Types</h4>
                <div className="sidebar-item">Photos</div>
                <div className="sidebar-item">Videos</div>
                <div className="sidebar-item">Selfies</div>
                <div className="sidebar-item">Screenshots</div>
              </div>
            </div>
          )}

          {/* Main Photo Grid - Masonry Layout */}
          {!isSlideshow ? (
            <div className="photo-grid-container">
              <div className="photo-masonry">
                {photos.map((photo, index) => (
                  <div
                    key={photo.id}
                    className={`photo-item ${photo.aspectRatio}`}
                    onClick={() => openPhoto(index)}
                  >
                    <img
                      src={photo.src}
                      alt={`Photo ${photo.id}`}
                      loading="lazy"
                    />
                    <div className="photo-overlay">
                      <Heart className="heart-icon" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            /* Slideshow View */
            <div className="slideshow-view">
              <div className="slideshow-header">
                <button className="back-btn" onClick={closeSlideshow}>
                  <ArrowLeft size={16} />
                  All Photos
                </button>
                <div className="slideshow-actions">
                  <button className="icon-btn" title="Info">
                    <Info size={18} />
                  </button>
                  <button className="icon-btn" title="Edit">
                    <Maximize2 size={18} />
                  </button>
                  <button className="icon-btn" title="Share">
                    <Share size={18} />
                  </button>
                  <button className="icon-btn" title="Delete">
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>

              <div className="slideshow-content">
                <button className="nav-btn prev" onClick={goToPrevious}>
                  <ChevronLeft size={28} />
                </button>

                <div className="main-photo-wrapper">
                  <img
                    src={photos[currentIndex].src}
                    alt={`Photo ${currentIndex + 1}`}
                    className="main-photo"
                  />
                </div>

                <button className="nav-btn next" onClick={goToNext}>
                  <ChevronRight size={28} />
                </button>
              </div>

              <div className="slideshow-footer">
                <span className="photo-counter">
                  {currentIndex + 1} of {photos.length}
                </span>
                <div className="thumbnail-strip">
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
            </div>
          )}

          {/* Info Panel */}
          {showInfo && isSlideshow && (
            <div className="info-panel">
              <h3>Photo Information</h3>
              <div className="info-item">
                <span className="label">Filename</span>
                <span className="value">{currentIndex + 1}.jpeg</span>
              </div>
              <div className="info-item">
                <span className="label">Date</span>
                <span className="value">January {currentIndex + 1}, 2024</span>
              </div>
              <div className="info-item">
                <span className="label">Camera</span>
                <span className="value">iPhone 14 Pro</span>
              </div>
              <div className="info-item">
                <span className="label">Dimensions</span>
                <span className="value">4032 × 3024</span>
              </div>
              <div className="info-item">
                <span className="label">Size</span>
                <span className="value">3.2 MB</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </MacWindow>
  );
};

export default Photo;
