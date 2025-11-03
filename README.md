# Builder X

**Builder X** is a no-code website builder that allows users to create websites using a pre-defined component library. With an intuitive **drag-and-drop (DnD)** interface, users can visually design pages without writing a single line of code. Users must log in to create and save websites, and can revisit their saved websites later.

## Live Demo

live here: [Live Link](https://builder-x-delta.vercel.app)

---

## Table of Contents

- [Note](#note)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Author](#author)

---

## Note

**Note:** This is my work-related project, so it will be pushed to my repository. Please handle it carefully and avoid making unintended changes.

**Important:** TRename the environment file from .env.sample to .env to ensure proper configuration

Before running the project, make sure you configure your environment correctly.

### Environment Variables

1. Rename `.env.sample` to `.env`.

## Features

- **No-Code Website Builder**: Drag-and-drop components to build web pages.
- **Predefined Component Library**: Navbar, Hero sections, banners, course/product sections, and more.
- **User Authentication**: Users must log in to create and save websites.
- **Save & Revisit Websites**: Users can view and edit their saved websites anytime.
- **Responsive Design**: Built with Tailwind CSS for mobile-friendly layouts.

---

## Technologies Used

- **React** – Frontend library for building UI.
- **Tailwind CSS** – Styling framework for modern, responsive designs.
- **React Toolkit** – Component utilities for React.
- **React Redux Toolkit (RTK)** – State management for the application.
- **@hello-pangea/dnd** – Drag-and-drop library for visual site building.
- **Firebase** – Backend for authentication, storage, and database.

---

## Getting Started

These instructions will get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js >= 14
- npm or yarn installed

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/kaziarman23/builder-x.git
```

2. Navigate to the project directory:

```bash
cd builder-x
```

3. Install dependencies:

```bash
npm install
# or
yarn install
```

4. Set up Firebase configuration in a `.env` file (for authentication and database).

---

## Usage

Start the development server:

```bash
npm run dev
# or
yarn start
```

---

## Project Structure

```
builder-x/
├─ public/
├─ src/
│  ├─ components/   # Reusable React components
│  ├─ pages/        # Page components like Home, Login, Register, About
│  ├─ redux/        # Redux slices and store configuration
│  ├─ utils/        # Helper functions
│  ├─ App.jsx
│  └─ index.js
├─ package.json
├─ tailwind.config.js
└─ README.md
```

---

## Author

**Kazi Arman**
Email: [kaziarman@proton.me](mailto:kaziarman@proton.me)
GitHub: [https://github.com/kaziarman23/builder-x](https://github.com/kaziarman23/builder-x)
