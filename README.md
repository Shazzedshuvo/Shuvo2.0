# Shazzed Shuvo - Next-Level 3D Full-Stack MERN Developer Portfolio 2.0 🚀

A high-performance, aesthetically rich personal portfolio web application built with **Next.js 15 (Turbopack)**, **React 19**, **TypeScript**, **Tailwind CSS v4**, **Three.js (Interactive 3D WebGL Canvas)**, **Framer Motion**, and dynamic **MongoDB** backend integration.

🌐 **Live Profile & Socials**:
- **Author**: MD. Shazzed Hossen Shuvo
- **Role**: Web Developer at `softvence.agency` • Full-Stack MERN Specialist
- **Portfolio**: [shazzedshuvo.vercel.app](https://shazzedshuvo.vercel.app/)
- **GitHub**: [@Shazzedshuvo](https://github.com/Shazzedshuvo)
- **LinkedIn**: [shazzedshuvo](https://www.linkedin.com/in/shazzedshuvo/)
- **Email**: shazzedshuvo@gmail.com
- **Phone**: +880 1719 052 334

---

## 🌟 Key Highlights & Advancements

1. **Interactive 3D WebGL Canvas Scene (Three.js)**:
   - Real-time 3D particle sphere, wireframe icosahedron, and orbital light rings that react fluidly to mouse movement and cursor inertia.
2. **Interactive CLI Terminal (`shazzed@portfolio:~$`)**:
   - Floating embedded developer terminal allowing recruiters to run commands (`help`, `skills`, `projects`, `experience`, `education`, `contact`, `sudo hire`, `clear`).
3. **Full-Stack MERN Backend with MongoDB Persistence**:
   - Next.js Route Handlers (`/api/contact`, `/api/projects`, `/api/skills`, `/api/testimonials`, `/api/seed`).
   - Client contact messages are validated and persisted directly to MongoDB, with zero-config offline fallback.
4. **3D Perspective Tilt Cards**:
   - Custom mouse-tracking 3D tilt perspective with dynamic glare tracking on cards and skill tokens.
5. **Single-Row Desktop Core Stack & 30+ Filterable Skills**:
   - Authentic, pixel-perfect brand SVG icons for React, Next.js, TypeScript, Node.js, Express, MongoDB, Tailwind, Three.js, WordPress, Shopify, Wix, Squarespace, Framer, and Git.
6. **Project Showcase & Lightbox Modal**:
   - Viewport-centered modal rendered with React Portal (`createPortal`), complete with keyboard navigation (`ArrowLeft`, `ArrowRight`, `Escape`).
7. **Obsidian Cyber Emerald Design System**:
   - Dual-theme engine (Obsidian Dark & Frosted Glass Light) with local storage persistence.
   - Particle canvas background, custom cursor follower, and confetti button celebrations.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router, Turbopack)
- **Library**: React 19, TypeScript
- **Styling**: Tailwind CSS v4, Vanilla CSS Custom Variables, Glassmorphism
- **3D & WebGL**: Three.js, HTML5 Canvas 2D Physics
- **Icons**: React-Icons (`si`, `fa`, `tb`), Lucide React
- **Animations**: Framer Motion, Canvas Confetti
- **Database & Backend**: MongoDB, Mongoose, RESTful API Route Handlers

---

## 📡 API Endpoints

- `POST /api/contact` - Validate & save client inquiries into MongoDB.
- `GET /api/projects` - Retrieve projects with category filtering (`?category=Full-Stack MERN`).
- `GET /api/skills` - Retrieve categorized skillsets (`?category=Frontend&featured=true`).
- `GET /api/testimonials` - Retrieve verified client feedback.
- `GET /api/seed` - Database connection and healthcheck endpoint.

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment (Optional)
Create `.env.local` to connect your MongoDB Atlas database:
```env
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/shazzed_portfolio?retryWrites=true&w=majority
```
*(If omitted, the application seamlessly runs using the rich static fallback dataset!)*

### 3. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view your 3D MERN portfolio in action!
