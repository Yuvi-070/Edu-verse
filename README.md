# EduVerse

**EduVerse** is a lightweight learning experience (LMS-style) built for **low-end phones and slow networks**. Course media is not stored in the app: each lesson uses **YouTube embeds** as the video backend, so you get professional content without hosting or transcoding video yourself.

The UI is based on the Educrat / Next.js template stack, extended for this hackathon with clearer copy, course discovery, and learner-centric features.

---

## Highlights

| Area | What we ship |
|------|----------------|
| **YouTube as backend** | Each course in `data/courses.js` includes a `src` embed URL. The app never hosts video files. |
| **Data-friendly playback** | Course pages use a **click-to-load** player (`LazyYouTubeEmbed`). The page shows a static thumbnail until the learner taps **Play video**, which avoids loading the heavy YouTube iframe on every scroll. |
| **Search & filters** | On the home page, **Explore featured courses** supports **search** (title, category, educator) plus the existing state tabs (All, Featured, Popular, Trending). |
| **Save & resume context** | **Save course** toggles bookmarks stored in `localStorage` (`eduverse_bookmarks_v1`). Opening a course records **recently viewed** ids (`eduverse_recent_courses_v1`) for future features (e.g. a “Continue” row). |
| **My list** | On the course sidebar, **Add to my list** uses the existing cart pattern in `context/Context.js` so learners can collect free courses in one place. |
| **Accessibility & motion** | The hero **mouse parallax** is skipped when the user prefers reduced motion (`prefers-reduced-motion: reduce`). |
| **Correct routing** | The course single route `app/(courseSingle)/courses/[id]/page.jsx` now **returns** JSX correctly (previously the page could render blank). Course details react when `id` changes. |

---

## Tech stack

- **Next.js 14** (App Router)
- **React 18**
- **Clerk** (`@clerk/nextjs`) for authentication (see `middleware.ts`, `app/sign-in`, `app/sign-up`)
- **Bootstrap 5** + **Sass** (`public/assets/sass/styles.scss`, `custom.scss`)
- **Swiper** for the home course carousel

---

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

### Environment

Clerk requires keys in your environment (see [Clerk Next.js docs](https://clerk.com/docs/quickstarts/nextjs)). Add the variables Clerk provides (for example `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY`) to `.env.local` before using sign-in in production.

---

## Project layout (key paths)

| Path | Role |
|------|------|
| `app/page.jsx` | Home: hero, featured courses, learning path strip, footer |
| `app/(courseSingle)/courses/[id]/page.jsx` | Single course shell |
| `components/courseSingle/CourseDetailsOne.jsx` | Course header, lazy video, overview, content, reviews |
| `components/courseSingle/LazyYouTubeEmbed.jsx` | Thumbnail + tap-to-load YouTube iframe |
| `components/courseSingle/CourseDetailToolbar.jsx` | Save course + copy share link |
| `components/courseSingle/PinContentTwo.jsx` | Sticky sidebar: price/free, stats from data, **Add to my list** |
| `components/homes/courses/CoursesFive.jsx` | Featured courses + **search** + Swiper |
| `context/Context.js` | Cart + **bookmarks** + **recent views** + `localStorage` sync |
| `data/courses.js` | Course catalog: titles, metadata, **`src` YouTube embed** |
| `lib/youtube.js` | Parses YouTube video id from embed/watch URLs (for thumbnails) |

---

## Adding or editing a course

Edit `data/courses.js`. Each entry should include at least:

- `id` — unique number, used in URLs `/courses/[id]`
- `title`, `desc`, `src` — **`src`** must be a standard embed URL, e.g. `https://www.youtube.com/embed/VIDEO_ID?...`
- `lessonCount`, `duration` (minutes), `level`, `languange`, `category`, `state`, etc.

After changing data, reload the dev server if needed.

---

## Design notes (low-end devices)

1. **Defer the iframe** until the user explicitly plays the lesson (`LazyYouTubeEmbed`).
2. **Prefer static thumbnails** (`i.ytimg.com`) over autoplaying video.
3. **Avoid unnecessary motion** when `prefers-reduced-motion` is set (hero parallax).
4. **Keep catalog logic on the client** with simple filters — no heavy runtime for search on this dataset.

---

## Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Run production server |
| `npm run lint` | ESLint |

---

## License / attribution

This repository builds on a commercial-style LMS template (Educrat) and Next.js defaults. Respect the original template license if you redistribute assets. EduVerse-specific logic (lazy embed, bookmarks, search, README) is described above for your hackathon submission.
