# Koru: Local-First Note-Taking & Spaced Repetition App

## 1. Tech Stack & Rationale

*   **pnpm**: Chosen for its efficient disk space usage and strict dependency management, which is crucial for a monorepo with shared packages.
*   **Turborepo**: High-performance build system for monorepos to ensure fast tasks execution (build, lint, test) and caching.
*   **React Native (Expo Router)**: Enables a high-quality native mobile experience (iOS/Android) with a unified routing concept close to web standards.
*   **Tauri + React Web**: Provides a lightweight, secure, and performant desktop application (Windows/macOS/Linux) with a tiny footprint compared to Electron.
*   **Tamagui**: A universal UI kit that compiles to atomic CSS on the web and native views on mobile, ensuring 95% code sharing and high performance.
*   **WatermelonDB**: A reactive, offline-first database built on SQLite. It handles data persistence and synchronization efficiently, perfect for "local-first" apps.

## 2. Architecture Overview

### Feature-Based Structure
We strictly follow a **Feature-Based Architecture**. Instead of grouping files by type (components, hooks, utils), we group them by business domain (e.g., `features/notes`, `features/flashcards`). This makes the codebase scalable and easier to maintain as the application grows.

### Data Flow
1.  **User** interacts with a **UI Component** (e.g., clicks "Save Note").
2.  The component calls logic from the **Feature Module** (e.g., `useNoteCreate`).
3.  The feature logic interacts with the **Database** (WatermelonDB) to persist changes.
4.  The database updates and reactively pushes changes back to the UI via Observables.

### Code Sharing Strategy
*   **Logic**: 100% shared. All business logic, hooks, and database interactions live in `packages/features` and `packages/core`.
*   **UI**: ~95% shared. We use Tamagui for universal components.
*   **Platform Specifics**: Handled via file extensions (`.native.tsx`, `.web.tsx`) or small adapter layers in the `apps/` directories only when absolutely necessary.

## 3. Project To-Do List (MVP Roadmap)

- [ ] **Setup**: Initialize Monorepo with pnpm & Turborepo.
- [ ] **Core**: Configure WatermelonDB schema and migrations.
- [ ] **UI**: Setup Tamagui design system (tokens, themes).
- [ ] **Feature: Notes**:
    - [ ] Create Note model.
    - [ ] Implement Note List & Editor UI.
    - [ ] Add Markdown rendering (Platform-specific).
- [ ] **Feature: Flashcards**:
    - [ ] Create Flashcard model.
    - [ ] Implement SM-2 Spaced Repetition Algorithm.
    - [ ] Review Interface.
- [ ] **Apps**:
    - [ ] Setup Expo (Mobile) entry point.
    - [ ] Setup Tauri (Desktop) entry point.
