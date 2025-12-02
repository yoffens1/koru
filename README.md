<div align="center">

# 🌀 Koru

**Cross-platform Local-First productivity ecosystem**

*Your knowledge, tasks, and learning in one unified space*

[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue?logo=typescript)](https://www.typescriptlang.org/)
[![React Native](https://img.shields.io/badge/React_Native-0.74-61DAFB?logo=react)](https://reactnative.dev/)
[![Tauri](https://img.shields.io/badge/Tauri-2.0-FFC131?logo=tauri)](https://tauri.app/)
[![Turborepo](https://img.shields.io/badge/Turborepo-2.6-EF4444?logo=turborepo)](https://turbo.build/)

[Features](#-features) • [Tech Stack](#-tech-stack) • [Getting Started](#-getting-started) • [Development](#-development) • [Roadmap](#-roadmap)

</div>

---

## 🎯 About

**Koru** is a cross-platform productivity app that unifies note-taking, spaced repetition learning, task management, and knowledge organization into a single, seamless experience. Built with a **Local-First** architecture, your data stays yours — synced across all devices without compromising privacy.

### Why Koru?

- 🔒 **Privacy-First**: All data stored locally with optional end-to-end encrypted sync
- ⚡ **Blazing Fast**: Native performance on mobile and desktop
- 🎨 **Minimalist Design**: Clean, distraction-free iOS-inspired UI
- 🔄 **Cross-Platform**: One codebase for iOS, Android, Windows, macOS, and Linux
- 🧠 **Intelligent**: AI-powered note organization and spaced repetition

---

## ✨ Features

### 📝 Smart Note-Taking
- Markdown editor with live preview
- Hierarchical organization with nested items
- Bi-directional linking between notes
- Full-text search across all content

### 🧠 Spaced Repetition (Anki-Style)
- SM-2 algorithm for optimal review intervals
- Custom card types (Front/Back, Cloze deletion)
- Progress tracking and statistics
- Import/Export Anki decks

### ✅ Task Management
- Flexible TODO lists with priorities
- Calendar view with scheduling
- Project branching and sub-tasks
- Pomodoro timer integration

### 📚 Knowledge Library
- Book reading list with progress tracking
- Web article clipping
- Automatic metadata extraction
- Tag-based organization

---

## 🏗️ Tech Stack

### Frontend
- **Mobile**: [React Native](https://reactnative.dev/) + [Expo](https://expo.dev/)
- **Desktop**: [Tauri](https://tauri.app/) + React
- **UI**: React Native Web (shared components across platforms)

### Backend
- **Database**: [WatermelonDB](https://watermelondb.dev/) (SQLite)
- **Sync**: Supabase (optional, end-to-end encrypted)
- **Storage**: Local-first with cloud backup

### Development
- **Monorepo**: [Turborepo](https://turbo.build/repo)
- **Package Manager**: pnpm
- **Language**: TypeScript
- **Bundler**: Metro (mobile), Vite (desktop)

---

## 📁 Project Structure
```
koru/
├── apps/
│ ├── mobile/ # React Native (Expo) - iOS & Android
│ └── desktop/ # Tauri - Windows, macOS, Linux
├── packages/
│ ├── shared/ # Business logic & utilities
│ ├── database/ # WatermelonDB schemas & models
│ └── ui/ # Shared React Native components
├── turbo.json # Turborepo configuration
├── pnpm-workspace.yaml # pnpm workspace config
└── package.json # Root dependencies
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ ([Download](https://nodejs.org/))
- **pnpm** 8+ (`npm install -g pnpm`)
- **Rust** (for Tauri desktop) ([Install](https://rustup.rs/))

**Platform-specific:**
- **iOS**: Xcode 14+
- **Android**: Android Studio + JDK 17
- **Windows**: Visual Studio Build Tools
- **macOS**: Xcode Command Line Tools

### Installation
**Clone the repository**
git clone https://github.com/yoffens1/koru.git
cd koru

**Install dependencies**
pnpm install

**Start development servers (all platforms)**
pnpm dev

### Platform-Specific Commands

Mobile only
cd apps/mobile
pnpm ios # iOS simulator
pnpm android # Android emulator
pnpm web # Web browser

Desktop only
cd apps/desktop
pnpm dev # Development mode
pnpm build # Production build

text

---

## 🛠️ Development

### Running Tests
pnpm test

text

### Linting & Formatting
pnpm lint # ESLint
pnpm format # Prettier

### Building for Production
pnpm build # Build all apps

### Clean & Reset

pnpm clean # Remove build artifacts


---

## 📱 Platform Support

| Platform | Status | Notes |
|----------|--------|-------|
| iOS | ✅ Supported | iOS 13+ |
| Android | ✅ Supported | Android 8+ (API 26+) |
| Windows | ✅ Supported | Windows 10+ |
| macOS | ✅ Supported | macOS 10.15+ |
| Linux | ✅ Supported | Debian, Ubuntu, Fedora |
| Web | 🚧 Experimental | Limited features |

---

## 🗺️ Roadmap

### v0.1 (Current)
- [x] Basic monorepo setup
- [x] Mobile app scaffold (Expo)
- [x] Desktop app scaffold (Tauri)
- [ ] WatermelonDB integration
- [ ] Basic note editor

### v0.2
- [ ] Spaced repetition engine
- [ ] Task management
- [ ] Cloud sync (Supabase)

### v0.3
- [ ] AI-powered features
- [ ] Advanced search
- [ ] Export/Import

### v1.0
- [ ] Public release
- [ ] App Store & Play Store
- [ ] Full documentation

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check [issues page](https://github.com/yoffens1/koru/issues).

---

## 📄 License

This project is [Unlicense](http://unlicense.org/) licensed — it's public domain. Do whatever you want with it!

---

## 🙏 Acknowledgments

- Inspired by [Obsidian](https://obsidian.md/), [Anki](https://apps.ankiweb.net/), and [Notion](https://www.notion.so/)
- Built with tools from [Vercel](https://vercel.com/), [Expo](https://expo.dev/), and [Tauri](https://tauri.app/)

---

<div align="center">

**[⬆ back to top](#-koru)**

Made with ❤️ by [yoffens](https://github.com/yoffens1)

</div>
