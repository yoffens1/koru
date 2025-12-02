# Developer Guide

## 1. Project Structure Explained

*   **`apps/`**: Contains the entry points for specific platforms.
    *   **`mobile/`**: React Native (Expo) project. Contains `app/` (routing), `babel.config.js`, and native configuration. minimal logic here.
    *   **`desktop/`**: Tauri + React project. Contains `src-tauri/` (Rust backend) and `src/` (React entry).

*   **`packages/`**: Shared code libraries.
    *   **`ui/`**: Reusable presentational components (Buttons, Inputs, Layouts) using Tamagui. No business logic here.
    *   **`core/`**: Shared utilities, TypeScript interfaces, constants, and helper functions.
    *   **`db/`**: Database configuration, WatermelonDB Schema, Models, and Migrations.
    *   **`features/`**: The heart of the application. Contains domain-specific logic, state management, and connected components.
        *   `features/notes/`: All logic/UI for Notes.
        *   `features/flashcards/`: All logic/UI for Flashcards.

## 2. Where to Write GUI Code

**Rule of Thumb:**
1.  Is it a generic UI element (e.g., a blue primary button)? -> **`packages/ui`**
2.  Is it a specific screen or part of a feature (e.g., "Note List Item")? -> **`features/<feature-name>/components`**
3.  Is it a top-level screen/route configuration? -> **`apps/<platform>/app`** (or `src/routes`)

**Example:**
*   **Don't** write a `NoteCard` component in `apps/mobile`.
*   **Do** write `NoteCard` in `packages/features/notes/components/NoteCard.tsx`.

## 3. Quick Reference (Cheat Sheet)

| I want to...                     | Where to write code                          | Example                          |
|----------------------------------|----------------------------------------------|----------------------------------|
| Create a reusable Button         | `packages/ui/components/`                   | `Button.tsx`                     |
| Add a Notes List screen          | `packages/features/notes/components/`       | `NoteList.tsx`                   |
| Fetch notes from database        | `packages/features/notes/logic/`            | `useNotes.ts` (hook)             |
| Add SM-2 algorithm               | `packages/features/flashcards/logic/`       | `sm2.ts` (pure function)         |
| Add AI summarization service     | `packages/core/interfaces/` (interface)     | `IAIService.ts`                  |
| Implement OpenAI integration     | `packages/features/notes/api/`              | `OpenAIService.ts`               |
| Add mobile-specific navigation   | `apps/mobile/app/`                          | `(tabs)/notes.tsx`               |
| Add desktop-specific window code | `apps/desktop/src-tauri/`                   | `main.rs` (Rust)                 |
