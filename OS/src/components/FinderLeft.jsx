import React from "react";
import "./FinderLeft.scss";
import {
  Folder,
  Image as ImageIcon,
  FileText,
  ChevronLeft,
  ChevronRight,
  Search,
  LayoutGrid,
  List as ListIcon,
  Columns,
  Monitor,
  Download,
  Clock,
  Cloud,
  HardDrive,
  Trophy,
  MapPin,
  Maximize2,
  X,
  Star,
} from "lucide-react";

const FinderLeft = () => {
  return (
    <>
      <div className="finder-left">
        <div className="fev">
          <h3>FAVORITES</h3>
          <div className="fev-item">
            <Cloud className="fev-icon" />
            iCloud Drive
          </div>
          <div className="fev-item">
            <Clock className="fev-icon" />
            Recents
          </div>
          <div className="fev-item">
            <Monitor className="fev-icon" />
            Desktop
          </div>
          <div className="fev-item">
            <FileText className="fev-icon" />
            Documents
          </div>
          <div className="fev-item">
            <Download className="fev-icon" />
            Downloads
          </div>
        </div>
        <div className="fev">
          <h3>LOCATIONS</h3>
          <div className="fev-item">
            <HardDrive className="fev-icon" />
            Macintosh HD
          </div>
          <div className="fev-item">
            <HardDrive className="fev-icon" />
            External SSD
          </div>
        </div>
        <div className="fev">
          <h3>TAGGED</h3>
          <div className="fev-item">
            <div
              className="red"
              style={{
                width: "12px",
                height: "12px",
                background: "#fe4e45",
                borderRadius: "50%",
              }}
            ></div>
            Red
          </div>
          <div className="fev-item">
            <div
              className="orange"
              style={{
                width: "12px",
                height: "12px",
                background: "#ff9900",
                borderRadius: "50%",
              }}
            ></div>
            Orange
          </div>
          <div className="fev-item">
            <div
              className="yellow"
              style={{
                width: "12px",
                height: "12px",
                background: "#ffff00",
                borderRadius: "50%",
              }}
            ></div>
            Yellow
          </div>
        </div>
      </div>
    </>
  );
};

export default FinderLeft;
