# AI Development Rules for AUTOMATECH Project

This document outlines the core technologies and specific usage rules for maintaining consistency and quality in the AUTOMATECH web application.

## Tech Stack Overview

1.  **Frontend Framework:** React with TypeScript.
2.  **Build Tool:** Vite.
3.  **Styling:** Tailwind CSS, utilizing a custom industrial/technical dark theme defined in `src/index.css` and `tailwind.config.ts`.
4.  **UI Library:** shadcn/ui (built on Radix UI).
5.  **Routing:** React Router DOM.
6.  **Data Management:** React Query (`@tanstack/react-query`) for server state.
7.  **Icons:** Lucide React.
8.  **Forms:** React Hook Form, typically paired with Zod for schema validation.
9.  **Notifications:** Sonner (for general toasts) and standard shadcn/ui Toast components (for system notifications).

## Library Usage Guidelines

| Feature | Recommended Library | Notes |
| :--- | :--- | :--- |
| **UI Components** | shadcn/ui (Radix) | Use pre-built components. If customization is needed, create a new component file rather than modifying the `src/components/ui/` files. |
| **Styling** | Tailwind CSS | All styling must be done using Tailwind utility classes. Ensure responsiveness is always considered. |
| **Navigation** | React Router DOM | All routing logic should be handled by `BrowserRouter`, `Routes`, and `Route` components, centralized in `src/App.tsx`. |
| **Icons** | Lucide React | Use icons from this library exclusively. |
| **Forms & Validation** | React Hook Form + Zod | Standard approach for complex form handling and validation. |
| **Data Fetching** | React Query | Use for managing asynchronous data fetching, caching, and synchronization. |
| **Notifications** | Sonner | Preferred library for user-facing toasts. |

## Code Structure and Conventions

*   **File Structure:** Components go into `src/components/`, pages into `src/pages/`, and utility functions into `src/lib/` or `src/hooks/`.
*   **Component Size:** Aim for small, focused components (ideally under 100 lines). Create new files for every new component or hook.
*   **TypeScript:** Strict TypeScript usage is mandatory. Define clear interfaces and types.
*   **Simplicity:** Prioritize simple, elegant solutions. Avoid over-engineering.