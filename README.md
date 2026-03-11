# macOS Desktop Clone - React

A web-based macOS desktop simulation built with React, featuring a beautiful glassmorphism theme and responsive design.

![macOS Desktop Clone](https://img.shields.io/badge/React-19-blue) ![Vite](https://img.shields.io/badge/Vite-7-blueviolet) ![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

- **Authentic macOS Experience** - Full desktop simulation with dock, windows, and navigation bar
- **Glassmorphism Theme** - Beautiful frosted glass effects throughout the interface
- **Responsive Design** - Works on desktop, tablet, and mobile devices
- **7 Window Types**:
  - 📁 Finder - File explorer with grid/list views
  - 📝 Notes - Three-panel notes application
  - 🐙 GitHub - Project showcase with glass cards
  - 📄 PDF Viewer - Resume/document viewer
  - 🎵 Spotify - Music player interface
  - 🔗 Links - Bookmark manager
  - 🖼️ Image Viewer - Image gallery with navigation

### Keyboard Shortcuts

| Shortcut   | Action            |
| ---------- | ----------------- |
| `Ctrl + F` | Open Finder       |
| `Ctrl + G` | Open GitHub       |
| `Ctrl + N` | Open Notes        |
| `Ctrl + P` | Open PDF          |
| `Ctrl + S` | Open Spotify      |
| `Ctrl + L` | Open Links        |
| `Ctrl + I` | Open Image Viewer |

## 🚀 Getting Started

### Prerequisites

- Node.js 20.19+ or 22.12+
- npm or yarn

### Installation

```bash
# Navigate to project directory
cd OS

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

## 🛠️ Tech Stack

- **React 19** - UI framework
- **Vite 7** - Build tool
- **react-rnd** - Draggable and resizable windows
- **lucide-react** - Icon library
- **SCSS** - CSS preprocessor

## 📁 Project Structure

```
OS/
├── public/
│   ├── icons/          # App icons
│   ├── images/         # Sample images (1-36)
│   ├── wallpaper.jpg   # Desktop wallpaper
│   └── resume.pdf      # Sample PDF
├── src/
│   ├── components/     # Reusable UI components
│   │   ├── Dock.jsx/scss       # Bottom dock
│   │   ├── Nav.jsx/scss        # Top navigation
│   │   ├── FinderLeft.jsx/scss # Finder sidebar
│   │   ├── FinderRight.jsx/scss# Finder content
│   │   ├── Grid.jsx/scss       # Grid view
│   │   ├── List.jsx/scss       # List view
│   │   ├── LinksLeft.jsx/scss  # Links sidebar
│   │   ├── LinksRight.jsx/scss # Links content
│   │   ├── NoteLeftPanel.jsx/scss
│   │   ├── NoteMainContent.jsx/scss
│   │   └── NoteRightPanel.jsx/scss
│   ├── windows/        # Window implementations
│   │   ├── MacWindow.jsx/scss  # Reusable window wrapper
│   │   ├── Finder.jsx/scss     # File explorer
│   │   ├── GitHub.jsx/scss     # GitHub projects
│   │   ├── Note.jsx/scss       # Notes app
│   │   ├── Pdf.jsx/scss        # PDF viewer
│   │   ├── Spoti.jsx/scss      # Spotify UI
│   │   ├── Links.jsx/scss      # Links manager
│   │   └── Image.jsx/scss      # Image viewer
│   ├── App.jsx         # Main application
│   ├── App.scss        # Global styles
│   └── main.jsx        # Entry point
├── package.json
└── vite.config.js
```

## 🎨 Design System

### Colors

| Variable       | Light Mode              | Dark Mode               |
| -------------- | ----------------------- | ----------------------- |
| Background     | `#f5f5f5`               | `#1a1a1a`               |
| Surface        | `rgba(255,255,255,0.8)` | `rgba(30,30,30,0.9)`    |
| Text Primary   | `#1a1a1a`               | `#ffffff`               |
| Text Secondary | `#666666`               | `rgba(255,255,255,0.7)` |
| Accent         | `#007aff`               | `#64ffda`               |

### Glass Effects

The theme uses backdrop-filter for frosted glass effects:

- Windows: `backdrop-filter: blur(20px)`
- Dock: `backdrop-filter: blur(15px)`
- Cards: `backdrop-filter: blur(10px)`

## 📱 Responsive Breakpoints

| Breakpoint | Width         | Adjustments                   |
| ---------- | ------------- | ----------------------------- |
| Desktop XL | > 1440px      | Full layout                   |
| Desktop    | 1024px-1440px | Slightly reduced padding      |
| Tablet     | 768px-1024px  | Stacked layouts               |
| Mobile     | < 768px       | Compact dock, vertical panels |

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Built with ❤️ using React and Vite
